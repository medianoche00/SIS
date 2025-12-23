// Mostrar/ocultar contraseña
function togglePassword() {
  const input = document.getElementById('Password');
  const icon = document.querySelector('.toggle-password');
  
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

// Mostrar loader
function showLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('active');
}

// Ocultar loader
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.remove('active');
}

// Mostrar toast
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  if (!toast || !toastMessage) return;
  
  const toastIcon = toast.querySelector('i');
  toastMessage.textContent = message;
  
  // Configurar el ícono según el tipo
  toastIcon.className = 'fas ' + 
    (type === 'success' ? 'fa-check-circle' : 
     type === 'error' ? 'fa-times-circle' : 'fa-info-circle');
  
  // Mostrar el toast
  toast.className = 'toast ' + type + ' show';
  
  // Ocultar después de 4 segundos
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Cerrar modal
function closeModal() {
  const modal = document.getElementById('modalRecovery');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Abrir modal de recuperación
function openModal(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('modalRecovery');
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  return false;
}

// Cerrar modal al hacer clic fuera
const modal = document.getElementById('modalRecovery');
if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
}

// Manejar envío del formulario de recuperación
document.getElementById('recoveryForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('recoveryEmail').value;
  
  if (!email) {
    showToast('Por favor ingresa tu correo electrónico', 'error');
    return;
  }
  
  showLoader();
  
  try {
    // Simular envío de correo
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mostrar mensaje de éxito
    showToast('Se ha enviado un enlace de recuperación a tu correo', 'success');
    closeModal();
    this.reset();
  } catch (error) {
    console.error('Error al enviar correo de recuperación:', error);
    showToast('Error al enviar el correo. Inténtalo de nuevo.', 'error');
  } finally {
    hideLoader();
  }
});

// Inicializar tooltips
function initTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// Cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar tooltips si Bootstrap está disponible
  if (typeof bootstrap !== 'undefined') {
    initTooltips();
  }
  
  // Manejar errores del lado del servidor
  const errorMessage = document.getElementById('error-message')?.textContent;
  if (errorMessage) {
    showToast(errorMessage, 'error');
  }
});
