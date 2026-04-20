using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;

namespace src.WebAPI.Controllers.Main;

[Route("api/[controller]/[action]")]
[ApiController]
public class MediasController : ControllerBase
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IWebHostEnvironment _env;
    public MediasController(IUnitOfWork unitOfWork, IWebHostEnvironment env)
    {
        _unitOfWork = unitOfWork;
        _env = env;
    }

    [HttpPost("upload")]
    [Authorize(Roles = "Admin,User")]
    public async Task<IActionResult> Upload(
        IFormFile file,
        [FromForm] int userId,
        [FromForm] string type // "profile" or "gallery"
    )
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file uploaded.");

        var allowedExtensions = new[] { ".jpg", ".png", ".gif" };
        var fileExtension = Path.GetExtension(file.FileName).ToLower();

        if (!allowedExtensions.Contains(fileExtension))
            return BadRequest("Invalid file type.");

        if (type != "profile" && type != "gallery")
            return BadRequest("Invalid upload type.");

        var userRoot = Path.Combine(_env.WebRootPath, "users", userId.ToString());
        var targetFolder = type == "profile" ? "profile" : "gallery";
        var fileDirectory = Path.Combine(userRoot, targetFolder);

        if (!Directory.Exists(fileDirectory))
            Directory.CreateDirectory(fileDirectory);

        string fileName;
        string filePath;

        if (type == "profile")
        {
            // 🔥 Ensure only ONE profile image exists
            foreach (var existingFile in Directory.GetFiles(fileDirectory))
            {
                System.IO.File.Delete(existingFile);
            }

            fileName = "profile_image" + fileExtension;
            filePath = Path.Combine(fileDirectory, fileName);
        }
        else
        {
            // 🔥 Allow multiple files (unique names)
            fileName = Guid.NewGuid().ToString() + fileExtension;
            filePath = Path.Combine(fileDirectory, fileName);
        }

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        var relativePath = Path.Combine("users", userId.ToString(), targetFolder, fileName);

        var fileRecord = new Media
        {
            FileName = fileName,
            FileType = "image",
            FileSize = file.Length,
            FilePath = relativePath,
            UserId = userId
        };

        await _unitOfWork.MediaRepository.AddAsync(fileRecord);
        await _unitOfWork.SaveAsync();

        return Ok(new { filePath = relativePath });
    }

    [HttpGet("{fileId}")]
    [Authorize(Roles = "Admin,User")]
    public async Task<IActionResult> Download(int fileId)
    {
        var fileRecord = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == fileId);

        if (fileRecord == null)
            return NotFound("File not found.");

        // 🔒 Enforce ownership (Admin can access all)
        var currentUserIdClaim = User.FindFirst("sub")?.Value;

        if (currentUserIdClaim == null)
            return Unauthorized();

        var currentUserId = int.Parse(currentUserIdClaim);
        var isAdmin = User.IsInRole("Admin");

        if (!isAdmin && fileRecord.UserId != currentUserId)
            return Forbid();

        var fullPath = Path.Combine(_env.WebRootPath, fileRecord.FilePath);

        if (!System.IO.File.Exists(fullPath))
            return NotFound("File does not exist on the server.");

        // ✅ Built-in content type resolver
        var provider = new FileExtensionContentTypeProvider();

        if (!provider.TryGetContentType(fullPath, out string contentType))
        {
            contentType = "application/octet-stream";
        }

        var stream = new FileStream(fullPath, FileMode.Open, FileAccess.Read, FileShare.Read);

        return File(stream, contentType, fileRecord.FileName);
    }

    [HttpDelete("{fileId}")]
    [Authorize(Roles = "Admin,User")]
    public async Task<IActionResult> Remove(int fileId)
    {
        var fileRecord = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == fileId);

        if (fileRecord == null)
            return NotFound("File not found.");

        // 🔒 Enforce ownership (Admin can delete any file)
        var currentUserIdClaim = User.FindFirst("sub")?.Value;

        if (currentUserIdClaim == null)
            return Unauthorized();

        var currentUserId = int.Parse(currentUserIdClaim);
        var isAdmin = User.IsInRole("Admin");

        if (!isAdmin && fileRecord.UserId != currentUserId)
            return Forbid();

        var fullPath = Path.Combine(_env.WebRootPath, fileRecord.FilePath);

        // 🧹 Delete physical file if exists
        if (System.IO.File.Exists(fullPath))
        {
            System.IO.File.Delete(fullPath);
        }

        // 🧹 Remove from database
        _unitOfWork.MediaRepository.Remove(fileRecord);
        await _unitOfWork.SaveAsync();

        return Ok(new { message = "File removed successfully." });
    }
}
