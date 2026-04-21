using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.Country;

namespace src.Business.Services.Abstract;

public interface ICountryServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewCountry(CountryCreateDto createDto);
    public Task<IDataResult<List<CountryResponseDto>>> GetAllCountries();
    public Task<IDataResult<List<CountryResponseDto>>> GetAllCountriesPaginated(int page, int size);
    public Task<IDataResult<CountryResponseDto>> GetCountryById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateCountry(int id, CountryUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveCountry(int id);
}
