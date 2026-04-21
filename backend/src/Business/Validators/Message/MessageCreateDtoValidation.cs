using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Message;

namespace src.Business.Validators.Message;

public class MessageCreateDtoValidation : AbstractValidator<MessageCreateDto>
{
    public MessageCreateDtoValidation()
    {
        RuleFor(m => m.Text)
            .MaximumLength(255).WithMessage(ValidationErrorMessages.MaxSymbolMessage(255))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.IsRead);
        RuleFor(m => m.UserId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.ChatId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.AttachedMediaFileId);
    }
}
