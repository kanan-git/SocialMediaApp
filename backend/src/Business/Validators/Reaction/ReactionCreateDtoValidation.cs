using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Reaction;

namespace src.Business.Validators.Reaction;

public class ReactionCreateDtoValidation : AbstractValidator<ReactionCreateDto>
{
    public ReactionCreateDtoValidation()
    {
        RuleFor(c => c.Type)
            .MaximumLength(8).WithMessage(ValidationErrorMessages.MaxSymbolMessage(8));
        RuleFor(c => c.Target)
            .MaximumLength(8).WithMessage(ValidationErrorMessages.MaxSymbolMessage(8));
        RuleFor(c => c.UserId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(c => c.PostId);
        RuleFor(c => c.CommentId);
    }
}
