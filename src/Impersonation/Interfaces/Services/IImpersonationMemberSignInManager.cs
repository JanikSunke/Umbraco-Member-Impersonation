using Microsoft.AspNetCore.Identity;

namespace Impersonation.Interfaces.Services;

public interface IImpersonationMemberSignInManager
{
    public Task<SignInResult> SignInAsync(string memberKey);
    public Task<SignInResult> SignOutAsync();
}
