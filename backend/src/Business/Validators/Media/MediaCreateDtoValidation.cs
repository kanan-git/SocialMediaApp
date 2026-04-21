using FluentValidation;

using src.Core.Utilities.Constants;
using src.Entities.DTOs.Media;

namespace src.Business.Validators.Media;

public class MediaCreateDtoValidation : AbstractValidator<MediaCreateDto>
{
    public MediaCreateDtoValidation()
    {
        RuleFor(m => m.FileName)
            .MaximumLength(255).WithMessage(ValidationErrorMessages.MaxSymbolMessage(255))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.FilePath)
            .MaximumLength(255).WithMessage(ValidationErrorMessages.MaxSymbolMessage(255))
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.FileType)
            .MaximumLength(16).WithMessage(ValidationErrorMessages.MaxSymbolMessage(16));
        RuleFor(m => m.FileSize)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.IsProfileImage)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.UserId)
            .NotNull().WithMessage(ValidationErrorMessages.NotNullFieldMessage());
        RuleFor(m => m.PostId);
        RuleFor(m => m.ChatId);
    }
}
