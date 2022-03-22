// codigo de imagen //


let miImage = document.querySelector('img');
miImage.onclick = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc === "images/leo perfil.jpg"){
        miImage.setAttribute('src',"images/leo perfil 2.jpg");
    } else {
        miImage.setAttribute('src',"images/leo perfil.jpg");
    }
}

// codigo de mensaje //

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Bienvenido/a, ' + miNombre;
    }
  } 
    if(!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'Bienvenido/a, ' + nombreAlmacenado;
  }
  
miBoton.onclick= function(){
    estableceNombreUsuario();
}



