var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function openCanvas(){
document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}

function sendEmail() {
  // Obtiene los valores de los campos del formulario.
  const name = document.querySelector('input[name="name"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const body = document.querySelector('textarea[name="text"]').value;

  // Crea un objeto `Email` con los datos del correo electrónico.
  const email = new Email({
    from: 'app@example.com',
    to: 'empaques.mn@gmail.com',
    subject: subject,
    body: `Nombre: ${name}\nAsunto: ${subject}\n\n${body}`
  });

  // Abre la aplicación de correo predeterminada.
  window.open(`mailto:empaques.mn@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`);

  // Muestra un mensaje de confirmación.
  alert('El correo electrónico se ha enviado correctamente.');
}