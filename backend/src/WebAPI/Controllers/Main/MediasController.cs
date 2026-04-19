using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
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

    // File upload endpoint
    [HttpPost("upload")]
    [Authorize(Roles="Admin,User")]
    public async Task<IActionResult> Upload(IFormFile file, [FromForm] int userId)
    {
        // if (file == null || file.Length == 0)
        // {
        //     return BadRequest("No file uploaded.");
        // }

        // // Validate file type (e.g., image or video)
        // var allowedTypes = new List<string> { "image", "video" };  // You can extend this list
        // var fileExtension = Path.GetExtension(file.FileName).ToLower();
        // string fileType = string.Empty;

        // if (fileExtension == ".jpg" || fileExtension == ".png" || fileExtension == ".gif")
        //     fileType = "image";
        // else if (fileExtension == ".mp4" || fileExtension == ".avi" || fileExtension == ".mkv")
        //     fileType = "video";
        // else
        //     return BadRequest("Invalid file type.");

        // // Get file path
        // var fileDirectory = Path.Combine(_env.WebRootPath, "userfiles", userId.ToString(), "images");
        // if (!Directory.Exists(fileDirectory))
        // {
        //     Directory.CreateDirectory(fileDirectory);
        // }

        // var filePath = Path.Combine(fileDirectory, file.FileName);

        // // // v1 - whole file loaded into memory and copied directly
        // // using (var stream = new FileStream(filePath, FileMode.Create))
        // // {
        // //     await file.CopyToAsync(stream);
        // // }
        
        // // v2 - stream the file to disk in chunks using FileStream
        // using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None))
        // {
        //     await file.CopyToAsync(fileStream);  // This will still handle the file in chunks
        // }

        // // Save metadata to the database
        // var fileRecord = new Media
        // {
        //     FileName = file.FileName,
        //     FileType = fileType,
        //     FileSize = file.Length,
        //     FilePath = Path.Combine("userfiles", userId.ToString(), "images", file.FileName),
        //     UserId = userId
        // };

        // await _unitOfWork.MediaRepository.AddAsync(fileRecord);
        // await _unitOfWork.SaveAsync();

        // return Ok(new { filePath = fileRecord.FilePath });

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
    // public async Task<IActionResult> Download(string FileName, int UserId = -1)
    public async Task<IActionResult> Download(int fileId)
    {
        // // // OFFICIAL DOCUMENTATION
        // // if(UserId == -1)
        // // {
        // //     string selectedFilePath = StaticDirectories.ReachToDefaultFiles(FileName);
        // //     return Ok();
        // // }
        // // else
        // // {
        // //     string selectedFilePath = StaticDirectories.ReachToUserProfile(FileName)
        // // }

        // // Fetch file metadata from the database
        // var fileRecord = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == fileId);
        // if (fileRecord == null)
        // {
        //     return NotFound("File not found.");
        // }

        // var filePath = Path.Combine(_env.WebRootPath, fileRecord.FilePath);

        // if (!System.IO.File.Exists(filePath))
        // {
        //     return NotFound("File does not exist on the server.");
        // }

        // // // v1 - whole file read into memory
        // // var fileBytes = await System.IO.File.ReadAllBytesAsync(filePath);
        // // return File(fileBytes, "application/octet-stream", fileRecord.FileName);

        // // v2 - use FileStream to stream the file to the client
        // var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read);
        // return File(fileStream, "application/octet-stream", fileRecord.FileName);

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
        // // Fetch file metadata from the database
        // var fileRecord = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == fileId);
        // if (fileRecord == null)
        // {
        //     return NotFound("File not found.");
        // }

        // var filePath = Path.Combine(_env.WebRootPath, fileRecord.FilePath);

        // // Delete file from storage if exists
        // if (System.IO.File.Exists(filePath))
        // {
        //     System.IO.File.Delete(filePath);
        // }

        // // Remove record from database
        // _unitOfWork.MediaRepository.Remove(fileRecord);
        // await _unitOfWork.SaveAsync();

        // return Ok("File removed successfully.");

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
