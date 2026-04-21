using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Chat;

namespace src.Business.Validators.Chat;

public class ChatUpdateDtoValidation : AbstractValidator<ChatUpdateDto>
{
    public ChatUpdateDtoValidation()
    {
        RuleFor(c => c.Type)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
