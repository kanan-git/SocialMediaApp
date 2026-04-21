using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Activity;

namespace src.Business.Validators.Activity;

public class ActivityCreateDtoValidation : AbstractValidator<ActivityCreateDto>
{
    public ActivityCreateDtoValidation()
    {
        RuleFor(a => a.Category)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(a => a.Description);
        RuleFor(a => a.UserId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
