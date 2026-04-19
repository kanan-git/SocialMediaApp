using System.Reflection;
using AutoMapper;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;

using src.Business.Services.Abstract;
using src.Business.Services.Concrete;

namespace src.Business;

public static class ConfigurationServices
{
    public static IServiceCollection AddBusinessConfigs(this IServiceCollection services)
    {
        services.AddFluentValidationAutoValidation().AddFluentValidationClientsideAdapters();
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        services.AddAutoMapper(typeof(Program));
        services.AddScoped<ICommentServices, CommentServices>();
        services.AddScoped<IPostServices, PostServices>();
        services.AddScoped<IMediaServices, MediaServices>();
        services.AddScoped<IReactionServices, ReactionServices>();
        return services;
    }
}
