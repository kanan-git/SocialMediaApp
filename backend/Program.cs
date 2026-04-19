using Microsoft.EntityFrameworkCore;

using src.Business;
using src.DataAccessLayer;
using src.WebAPI;
using src.Core.Utilities.Constants;
using src.DataAccessLayer.ContextDB.EntityFrameworkCore;

class Program
{
    static void Main(string[] args)
    {
        var uploadsPath = StaticDirectories.MediaFilesRoot;
        if(!Directory.Exists(uploadsPath))
        {
            Directory.CreateDirectory(uploadsPath);
        }

        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddWebApiConfigs(builder.Configuration);
        builder.Services.AddBusinessConfigs();
        builder.Services.AddDataAccessLayerConfigs(builder.Configuration);

        var app = builder.Build();
        app.UseStaticFiles();
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
            // app.MapOpenApi();
        }
        using (var scope = app.Services.CreateScope())
        {
            var db = scope.ServiceProvider.GetRequiredService<SocialMediaDbContext>();
            db.Database.Migrate();
        }
        app.UseRouting();
        app.UseCors("AllowAllOrigins");  // Enable CORS with the policy
        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}
