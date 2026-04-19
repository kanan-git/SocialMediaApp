using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.OpenApi;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

using src.DataAccessLayer.ContextDB.EntityFrameworkCore;
using src.Entities.Concrete.Auth;

namespace src.WebAPI;

public static class ConfigurationServices
{
    public static IServiceCollection AddWebApiConfigs(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSwaggerGen(options => 
        {
            options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.Http,
                Scheme = "bearer",
                BearerFormat = "JWT",
                Description = "Enter the JWT token **without** the 'Bearer ' prefix.\n\nExample: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            });

            // Correct syntax for Swashbuckle 10+ / .NET 10
            options.AddSecurityRequirement(document => new OpenApiSecurityRequirement
            {
                [new OpenApiSecuritySchemeReference("Bearer", document)] = []
            });

            options.DocInclusionPredicate((docName, apiDesc) => true);
        });
        services.AddControllers();
        // services.AddOpenApi();

        // services.AddIdentity<AppUser, IdentityRole<int>>()
        //     .AddRoles<IdentityRole<int>>()
        //     .AddEntityFrameworkStores<SocialMediaDbContext>()
        //     .AddDefaultTokenProviders()
        //     .AddSignInManager();
        services.AddIdentity<AppUser, IdentityRole<int>>()
            .AddEntityFrameworkStores<SocialMediaDbContext>()
            .AddDefaultTokenProviders();
        
        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            var tokenOptions = configuration.GetSection("TokenOptions").Get<src.Entities.Concrete.Auth.TokenOptions>();
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidIssuer = tokenOptions.Issuer,
                ValidAudience = tokenOptions.Audience,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenOptions.SecurityKey)),
                ClockSkew = TimeSpan.Zero
            };
        });
        services.AddAuthorization();

        services.AddCors(options =>
        {
            options.AddPolicy("AllowAllOrigins", builder =>
            {
                builder.AllowAnyOrigin()  // Allow all origins
                    .AllowAnyMethod()  // Allow all HTTP methods (GET, POST, PUT, DELETE)
                    .AllowAnyHeader(); // Allow all headers
            });
        }); // Add CORS policy here

        return services;
    }
}
