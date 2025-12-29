using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Umbraco.Cms.Core.Configuration.Models;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Infrastructure.Migrations;
using Umbraco.Cms.Infrastructure.Packaging;

namespace Impersonation.PackageMigration;

public class AddImpersonationToLogViewer : AsyncPackageMigrationBase
{
    // Find all logs that are from our package that starts with our namespace 'QuickTipSavedLogSearch.MyPackage'
    private const string AllLogsQuery =
        "StartsWith(EventId.Name, 'UmbracoMemberImpersonation') and @Level='Information'";

    // Find all logs that are from our package that starts with our namespace 'QuickTipSavedLogSearch.MyPackage'
    // AND the log level is either Error or Fatal OR the log has an exception property
    private const string ErrorLogsQuery =
        "StartsWith(EventId.Name, 'UmbracoMemberImpersonation') and (@Level='Error' or @Level='Fatal' or @Level='Warning' or Has(@Exception))";

    private readonly ILogger<AddImpersonationToLogViewer> _logger;
    private readonly ILogViewerService _logViewerService;

    public AddImpersonationToLogViewer(
        IPackagingService packagingService,
        IMediaService mediaService,
        MediaFileManager mediaFileManager,
        MediaUrlGeneratorCollection mediaUrlGenerators,
        IShortStringHelper shortStringHelper,
        IContentTypeBaseServiceProvider contentTypeBaseServiceProvider,
        IMigrationContext context,
        IOptions<PackageMigrationSettings> packageMigrationsSettings,
        ILogger<AddImpersonationToLogViewer> logger, ILogViewerService logViewerService)
        : base(packagingService, mediaService, mediaFileManager, mediaUrlGenerators, shortStringHelper,
            contentTypeBaseServiceProvider, context, packageMigrationsSettings)
    {
        _logger = logger;
        _logViewerService = logViewerService;
    }

    protected override async Task MigrateAsync()
    {
        _logger.LogInformation("Adding saved searches to log viewer");

        // Add the saved searches
        await _logViewerService.AddSavedLogQueryAsync("[Impersonation] Find all start / stop times", AllLogsQuery);
        await _logViewerService.AddSavedLogQueryAsync("[Impersonation] Find all warning and errors", ErrorLogsQuery);
    }
}
