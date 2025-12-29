using Impersonation.Extensions;
using Impersonation.Interfaces.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Security;
using Umbraco.Cms.Web.Common.Security;

namespace Impersonation.Services;

public class ImpersonationMemberSignInManager : IImpersonationMemberSignInManager
{
    private static readonly Action<ILogger, int, string, Exception?> _logImpersonationStarted =
        LoggerMessage.Define<int, string>(
            LogLevel.Information,
            new EventId(1850, "UmbracoMemberImpersonation.ImpersonationStarted"),
            "Impersonation: Backoffice user with id: {UserId} started to impersonate member with id: {MemberId}");

    private static readonly Action<ILogger, int, Exception?> _logImpersonationStopped =
        LoggerMessage.Define<int>(
            LogLevel.Information,
            new EventId(1851, "UmbracoMemberImpersonation.ImpersonationStopped"),
            "Impersonation: Backoffice user with id: {UserId} stopped impersonation");

    private static readonly Action<ILogger, int?, Exception?> _logImpersonationDenied =
        LoggerMessage.Define<int?>(
            LogLevel.Warning,
            new EventId(1852, "UmbracoMemberImpersonation.ImpersonationDenied"),
            "Impersonation: denied for backoffice user {UserId} (not allowed)");

    private readonly IBackOfficeSecurityAccessor _backOfficeSecurityAccessor;
    private readonly ILogger<ImpersonationMemberSignInManager> _logger;
    private readonly IMemberManager _memberManager;
    private readonly IMemberSignInManager _memberSignInManager;

    public ImpersonationMemberSignInManager(IMemberSignInManager memberSignInManager,
        IBackOfficeSecurityAccessor backOfficeSecurityAccessor, IMemberManager memberManager,
        ILogger<ImpersonationMemberSignInManager> logger)
    {
        _memberSignInManager = memberSignInManager;
        _backOfficeSecurityAccessor = backOfficeSecurityAccessor;
        _memberManager = memberManager;
        _logger = logger;
    }

    public async Task<SignInResult> SignInAsync(string memberKey)
    {
        var user = _backOfficeSecurityAccessor.BackOfficeSecurity?.CurrentUser;

        if (user == null || !user.IsAllowedToImpersonate())
        {
            _logImpersonationDenied(_logger, user?.Id, null);
            return SignInResult.Failed;
        }

        var member = await _memberManager.FindByIdAsync(memberKey);

        if (member == null)
        {
            return SignInResult.Failed;
        }

        _logImpersonationStarted(_logger, user.Id, member.Id, null);

        await _memberSignInManager.SignInAsync(member, false);
        return SignInResult.Success;
    }

    public async Task<SignInResult> SignOutAsync()
    {
        var user = _backOfficeSecurityAccessor.BackOfficeSecurity?.CurrentUser;

        if (user == null || !user.IsAllowedToImpersonate())
        {
            _logImpersonationDenied(_logger, user?.Id, null);
            return SignInResult.Failed;
        }

        _logImpersonationStopped(_logger, user.Id, null);

        await _memberSignInManager.SignOutAsync();
        return SignInResult.Success;
    }
}
