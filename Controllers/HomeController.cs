using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using SISE.Models;

namespace SISE.Controllers
{
    public class HomeController : Controller
    {
        [Authorize] // Requiere autenticación
        public IActionResult Index()
        {
            // Si el usuario está autenticado, muestra el dashboard
            if (User.Identity.IsAuthenticated)
            {
                return View();
            }
            
            // Si no está autenticado, redirige al login
            return RedirectToAction("Login", "Account");
        }

        [AllowAnonymous] // Permite acceso sin autenticación
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        [AllowAnonymous] // Permite acceso sin autenticación
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}