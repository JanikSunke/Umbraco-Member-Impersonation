using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;
using UmbracoMemberImpersonation.TestSite.Notification;

namespace UmbracoMemberImpersonation.TestSite.Composers;

public class WebComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder
            .AddNotificationHandler<UmbracoApplicationStartedNotification, SeedMembersOnStartup>();
    }
}
