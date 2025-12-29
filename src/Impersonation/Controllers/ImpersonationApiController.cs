using Asp.Versioning;
using Impersonation.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Impersonation.Controllers;

[ApiVersion("1.0")]
[ApiExplorerSettings(GroupName = "Impersonation")]
public class ImpersonationApiController : ImpersonationApiControllerBase
{
    private readonly IImpersonationMemberSignInManager _impersonationMemberSignInManager;

    public ImpersonationApiController(IImpersonationMemberSignInManager impersonationMemberSignInManager) =>
        _impersonationMemberSignInManager = impersonationMemberSignInManager;

    [HttpPost("Impersonation/{memberKey}")]
    [ProducesResponseType<string>(StatusCodes.Status200OK)]
    public async Task<ActionResult> Impersonation(string memberKey)
    {
        var result = await _impersonationMemberSignInManager.SignInAsync(memberKey);

        if (result.Succeeded)
        {
            return Ok("Successfully impersonated");
        }

        return BadRequest("Failed to impersonate");
    }

    [HttpPost("StopImpersonation")]
    [ProducesResponseType<string>(StatusCodes.Status204NoContent)]
    public async Task<ActionResult> StopImpersonation()
    {
        var result = await _impersonationMemberSignInManager.SignOutAsync();

        if (result.Succeeded)
        {
            return NoContent();
        }

        return BadRequest("Failed to impersonate");
    }
}
