using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using IS401Project.Data;
using IS401Project.Views;
using Microsoft.EntityFrameworkCore;


namespace IS401Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroupController : ControllerBase
    {
        private readonly ILogger<GroupController> _logger;

        public GroupController(ILogger<GroupController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public IActionResult Delete(int id)
        {
            var recordToDelete = _logger.Users
                .Single(x => x.UserID == id);
        
            return View(recordToDelete);
        }
        
        [HttpPost]
        public IActionResult Delete(User user)
        {
            _logger.Users.Remove(user);
            _logger.SaveChanges();
            return RedirectToAction("ViewMovies");
        }
    }
}