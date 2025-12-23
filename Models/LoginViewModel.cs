using System.ComponentModel.DataAnnotations;

namespace SISE.Models
{
public class LoginViewModel
{
    [Required(ErrorMessage = "El correo electrónico es requerido")]
    [EmailAddress(ErrorMessage = "El formato del correo no es válido")]
    public string Usuario { get; set; }

    [Required(ErrorMessage = "La contraseña es requerida")]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Display(Name = "Recordarme")]
    public bool Recordarme { get; set; }
}
}
