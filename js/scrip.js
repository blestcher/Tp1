

function saludar() {

  let nombre = document.getElementById("nombre").value;

  let apellido = document.getElementById("apellido").value;

  let msj = "Gracias po tu participación " + nombre + " " + apellido ;

  alert(msj);
  
}


function hola(){
    alert("bienvenido a Bs As Codo a Codo")
}


function quitarClaseError() {
  let x = document.querySelectorAll(".form-control, .form-select");
  let i;
  for (i = 0; i < x.length; i++) {
      x[i].classList.remove('is-invalid');
  }
}
