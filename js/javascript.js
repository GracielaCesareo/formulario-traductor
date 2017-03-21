function translate () {
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
translate();

function mostrarDatos () {
  var datosIgresados = document.getElementById('titulo');
  var infoDatos = document.getElementById('parrafo');
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  titulo.innerHTML = "Datos del formulario";
  parrafo.innerHTML = "El correo electrónico es: <br>" + email + "<br>" + "<br> La clave ingresada es: <br>" + password;
}
