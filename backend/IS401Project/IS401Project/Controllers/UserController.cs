using System.Runtime.CompilerServices;
using IS401Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IS401Project.Controllers;
[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private NotableDbContext _context;
    public UserController(NotableDbContext context) => _context = context;
    
    // This call will return all information for the user
    [HttpGet("user/{UserID}")]
    public object GetUserById(int UserID)
    {
        return _context.Users.Where(u => u.UserId == UserID).FirstOrDefault();
    }

    // This call will get all users
    [HttpGet("users")]
    public IEnumerable<object> GetAllUsers()
    {
        return _context.Users.ToList();
    }
    
    // This call will get all groups a user is a part of
    [HttpGet("user/{UserID}/groups")]
    public IEnumerable<object> GetUserGroups(int UserID)
    {
        return _context.UserGroup
            .Where(ug => ug.UserId == UserID).ToList();
    }
    
    // This will get all posts associated with a user
    [HttpGet("user/{UserID}/posts")]
    public IEnumerable<object> GetUserPosts(int UserID)
    {
        var posts = _context.Posts
            .Where(p => p.UserId == UserID).ToList();

        return posts;
    }
    
    // This will get all comments for a user
    [HttpGet("user/{UserID}/comments")]
    public IEnumerable<object> GetUserComments(int UserID)
    {
        var comments = _context.Comments
            .Where(c => c.UserId == UserID).ToList();

        return comments;
    }
    
    // This will return all usernames and passwords (probs not good for security)
    [HttpGet("/loginInfo")]
    public IEnumerable<object> GetLoginInfo ()
    {
        var loginInfo = _context.Logins.ToList();
        return loginInfo;
    }


}