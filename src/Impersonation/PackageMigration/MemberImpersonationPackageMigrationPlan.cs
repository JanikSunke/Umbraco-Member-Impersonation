using Umbraco.Cms.Core.Packaging;

namespace Impersonation.PackageMigration;

public class MemberImpersonationPackageMigrationPlan : PackageMigrationPlan
{
    public MemberImpersonationPackageMigrationPlan() : base("UmbracoMemberImpersonation") { }

    protected override void DefinePlan()
    {
        To<AddImpersonationToLogViewer>(new Guid("111ef463-2c14-4ac4-8df7-5449ec57b09f"));
    }
}
