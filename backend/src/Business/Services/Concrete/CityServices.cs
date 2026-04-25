using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.City;

namespace src.Business.Services.Concrete;

public class CityServices : ICityServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public CityServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewCity(CityCreateDto createDto)
    {
        var city = _mapper.Map<City>(createDto);
        await _unitOfWork.CityRepository.AddAsync(city);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<CityResponseDto>>> GetAllCities()
    {
        // select, include, where
        // var cities = await _unitOfWork.CityRepository.GetAllAsync();
        var cities = await _unitOfWork.CityRepository.GetAllAsync(null, "Country");
        var result = _mapper.Map<List<CityResponseDto>>(cities);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<CityResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<CityResponseDto>>(result);
    }

    public async Task<IDataResult<List<CityResponseDto>>> GetAllCitiesPaginated(int page, int size)
    {
        var cities = await _unitOfWork.CityRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<CityResponseDto>>(cities);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<CityResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<CityResponseDto>>(result);
    }

    public async Task<IDataResult<CityResponseDto>> GetCityById(int id)
    {
        var city = await _unitOfWork.CityRepository.GetAsync(c => c.Id == id);
        var result = _mapper.Map<CityResponseDto>(city);
        if(result == null)
        {
            return new ErrorDataResult<CityResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<CityResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateCity(int id, CityUpdateDto updateDto)
    {
        var city = await _unitOfWork.CityRepository.GetAsync(c => c.Id == id);
        if(city == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, city);
        _unitOfWork.CityRepository.Update(city);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveCity(int id)
    {
        var delete = await _unitOfWork.CityRepository.GetAsync(c => c.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.CityRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
