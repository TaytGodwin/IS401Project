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
        
        public IEnumerable<object> GetGroups(int GroupId) // get a list of all groups
        {
                var groups = _context.Groups
                        .Where(n => n.GroupId == GroupId).ToList();
                
                return groups;
        }

        public IEnumerable<object> GetPostsForGroup(int GroupId)
        {
                var groupPosts = _context.Posts
                        .Where(n => n.GroupId == GroupId).ToList();

                return groupPosts;
        }

        public IEnumerable<object> GetCommentsForPost(int PostId)
        {
                var comments = _context.Comments
                        .Where(n => n.PostId == PostId).ToList();
                
                return comments;
        }

        public IEnumerable<object> GetResponsesForComment(int CommentId)
        {
                var responses = _context.Responses
                        .Where(n => n.CommentId == CommentId).ToList();
                return responses;
        }
}