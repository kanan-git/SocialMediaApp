using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Media;

namespace src.Business.Services.Concrete;

public class MediaServices : IMediaServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public MediaServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewMedia(MediaCreateDto createDto)
    {
        var file = _mapper.Map<Media>(createDto);
        if(await _unitOfWork.MediaRepository.IsExistEntity(m => m.FileName == file.FileName))
        {
            return new ErrorResult(ExceptionMessages.AlreadyExist);
        }
        await _unitOfWork.MediaRepository.AddAsync(file);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult("Saved.");
        }
        return new SuccessResult("Media created successfully.");
    }

    public async Task<IDataResult<List<MediaResponseDto>>> GetAllMedias()
    {
        var files = await _unitOfWork.MediaRepository.GetAllAsync();
        var result = _mapper.Map<List<MediaResponseDto>>(files);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<MediaResponseDto>>(result, "No result found!");
        }
        return new SuccessDataResult<List<MediaResponseDto>>(result);
    }

    public async Task<IDataResult<List<MediaResponseDto>>> GetAllMediasPaginated(int page, int size)
    {
        var files = await _unitOfWork.MediaRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<MediaResponseDto>>(files);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<MediaResponseDto>>(result, "No result found!");
        }
        return new SuccessDataResult<List<MediaResponseDto>>(result);
    }

    public async Task<IDataResult<MediaResponseDto>> GetMediaById(int id)
    {
        var file = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == id);
        var result = _mapper.Map<MediaResponseDto>(file);
        if(result == null)
        {
            return new ErrorDataResult<MediaResponseDto>(result, "No match found!");
        }
        return new SuccessDataResult<MediaResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateMedia(int id, MediaUpdateDto updateDto)
    {
        var file = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == id);
        if(file == null)
        {
            return new ErrorResult("No match found!");
        }
        _mapper.Map(updateDto, file);
        _unitOfWork.MediaRepository.Update(file);
        await _unitOfWork.SaveAsync();
        return new SuccessResult("Updated successfully.");
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveMedia(int id)
    {
        var delete = await _unitOfWork.MediaRepository.GetAsync(m => m.Id == id);
        if(delete == null)
        {
            return new ErrorResult("Not found!");
        }
        _unitOfWork.MediaRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult("Saved.");
        }
        return new SuccessResult("Media removed.");
    }
}
