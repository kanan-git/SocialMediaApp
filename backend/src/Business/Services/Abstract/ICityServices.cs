using src.Core.Utilities.Result.Abstract;
using src.Entities.DTOs.City;

namespace src.Business.Services.Abstract;

public interface ICityServices
{
    public Task<src.Core.Utilities.Result.Abstract.IResult> CreateNewCity(CityCreateDto createDto);
    public Task<IDataResult<List<CityResponseDto>>> GetAllCities();
    public Task<IDataResult<List<CityResponseDto>>> GetAllCitiesPaginated(int page, int size);
    public Task<IDataResult<CityResponseDto>> GetCityById(int id);
    public Task<src.Core.Utilities.Result.Abstract.IResult> UpdateCity(int id, CityUpdateDto updateDto);
    public Task<src.Core.Utilities.Result.Abstract.IResult> RemoveCity(int id);
}
