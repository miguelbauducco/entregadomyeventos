const contacto = [];

let formulario = document.getElementById("formulario");
let nombre= document.getElementById("full-name");
let correo = document.getElementById("email");
let consulta = document.getElementById("abstract");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    if(nombre.value ===""){
        console.log("debes completar este campo con tu nombre");
        return;

    }else if(correo.value === ""){
        console.log("debes completar este campo con tu email");
        return;

    }else if(consulta.value === ""){
        console.log("debes completar este campo con tu consulta");
        return;
    }

const contactos = {
    nombre: nombre.value,
    email: correo.value,
    consulta : consulta.value,
};

contacto.push(contactos);

console.dir(contacto);

setTimeout(function() {
    window.location.replace('index.html')
    
}, 2000);

});