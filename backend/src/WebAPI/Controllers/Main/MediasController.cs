using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> Upload(IFormFile file, [FromForm] int userId)
    {
        // ! uploads only profile image, fix gallery path, profile can have only, gallery isn't limited ! //
        if (file == null || file.Length == 0)
            return BadRequest("No file uploaded.");
        var fileExtension = Path.GetExtension(file.FileName).ToLower();
        if (fileExtension != ".jpg" && fileExtension != ".png" && fileExtension != ".gif")
            return BadRequest("Invalid file type.");
        var fileDirectory = Path.Combine(_env.WebRootPath, "users", userId.ToString(), "profile");
        if (!Directory.Exists(fileDirectory))
            Directory.CreateDirectory(fileDirectory);
        var fileName = "profile_image" + fileExtension;
        var filePath = Path.Combine(fileDirectory, fileName);
        using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None))
        {
            await file.CopyToAsync(fileStream);
        }
        var relativePath = Path.Combine("users", userId.ToString(), "profile", fileName);
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
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> Download(int fileId)
    {
        var fileRecord = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == fileId);
        if (fileRecord == null)
            return NotFound("File not found.");
        var filePath = Path.Combine(_env.WebRootPath, fileRecord.FilePath);
        if (!System.IO.File.Exists(filePath))
            return NotFound("File does not exist on the server.");
        var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read);
        return File(fileStream, "application/octet-stream", fileRecord.FileName);
    }

    [HttpDelete("{fileId}")]
    [Authorize(Roles = "Admin,User")]
    public async Task<IActionResult> Remove(int fileId)
    {
        var fileRecord = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == fileId);
        if (fileRecord == null)
            return NotFound("File not found.");
        var filePath = Path.Combine(_env.WebRootPath, fileRecord.FilePath);
        if (System.IO.File.Exists(filePath))
            System.IO.File.Delete(filePath);
        _unitOfWork.MediaRepository.Remove(fileRecord);
        await _unitOfWork.SaveAsync();
        return Ok("File removed successfully.");
    }
}
