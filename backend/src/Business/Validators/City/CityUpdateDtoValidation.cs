using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.City;

namespace src.Business.Validators.City;

public class CityUpdateDtoValidation : AbstractValidator<CityUpdateDto>
{
    public CityUpdateDtoValidation()
    {
        RuleFor(c => c.Name)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(c => c.CountryId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
