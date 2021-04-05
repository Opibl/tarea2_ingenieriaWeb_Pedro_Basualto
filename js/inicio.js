"use strict";
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var movil = document.getElementById("movil");
var python = document.getElementById("python");
var java = document.getElementById("java");
var ts = document.getElementById("ts");
var php = document.getElementById("php");
var c = document.getElementById("c");
var cmasmas = document.getElementById("cpp");
var id1 = document.getElementById("boton1");
var id2 = document.getElementById("boton2");
var id3 = document.getElementById("boton3");
var id4 = document.getElementById("boton4");
var id5 = document.getElementById("boton5");
var texto = document.getElementById("texto");
nombre.setAttribute("required", "");
apellidos.setAttribute("required", "");
rut.setAttribute("required", "");
correo.setAttribute("required", "");
movil.setAttribute("required", "");
texto.setAttribute("required", "");
function validarText(texto) {
    var valor = texto.value;
    if (valor.length > 300) {
        alert("exedio caracteres");
        texto.value = "";
        var cuerpo = valor.slice(0, -2);
        texto.value = cuerpo;
        return false;
    }
    return true;
}
function validarNum(num) {
    var valor = num.value;
    if (valor.length <= 8) {
        return false;
    }
    else {
        return true;
    }
}
function validar(num) {
    var valor = num.value;
    if (isNaN(valor)) {
        num.setCustomValidity("no es numero");
        return false;
    }
}
function validarRut(rut) {
    var valor = rut.value.replace('.', '');
    valor = valor.replace('-', '');
    var cuerpo = valor.slice(0, -1);
    var dv = valor.slice(-1).toUpperCase();
    rut.value = cuerpo + '-' + dv;
    if (cuerpo.length < 7) {
        rut.setCustomValidity("RUT Incompleto");
        return false;
    }
    var suma = 0;
    var multiplo = 2;
    for (var i = 1; i <= cuerpo.length; i++) {
        var index = multiplo * valor.charAt(cuerpo.length - i);
        suma = suma + index;
        if (multiplo < 7) {
            multiplo = multiplo + 1;
        }
        else {
            multiplo = 2;
        }
    }
    var dvEsperado = 11 - (suma % 11);
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;
    rut.setCustomValidity('');
    if (dvEsperado != dv) {
        rut.setCustomValidity("RUT Inválido");
        return false;
    }
}
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
    if ((movil.value && nombre.value && texto.value && rut.value && apellidos.value && correo.value != null) && (validarRut(rut) != false) && (validarNum(movil) != false) && (validarText(texto))) {
        alert("el formulario se a enviado con exito");
        formulario.style.display = "none";
        document.write("hemos recibido sus datos, pronto nos estaremos comunicando con usted");
        event === null || event === void 0 ? void 0 : event.preventDefault();
    }
});
var limpiarDatos = document.getElementById("limpiar");
limpiarDatos.addEventListener("click", function (event) {
    event.preventDefault();
    var reiniciar = document.getElementById("formulario");
    reiniciar.reset();
});
