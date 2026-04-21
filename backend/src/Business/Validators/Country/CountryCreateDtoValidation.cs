using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Country;

namespace src.Business.Validators.Country;

public class CountryCreateDtoValidation : AbstractValidator<CountryCreateDto>
{
    public CountryCreateDtoValidation()
    {
        RuleFor(c => c.Name)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
