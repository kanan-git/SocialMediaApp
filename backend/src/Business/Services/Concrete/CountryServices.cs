using AutoMapper;

using src.Business.Services.Abstract;
using src.Core.Utilities.Constants;
using src.Core.Utilities.Result.Abstract;
using src.Core.Utilities.Result.Concrete;
using src.DataAccessLayer.UnitOfWork.Abstract;
using src.Entities.Concrete.Main;
using src.Entities.DTOs.Country;

namespace src.Business.Services.Concrete;

public class CountryServices : ICountryServices
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public CountryServices(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    public async Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewCountry(CountryCreateDto createDto)
    {
        var country = _mapper.Map<Country>(createDto);
        await _unitOfWork.CountryRepository.AddAsync(country);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Created);
    }

    public async Task<IDataResult<List<CountryResponseDto>>> GetAllCountries()
    {
        var countries = await _unitOfWork.CountryRepository.GetAllAsync();
        var result = _mapper.Map<List<CountryResponseDto>>(countries);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<CountryResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<CountryResponseDto>>(result);
    }

    public async Task<IDataResult<List<CountryResponseDto>>> GetAllCountriesPaginated(int page, int size)
    {
        var countries = await _unitOfWork.CountryRepository.GetAllWithPaginateAsync(page, size);
        var result = _mapper.Map<List<CountryResponseDto>>(countries);
        if(result.Count == 0)
        {
            return new ErrorDataResult<List<CountryResponseDto>>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<List<CountryResponseDto>>(result);
    }

    public async Task<IDataResult<CountryResponseDto>> GetCountryById(int id)
    {
        var country = await _unitOfWork.CountryRepository.GetAsync(c => c.Id == id);
        var result = _mapper.Map<CountryResponseDto>(country);
        if(result == null)
        {
            return new ErrorDataResult<CountryResponseDto>(result, ResultMessages.NoMatchFound);
        }
        return new SuccessDataResult<CountryResponseDto>(result);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> UpdateCountry(int id, CountryUpdateDto updateDto)
    {
        var country = await _unitOfWork.CountryRepository.GetAsync(c => c.Id == id);
        if(country == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _mapper.Map(updateDto, country);
        _unitOfWork.CountryRepository.Update(country);
        await _unitOfWork.SaveAsync();
        return new SuccessResult(ResultMessages.Updated);
    }

    public async Task<src.Core.Utilities.Result.Abstract.IResult> RemoveCountry(int id)
    {
        var delete = await _unitOfWork.CountryRepository.GetAsync(c => c.Id == id);
        if(delete == null)
        {
            return new ErrorResult(ResultMessages.NoMatchFound);
        }
        _unitOfWork.CountryRepository.Remove(delete);
        var result = await _unitOfWork.SaveAsync();
        if(result > 0)
        {
            return new SuccessResult(ResultMessages.Saved);
        }
        return new SuccessResult(ResultMessages.Removed);
    }
}
