using System.Runtime.CompilerServices;
using IS401Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IS401Project.Controllers;
[Route("api/[controller]")]
[ApiController]
public class GroupController
{
        private NotableDbContext _context;
        public GroupController(NotableDbContext context) => _context = context;

        // This call will get all posts for a certain group
        [HttpGet("AllPublicGroups")]
        public IEnumerable<object> GetGroups(int GroupId) // get a list of all groups that are public
        {
                var publicGroups = _context.Groups
                        .Where(g => g.PrivacyStatus == "Public").ToList();
                
                return publicGroups;
        }

        // This call will get all posts for a certain group
        [HttpGet("AllPosts/{GroupId}")]
        public IEnumerable<object> GetPostsForGroup(int GroupId)
        {
                var groupPosts = _context.Posts
                        .Where(n => n.GroupId == GroupId).ToList();

                return groupPosts;
        }

        // This call will get all comments for a certain post
        [HttpGet("CommentsForPost/{PostId}")]
        public IEnumerable<object> GetCommentsForPost(int PostId)
        {
                var comments = _context.Comments
                        .Where(n => n.PostId == PostId).ToList();
                
                return comments;
        }

        // This call will get all responses for a specific comment
        [HttpGet("ResponseForComment/{CommentId}")]
        public IEnumerable<object> GetResponsesForComment(int CommentId)
        {
                var responses = _context.Responses
                        .Where(n => n.CommentId == CommentId).ToList();
                return responses;
        }
}