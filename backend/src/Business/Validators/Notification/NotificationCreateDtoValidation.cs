using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Notification;

namespace src.Business.Validators.Notification;

public class NotificationCreateDtoValidation : AbstractValidator<NotificationCreateDto>
{
    public NotificationCreateDtoValidation()
    {
        RuleFor(n => n.Type)
            .MaximumLength(32).WithMessage(ValidationErrorMessages.MaxSymbolMessage(32))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(n => n.Description)
            .MaximumLength(255).WithMessage(ValidationErrorMessages.MaxSymbolMessage(255));
        RuleFor(n => n.IsRead);
        RuleFor(n => n.ReceiverUserId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
    }
}
