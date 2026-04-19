##### **ABOUT**
>	TITLE:
		Untitled Social Media Application

##### **TECH STACK**
>	DB:
		ms sql, ms sql ssms

>	BACKEND:
		c#, asp.net web api, efcore, jwtbearer, identity.efcore, swagger

>	FRONTEND:
		html, css, javascript, react.js, react router dom

##### **FEATURES**
>	BACKEND:
		file upload and download, swagger token, authentication and authorization, crud operations

>	FRONTEND:
		admin panel, lightmode, language change

##### **BACKEND POWERSHELL TERMINAL INSTALLATION LOG**
>	CREATE ASP.NET WEB API PRESET:
		cd backend;
		dotnet new webapi --framework net10.0;
		dotnet new sln --format sln -n SocialMediaApp;
		dotnet sln add .;

>	CREATE INSTANCE FILES:
		dotnet new class -n ConfigurationServices -o ./src/Business --force;
		dotnet new class -n ClaimExtensions -o ./src/Business/Extensions --force;
		dotnet new interface -n IPostServices -o ./src/Business/Services/Abstract --force;
		dotnet new interface -n ICommentServices -o ./src/Business/Services/Abstract --force;
		dotnet new interface -n IReactionServices -o ./src/Business/Services/Abstract --force;
		dotnet new class -n PostServices -o ./src/Business/Services/Concrete --force;
		dotnet new class -n CommentServices -o ./src/Business/Services/Concrete --force;
		dotnet new class -n ReactionServices -o ./src/Business/Services/Concrete --force;
		dotnet new class -n PostMapper -o ./src/Business/Profiles --force;
		dotnet new class -n CommentMapper -o ./src/Business/Profiles --force;
		dotnet new class -n ReactionMapper -o ./src/Business/Profiles --force;
		dotnet new class -n LoginDtoValidation -o ./src/Business/Validators/Authentication --force;
		dotnet new class -n RegisterDtoValidation -o ./src/Business/Validators/Authentication --force;
		dotnet new class -n PostCreateDtoValidation -o ./src/Business/Validators/Post --force;
		dotnet new class -n PostUpdateDtoValidation -o ./src/Business/Validators/Post --force;
		dotnet new class -n CommentCreateDtoValidation -o ./src/Business/Validators/Comment --force;
		dotnet new class -n CommentUpdateDtoValidation -o ./src/Business/Validators/Comment --force;
		dotnet new class -n ReactionCreateDtoValidation -o ./src/Business/Validators/Reaction --force;
		dotnet new class -n ReactionUpdateDtoValidation -o ./src/Business/Validators/Reaction --force;
		dotnet new interface -n IBaseRepository -o ./src/Core/DAL/Repositories/Abstract --force;
		dotnet new class -n BaseRepository -o ./src/Core/DAL/Repositories/Concrete/EFCore --force;
		dotnet new interface -n IEntity -o ./src/Core/Entities/Abstract --force;
		dotnet new class -n ExceptionMessages -o ./src/Core/Utilities/Constants --force;
		dotnet new class -n ValidationErrorMessages -o ./src/Core/Utilities/Constants --force;
		dotnet new enum -n CurrentStatus -o ./src/Core/Utilities/Enums --force;
		dotnet new enum -n ReactionType -o ./src/Core/Utilities/Enums --force;
		dotnet new enum -n IpAddressVersion -o ./src/Core/Utilities/Enums --force;
		dotnet new enum -n VisibilityType -o ./src/Core/Utilities/Enums --force;
		dotnet new class -n CustomUnnamedException -o ./src/Core/Utilities/Exceptions --force;
		dotnet new interface -n IResult -o ./src/Core/Utilities/Result/Abstract --force;
		dotnet new interface -n IDataResult -o ./src/Core/Utilities/Result/Abstract --force;
		dotnet new class -n Result -o ./src/Core/Utilities/Result/Concrete --force;
		dotnet new class -n SuccessResult -o ./src/Core/Utilities/Result/Concrete --force;
		dotnet new class -n ErrorResult -o ./src/Core/Utilities/Result/Concrete --force;
		dotnet new class -n DataResult -o ./src/Core/Utilities/Result/Concrete --force;
		dotnet new class -n SuccessDataResult -o ./src/Core/Utilities/Result/Concrete --force;
		dotnet new class -n ErrorDataResult -o ./src/Core/Utilities/Result/Concrete --force;
		dotnet new class -n ConfigurationServices -o ./src/DataAccessLayer --force;
		dotnet new class -n SocialMediaDbContext -o ./src/DataAccessLayer/ContextDB/EntityFrameworkCore --force;
		dotnet new interface -n IPostRepository -o ./src/DataAccessLayer/Repositories/Abstract --force;
		dotnet new interface -n ICommentRepository -o ./src/DataAccessLayer/Repositories/Abstract --force;
		dotnet new interface -n IReactionRepository -o ./src/DataAccessLayer/Repositories/Abstract --force;
		dotnet new class -n EFCPostRepository -o ./src/DataAccessLayer/Repositories/Concrete/EFCore --force;
		dotnet new class -n EFCCommentRepository -o ./src/DataAccessLayer/Repositories/Concrete/EFCore --force;
		dotnet new class -n EFCReactionRepository -o ./src/DataAccessLayer/Repositories/Concrete/EFCore --force;
		dotnet new class -n PostConfigurations -o ./src/DataAccessLayer/Configurations --force;
		dotnet new class -n CommentConfigurations -o ./src/DataAccessLayer/Configurations --force;
		dotnet new class -n ReactionConfigurations -o ./src/DataAccessLayer/Configurations --force;
		mkdir ./src/DataAccessLayer/Migrations;
		New-Item ./src/DataAccessLayer/Migrations/migrations.txt;
		dotnet new class -n BaseEntity -o ./src/Entities/Common --force;
		dotnet new class -n AppUser -o ./src/Entities/Concrete/Auth --force;
		dotnet new class -n RefreshToken -o ./src/Entities/Concrete/Auth --force;
		dotnet new class -n TokenOptions -o ./src/Entities/Concrete/Auth --force;
		dotnet new class -n Post -o ./src/Entities/Concrete/Main --force;
		dotnet new class -n Comment -o ./src/Entities/Concrete/Main --force;
		dotnet new class -n Reaction -o ./src/Entities/Concrete/Main --force;
		dotnet new class -n LoginDto -o ./src/Entities/DTOs/Authentication --force;
		dotnet new class -n RegisterDto -o ./src/Entities/DTOs/Authentication --force;
		dotnet new class -n PostCreateDto -o ./src/Entities/DTOs/Post --force;
		dotnet new class -n PostResponseDto -o ./src/Entities/DTOs/Post --force;
		dotnet new class -n PostUpdateDto -o ./src/Entities/DTOs/Post --force;
		dotnet new class -n CommentCreateDto -o ./src/Entities/DTOs/Comment --force;
		dotnet new class -n CommentResponseDto -o ./src/Entities/DTOs/Comment --force;
		dotnet new class -n CommentUpdateDto -o ./src/Entities/DTOs/Comment --force;
		dotnet new class -n ReactionCreateDto -o ./src/Entities/DTOs/Reaction --force;
		dotnet new class -n ReactionResponseDto -o ./src/Entities/DTOs/Reaction --force;
		dotnet new class -n ReactionUpdateDto -o ./src/Entities/DTOs/Reaction --force;
		dotnet new class -n ConfigurationServices -o ./src/WebAPI --force;
		dotnet new apicontroller -n AuthenticationController -o ./src/WebAPI/Controllers/Auth --force;
		dotnet new apicontroller -n PostsController -o ./src/WebAPI/Controllers/Main --force;
		dotnet new apicontroller -n CommentsController -o ./src/WebAPI/Controllers/Main --force;
		dotnet new apicontroller -n ReactionsController -o ./src/WebAPI/Controllers/Main --force;
		mkdir wwwroot;
		mkdir ./wwwroot/default;
		mkdir ./wwwroot/user_0;
		mkdir ./wwwroot/user_1;
		New-Item Dockerfile;
		New-Item ./wwwroot/default/empty.md
		New-Item ./wwwroot/user_0/profile_image.png
		New-Item ./wwwroot/user_1/profile_image.png
		dotnet new interface -n IMediaServices -o ./src/Business/Services/Abstract --force;
		dotnet new class -n MediaServices -o ./src/Business/Services/Concrete --force;
		dotnet new class -n MediaMapper -o ./src/Business/Profiles --force;
		dotnet new class -n MediaCreateDtoValidation -o ./src/Business/Validators/Media --force;
		dotnet new class -n MediaUpdateDtoValidation -o ./src/Business/Validators/Media --force;
		dotnet new interface -n IMediaRepository -o ./src/DataAccessLayer/Repositories/Abstract --force;
		dotnet new class -n EFCMediaRepository -o ./src/DataAccessLayer/Repositories/Concrete/EFCore --force;
		dotnet new class -n MediaConfigurations -o ./src/DataAccessLayer/Configurations --force;
		dotnet new class -n Media -o ./src/Entities/Concrete/Main --force;
		dotnet new class -n MediaCreateDto -o ./src/Entities/DTOs/Media --force;
		dotnet new class -n MediaResponseDto -o ./src/Entities/DTOs/Media --force;
		dotnet new class -n MediaUpdateDto -o ./src/Entities/DTOs/Media --force;
		dotnet new apicontroller -n MediasController -o ./src/WebAPI/Controllers/Main --force;

>	INSTALLING DEPENDENCIES:
		dotnet add package AutoMapper --version 12.0.1;
		dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection --version 12.0.1;
		dotnet add package Microsoft.EntityFrameworkCore;
		dotnet add package Microsoft.EntityFrameworkCore.SqlServer;
		dotnet add package Microsoft.EntityFrameworkCore.Tools;
		dotnet add package Microsoft.EntityFrameworkCore.Design;
		dotnet add package Swashbuckle.AspNetCore;
		dotnet add package FluentValidation;
		dotnet add package FluentValidation.AspNetCore;
		dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore;
		dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer;
		dotnet new tool-manifest;
		dotnet tool install dotnet-ef;
		dotnet add package Dapper;
		dotnet add package FluentMigrator;
		dotnet add package FluentMigrator.Runner.Core;
		dotnet add package FluentMigrator.Runner.SqlServer;
		dotnet add package FluentMigrator.Tools;
		dotnet add package Microsoft.AspNetCore.Identity;
		dotnet add package Microsoft.Data.SqlClient;

>	ADD USER SECRETS:
		dotnet user-secrets init;
		dotnet user-secrets set "ConnectionStrings:Default" "Server=localhost;Database=SocialMediaDB;Trusted_Connection=True;TrustServerCertificate=True;";
		dotnet user-secrets set "AdminCredentials:UserName" "adminaccount";
		dotnet user-secrets set "AdminCredentials:Password" "Admin123*";
		dotnet user-secrets set "TokenOptions:Audience" "http://localhost:5001/";
		dotnet user-secrets set "TokenOptions:Issuer" "http://localhost:5001/";
		dotnet user-secrets set "TokenOptions:SecurityKey" "v3Ry_SeRI0uS-s3cUr1ty_kEy_and_extra_text_to_extend_32_plus_symbols_at_least_for_hs256";
		dotnet user-secrets set "TokenOptions:AccessTokenExpiration" 15;
		dotnet user-secrets set "TokenOptions:RefreshTokenExpiration" 7;

##### **FRONTEND POWERSHELL TERMINAL INSTALLATION LOG**
>	CREATE REACT PRESET VIA VITE:
		npm create vite@5 .;

>	INSTALL REACT DEPENDENCIES:
		npm install;

>	INSTALL NECESSARY MODULES:
		npm install react-router-dom bootstrap-icons;

>	CREATE MAIN FILE STRUCTURE:
		mkdir ./public/favicon;
		mkdir ./public/images/pages/home;
		mkdir ./public/images/pages/about;
		mkdir ./src/assets/features;
		mkdir ./src/assets/styles;
		mkdir ./src/assets/constants;
		mkdir ./src/assets/utilities;
		mkdir ./src/assets/logo;
		mkdir ./src/components/layout/ChatBox;
		mkdir ./src/components/layout/Header;
		mkdir ./src/components/layout/Navbar;
		mkdir ./src/components/reusable/Collapse;
		mkdir ./src/components/reusable/Dropdown;
		mkdir ./src/components/reusable/Modal;
		mkdir ./src/components/reusable/PostCard;
		mkdir ./src/pages/admin/AdminDashboard;
		mkdir ./src/pages/admin/ManageUI;
		mkdir ./src/pages/admin/ManageUsers;
		mkdir ./src/pages/admin/ManageTables;
		mkdir ./src/pages/common/Home;
		mkdir ./src/pages/common/Profile;
		mkdir ./src/pages/error/E401;
		mkdir ./src/pages/error/E404;
		mkdir ./src/pages/user/UserDashboard;
		mkdir ./src/pages/user/Settings;

>	CREATE INSTANCE FILES:
		Remove-Item ./public/vite.svg;
		Remove-Item ./src/assets/react.svg;
		Remove-Item ./src/App.css;
		Remove-Item ./src/index.css;
		New-Item ./.env;
		New-Item ./public/favicon/logo.svg;
		New-Item ./public/images/pages/home/image1.png;
		New-Item ./public/images/pages/about/image1.png;
		New-Item ./src/assets/features/changeLanguage.js;
		New-Item ./src/assets/features/changeLightmode.js;
		New-Item ./src/assets/styles/global.css;
		New-Item ./src/assets/styles/animations.css;
		New-Item ./src/assets/styles/variables.css;
		New-Item ./src/assets/constants/languages.js;
		New-Item ./src/assets/constants/lightmodes.js;
		New-Item ./src/assets/constants/endpoints.js;
		New-Item ./src/assets/utilities/routing.js;
		New-Item ./src/assets/utilities/fetchHttpRequest.js;
		New-Item ./src/assets/logo/logo.svg;
		New-Item ./src/components/layout/ChatBox/ChatBox.jsx;
		New-Item ./src/components/layout/ChatBox/styles.css;
		New-Item ./src/components/layout/ChatBox/styles_laptop.css;
		New-Item ./src/components/layout/ChatBox/styles_tablet.css;
		New-Item ./src/components/layout/ChatBox/styles_mobile.css;
		New-Item ./src/components/layout/ChatBox/features.js;
		New-Item ./src/components/layout/Header/Header.jsx;
		New-Item ./src/components/layout/Header/styles.css;
		New-Item ./src/components/layout/Header/styles_laptop.css;
		New-Item ./src/components/layout/Header/styles_tablet.css;
		New-Item ./src/components/layout/Header/styles_mobile.css;
		New-Item ./src/components/layout/Header/features.js;
		New-Item ./src/components/layout/Navbar/Navbar.jsx;
		New-Item ./src/components/layout/Navbar/styles.css;
		New-Item ./src/components/layout/Navbar/styles_laptop.css;
		New-Item ./src/components/layout/Navbar/styles_tablet.css;
		New-Item ./src/components/layout/Navbar/styles_mobile.css;
		New-Item ./src/components/layout/Navbar/features.js;
		New-Item ./src/components/reusable/Collapse/Collapse.jsx;
		New-Item ./src/components/reusable/Collapse/styles.css;
		New-Item ./src/components/reusable/Collapse/styles_laptop.css;
		New-Item ./src/components/reusable/Collapse/styles_tablet.css;
		New-Item ./src/components/reusable/Collapse/styles_mobile.css;
		New-Item ./src/components/reusable/Collapse/features.js;
		New-Item ./src/components/reusable/Dropdown/Dropdown.jsx;
		New-Item ./src/components/reusable/Dropdown/styles.css;
		New-Item ./src/components/reusable/Dropdown/styles_laptop.css;
		New-Item ./src/components/reusable/Dropdown/styles_tablet.css;
		New-Item ./src/components/reusable/Dropdown/styles_mobile.css;
		New-Item ./src/components/reusable/Dropdown/features.js;
		New-Item ./src/components/reusable/Modal/Modal.jsx;
		New-Item ./src/components/reusable/Modal/styles.css;
		New-Item ./src/components/reusable/Modal/styles_laptop.css;
		New-Item ./src/components/reusable/Modal/styles_tablet.css;
		New-Item ./src/components/reusable/Modal/styles_mobile.css;
		New-Item ./src/components/reusable/Modal/features.js;
		New-Item ./src/components/reusable/PostCard/PostCard.jsx;
		New-Item ./src/components/reusable/PostCard/styles.css;
		New-Item ./src/components/reusable/PostCard/styles_laptop.css;
		New-Item ./src/components/reusable/PostCard/styles_tablet.css;
		New-Item ./src/components/reusable/PostCard/styles_mobile.css;
		New-Item ./src/components/reusable/PostCard/features.js;
		New-Item ./src/pages/admin/AdminDashboard/AdminDashboard.jsx;
		New-Item ./src/pages/admin/AdminDashboard/api.js;
		New-Item ./src/pages/admin/AdminDashboard/styles.css;
		New-Item ./src/pages/admin/AdminDashboard/styles_laptop.css;
		New-Item ./src/pages/admin/AdminDashboard/styles_tablet.css;
		New-Item ./src/pages/admin/AdminDashboard/styles_mobile.css;
		New-Item ./src/pages/admin/AdminDashboard/features.js;
		New-Item ./src/pages/admin/ManageUI/ManageUI.jsx;
		New-Item ./src/pages/admin/ManageUI/api.js;
		New-Item ./src/pages/admin/ManageUI/styles.css;
		New-Item ./src/pages/admin/ManageUI/styles_laptop.css;
		New-Item ./src/pages/admin/ManageUI/styles_tablet.css;
		New-Item ./src/pages/admin/ManageUI/styles_mobile.css;
		New-Item ./src/pages/admin/ManageUI/features.js;
		New-Item ./src/pages/admin/ManageUsers/ManageUsers.jsx;
		New-Item ./src/pages/admin/ManageUsers/api.js;
		New-Item ./src/pages/admin/ManageUsers/styles.css;
		New-Item ./src/pages/admin/ManageUsers/styles_laptop.css;
		New-Item ./src/pages/admin/ManageUsers/styles_tablet.css;
		New-Item ./src/pages/admin/ManageUsers/styles_mobile.css;
		New-Item ./src/pages/admin/ManageUsers/features.js;
		New-Item ./src/pages/admin/ManageTables/ManageTables.jsx;
		New-Item ./src/pages/admin/ManageTables/api.js;
		New-Item ./src/pages/admin/ManageTables/styles.css;
		New-Item ./src/pages/admin/ManageTables/styles_laptop.css;
		New-Item ./src/pages/admin/ManageTables/styles_tablet.css;
		New-Item ./src/pages/admin/ManageTables/styles_mobile.css;
		New-Item ./src/pages/admin/ManageTables/features.js;
		New-Item ./src/pages/common/Home/Home.jsx;
		New-Item ./src/pages/common/Home/api.js;
		New-Item ./src/pages/common/Home/styles.css;
		New-Item ./src/pages/common/Home/styles_laptop.css;
		New-Item ./src/pages/common/Home/styles_tablet.css;
		New-Item ./src/pages/common/Home/styles_mobile.css;
		New-Item ./src/pages/common/Home/features.js;
		New-Item ./src/pages/common/Profile/Profile.jsx;
		New-Item ./src/pages/common/Profile/api.js;
		New-Item ./src/pages/common/Profile/styles.css;
		New-Item ./src/pages/common/Profile/styles_laptop.css;
		New-Item ./src/pages/common/Profile/styles_tablet.css;
		New-Item ./src/pages/common/Profile/styles_mobile.css;
		New-Item ./src/pages/common/Profile/features.js;
		New-Item ./src/pages/error/E401/E401.jsx;
		New-Item ./src/pages/error/E401/styles.css;
		New-Item ./src/pages/error/E401/styles_laptop.css;
		New-Item ./src/pages/error/E401/styles_tablet.css;
		New-Item ./src/pages/error/E401/styles_mobile.css;
		New-Item ./src/pages/error/E401/features.js;
		New-Item ./src/pages/error/E404/E404.jsx;
		New-Item ./src/pages/error/E404/styles.css;
		New-Item ./src/pages/error/E404/styles_laptop.css;
		New-Item ./src/pages/error/E404/styles_tablet.css;
		New-Item ./src/pages/error/E404/styles_mobile.css;
		New-Item ./src/pages/error/E404/features.js;
		New-Item ./src/pages/user/UserDashboard/UserDashboard.jsx;
		New-Item ./src/pages/user/UserDashboard/api.js;
		New-Item ./src/pages/user/UserDashboard/styles.css;
		New-Item ./src/pages/user/UserDashboard/styles_laptop.css;
		New-Item ./src/pages/user/UserDashboard/styles_tablet.css;
		New-Item ./src/pages/user/UserDashboard/styles_mobile.css;
		New-Item ./src/pages/user/UserDashboard/features.js;
		New-Item ./src/pages/user/Settings/Settings.jsx;
		New-Item ./src/pages/user/Settings/api.js;
		New-Item ./src/pages/user/Settings/styles.css;
		New-Item ./src/pages/user/Settings/styles_laptop.css;
		New-Item ./src/pages/user/Settings/styles_tablet.css;
		New-Item ./src/pages/user/Settings/styles_mobile.css;
		New-Item ./src/pages/user/Settings/features.js;

##### **BACKEND LAUNCH COMMANDS**
>	MIGRATION ADD:
		dotnet ef migrations add Init -o ./src/DataAccessLayer/Migrations;
		dotnet ef database update;

>	MIGRATION REVERT:
		dotnet ef migrations remove;
		dotnet ef database drop;

>	RUN APPLICATION ON LOCAL:
		dotnet build ./SocialMediaApp.sln;
		dotnet run;

##### **FRONTEND LAUNCH COMMANDS**
>	RUN APPLICATION ON LOCAL:
		npm run dev;

##### **FRONTEND FILE STRUCTURE**
>	ROOT_FOLDER:
		│
		├─ backend/
		│    │
		│    ├─ bin/
		│    │    │
		│    │    └─ ...
		│    │
		│    ├─ obj/
		│    │    │
		│    │    └─ ...
		│    │
		│    ├─ Properties/
		│    │    │
		│    │    └─ launchSettings.json
		│    │
		│    ├─ src/
		│    │    │
		│    │    ├─ Business/
		│    │    │    │
		│    │    │    ├─ Extensions/
		│    │    │    │    │
		│    │    │    │    └─ ClaimExtensions.cs
		│    │    │    │
		│    │    │    ├─ Profiles/
		│    │    │    │    │
		│    │    │    │    ├─ AuthMapper.cs
		│    │    │    │    ├─ CommentMapper.cs
		│    │    │    │    ├─ MediaMapper.cs
		│    │    │    │    ├─ PostMapper.cs
		│    │    │    │    └─ ReactionMapper.cs
		│    │    │    │
		│    │    │    ├─ Services/
		│    │    │    │    │
		│    │    │    │    ├─ Abstract/
		│    │    │    │    │    │
		│    │    │    │    │    ├─ ICommentServices.cs
		│    │    │    │    │    ├─ IMediaServices.cs
		│    │    │    │    │    ├─ IPostServices.cs
		│    │    │    │    │    └─ IReactionServices.cs
		│    │    │    │    │
		│    │    │    │    └─ Concrete/
		│    │    │    │         │
		│    │    │    │         ├─ CommentServices.cs
		│    │    │    │         ├─ MediaServices.cs
		│    │    │    │         ├─ PostServices.cs
		│    │    │    │         └─ ReactionServices.cs
		│    │    │    │
		│    │    │    ├─ Validators/
		│    │    │    │    │
		│    │    │    │    ├─ Comment/
		│    │    │    │    │    │
		│    │    │    │    │    ├─ CommentCreateDtoValidation.cs
		│    │    │    │    │    └─ CommentUpdateDtoValidation.cs
		│    │    │    │    │
		│    │    │    │    ├─ Media/
		│    │    │    │    │    │
		│    │    │    │    │    ├─ MediaCreateDtoValidation.cs
		│    │    │    │    │    └─ MediaUpdateDtoValidation.cs
		│    │    │    │    │
		│    │    │    │    ├─ Post/
		│    │    │    │    │    │
		│    │    │    │    │    ├─ PostCreateDtoValidation.cs
		│    │    │    │    │    └─ PostUpdateDtoValidation.cs
		│    │    │    │    │
		│    │    │    │    └─ Reaction/
		│    │    │    │         │
		│    │    │    │         ├─ ReactionCreateDtoValidation.cs
		│    │    │    │         └─ ReactionUpdateDtoValidation.cs
		│    │    │    │
		│    │    │    └─ ConfigurationServices.cs
		│    │    │
		│    │    ├─ Core/
		│    │    │    │
		│    │    │    ├─ DAL/
		│    │    │    │    │
		│    │    │    │    └─ Repositories/
		│    │    │    │         │
		│    │    │    │         ├─ Abstract/
		│    │    │    │         │    │
		│    │    │    │         │    └─ IBaseRepository.cs
		│    │    │    │         │
		│    │    │    │         └─ Concrete/
		│    │    │    │              │
		│    │    │    │              └─ EFCore/
		│    │    │    │                   │
		│    │    │    │                   └─ BaseRepository.cs
		│    │    │    │
		│    │    │    ├─ Entities/
		│    │    │    │    │
		│    │    │    │    └─ Abstract/
		│    │    │    │         │
		│    │    │    │         └─ IEntity.cs
		│    │    │    │
		│    │    │    └─ Utilities/
		│    │    │         │
		│    │    │         ├─ Constants/
		│    │    │         │    │
		│    │    │         │    ├─ ExceptionMessages.cs
		│    │    │         │    ├─ StaticDirectories.cs
		│    │    │         │    └─ ValidationErrorMessages.cs
		│    │    │         │
		│    │    │         ├─ Enums/
		│    │    │         │    │
		│    │    │         │    ├─ CommentType.cs
		│    │    │         │    ├─ CurrentStatus.cs
		│    │    │         │    ├─ IpAddressVersion.cs
		│    │    │         │    ├─ MediaFileType.cs
		│    │    │         │    ├─ ReactionTarget.cs
		│    │    │         │    ├─ ReactionType.cs
		│    │    │         │    └─ VisibilityType.cs
		│    │    │         │
		│    │    │         ├─ Exceptions/
		│    │    │         │    │
		│    │    │         │    └─ CustomUnnamedException.cs
		│    │    │         │
		│    │    │         └─ Result/
		│    │    │              │
		│    │    │              ├─ Abstract/
		│    │    │              │    │
		│    │    │              │    ├─ IDataResult.cs
		│    │    │              │    └─ IResult.cs
		│    │    │              │
		│    │    │              └─ Concrete/
		│    │    │                   │
		│    │    │                   ├─ DataResult.cs
		│    │    │                   ├─ ErrorDataResult.cs
		│    │    │                   ├─ ErrorResult.cs
		│    │    │                   ├─ Result.cs
		│    │    │                   ├─ SuccessDataResult.cs
		│    │    │                   └─ SuccessResult.cs
		│    │    │
		│    │    ├─ DataAccessLayer/
		│    │    │    │
		│    │    │    ├─ Configurations/
		│    │    │    │    │
		│    │    │    │    ├─ CommentConfigurations.cs
		│    │    │    │    ├─ MediaConfigurations.cs
		│    │    │    │    ├─ PostConfigurations.cs
		│    │    │    │    └─ ReactionConfigurations.cs
		│    │    │    │
		│    │    │    ├─ ContextDB/
		│    │    │    │    │
		│    │    │    │    └─ EntityFrameworkCore/
		│    │    │    │         │
		│    │    │    │         └─ SocialMediaDbContext.cs
		│    │    │    │
		│    │    │    ├─ Migrations/
		│    │    │    │    │
		│    │    │    │    └─ ...
		│    │    │    │
		│    │    │    ├─ Repositories/
		│    │    │    │    │
		│    │    │    │    ├─ Abstract/
		│    │    │    │    │    │
		│    │    │    │    │    ├─ ICommentRepository.cs
		│    │    │    │    │    ├─ IMediaRepository.cs
		│    │    │    │    │    ├─ IPostRepository.cs
		│    │    │    │    │    └─ IReactionRepository.cs
		│    │    │    │    │
		│    │    │    │    └─ Concrete/
		│    │    │    │         │
		│    │    │    │         ├─ EFCCommentRepository.cs
		│    │    │    │         ├─ EFCMediaRepository.cs
		│    │    │    │         ├─ EFCPostRepository.cs
		│    │    │    │         └─ EFCReactionRepository.cs
		│    │    │    │
		│    │    │    ├─ UnitOfWork/
		│    │    │    │    │
		│    │    │    │    ├─ Abstract/
		│    │    │    │    │    │
		│    │    │    │    │    └─ IUnitOfWork.cs
		│    │    │    │    └─ Concrete/
		│    │    │    │         │
		│    │    │    │         └─ UnitOfWork.cs
		│    │    │    │
		│    │    │    └─ ConfigurationServices.cs
		│    │    │
		│    │    ├─ Entities/
		│    │    │    │
		│    │    │    ├─ Common/
		│    │    │    │    │
		│    │    │    │    └─ BaseEntity.cs
		│    │    │    │
		│    │    │    ├─ Concrete/
		│    │    │    │    │
		│    │    │    │    ├─ Auth/
		│    │    │    │    │    │
		│    │    │    │    │    ├─ AppUser.cs
		│    │    │    │    │    ├─ RefreshToken.cs
		│    │    │    │    │    └─ TokenOptions.cs
		│    │    │    │    │
		│    │    │    │    └─ Main/
		│    │    │    │         │
		│    │    │    │         ├─ Comment.cs
		│    │    │    │         ├─ Media.cs
		│    │    │    │         ├─ Post.cs
		│    │    │    │         └─ Reaction.cs
		│    │    │    │
		│    │    │    └─ DTOs/
		│    │    │         │
		│    │    │         ├─ Authentication/
		│    │    │         │    │
		│    │    │         │    ├─ LoginDto.cs
		│    │    │         │    └─ RegisterDto.cs
		│    │    │         │
		│    │    │         ├─ Comment/
		│    │    │         │    │
		│    │    │         │    ├─ CommentCreateDto.cs
		│    │    │         │    ├─ CommentResponseDto.cs
		│    │    │         │    └─ CommentUpdateDto.cs
		│    │    │         │
		│    │    │         ├─ Media/
		│    │    │         │    │
		│    │    │         │    ├─ MediaCreateDto.cs
		│    │    │         │    ├─ MediaResponseDto.cs
		│    │    │         │    └─ MediaUpdateDto.cs
		│    │    │         │
		│    │    │         ├─ Post/
		│    │    │         │    │
		│    │    │         │    ├─ PostCreateDto.cs
		│    │    │         │    ├─ PostResponseDto.cs
		│    │    │         │    └─ PostUpdateDto.cs
		│    │    │         │
		│    │    │         └─ Reaction/
		│    │    │              │
		│    │    │              ├─ ReactionCreateDto.cs
		│    │    │              ├─ ReactionResponseDto.cs
		│    │    │              └─ ReactionUpdateDto.cs
		│    │    │
		│    │    └─ WebAPI/
		│    │         │
		│    │         ├─ Controllers/
		│    │         │    │
		│    │         │    ├─ Auth/
		│    │         │    │    │
		│    │         │    │    └─ AuthenticationController.cs
		│    │         │    │
		│    │         │    └─ Main/
		│    │         │         │
		│    │         │         ├─ CommentsController.cs
		│    │         │         ├─ MediasController.cs
		│    │         │         ├─ PostsController.cs
		│    │         │         └─ ReactionsController.cs
		│    │         │
		│    │         └─ ConfigurationServices.cs
		│    │
		│    ├─ wwwroot/
		│    │    │
		│    │    ├─ default/
		│    │    │    │
		│    │    │    ├─ privacy.pdf
		│    │    │    └─ terms.pdf
		│    │    │
		│    │    └─ users/
		│    │         │
		│    │         ├─ 1/
		│    │         │    │
		│    │         │    ├─ gallery/
		│    │         │    │    │
		│    │         │    │    ├─ image1.png
		│    │         │    │    └─ image2.png
		│    │         │    │
		│    │         │    └─ profile/
		│    │         │         │
		│    │         │         └─ image.png
		│    │         │
		│    │         └─ 2/
		│    │              │
		│    │              ├─ gallery/
		│    │              │    │
		│    │              │    ├─ image1.png
		│    │              │    └─ image2.png
		│    │              │
		│    │              └─ profile/
		│    │                   │
		│    │                   └─ image.png
		│    │
		│    ├─ appsettings
		│    ├─ appsettings.json
		│    ├─ backend.csproj
		│    ├─ backend.http
		│    ├─ Dockerfile
		│    ├─ dotnet-tools.json
		│    ├─ Program.cs
		│    └─ SocialMediaApp.sln
		│
		├─ frontend/
		│    │
		│
		└─ readme.md
