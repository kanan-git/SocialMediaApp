using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Post;

namespace src.Business.Validators.Post;

public class PostCreateDtoValidation : AbstractValidator<PostCreateDto>
{
    public PostCreateDtoValidation()
    {
        RuleFor(c => c.Text)
            .MinimumLength(1).WithMessage(ValidationErrorMessages.MinSymbolMessage(1))
            .MaximumLength(255).WithMessage(ValidationErrorMessages.MaxSymbolMessage(255))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(c => c.Visibility)
            .MaximumLength(8).WithMessage(ValidationErrorMessages.MaxSymbolMessage(8));
        RuleFor(c => c.UserId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
