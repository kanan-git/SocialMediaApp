using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Chat;

namespace src.Business.Validators.Chat;

public class ChatCreateDtoValidation : AbstractValidator<ChatCreateDto>
{
    public ChatCreateDtoValidation()
    {
        RuleFor(c => c.Type)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
