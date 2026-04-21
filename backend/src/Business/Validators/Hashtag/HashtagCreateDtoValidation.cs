using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Hashtag;

namespace src.Business.Validators.Hashtag;

public class HashtagCreateDtoValidation : AbstractValidator<HashtagCreateDto>
{
    public HashtagCreateDtoValidation()
    {
        RuleFor(h => h.Category)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
