using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Hashtag;

namespace src.Business.Validators.Hashtag;

public class HashtagUpdateDtoValidation : AbstractValidator<HashtagUpdateDto>
{
    public HashtagUpdateDtoValidation()
    {
        RuleFor(h => h.Category)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
