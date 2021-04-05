"use strict";
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var movil = document.getElementById("movil");
var python = document.getElementById("a");
var java = document.getElementById("b");
var ts = document.getElementById("c");
var php = document.getElementById("d");
var c = document.getElementById("e");
var cmasmas = document.getElementById("f");
var texto = document.getElementById("texto");
var continuar = document.getElementById("continuar");
nombre.setAttribute("required", "");
apellidos.setAttribute("required", "");
rut.setAttribute("required", "");
correo.setAttribute("required", "");
movil.setAttribute("required", "");
texto.setAttribute("required", "");
continuar.setAttribute("required", "");
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
function validarContinuar() {
    if ((continuar.checked) && (continuar.value != null)) {
        return true;
    }
}
function validarChecks() {
    if ((python.checked) && (python.value != null)) {
        return true;
    }
    if ((java.checked) && (java.value != null)) {
        return true;
    }
    if ((ts.checked) && (ts.value != null)) {
        return true;
    }
    if ((php.checked) && (php.value != null)) {
        return true;
    }
    if ((c.checked) && (c.value != null)) {
        return true;
    }
    if ((cmasmas.checked) && (cmasmas.value != null)) {
        return true;
    }
}
function validarNum(num) {
    var valor = num.value;
    if (valor.length <= 8 || !valor.match(/^[0-9]+$/)) {
        return false;
    }
    else {
        return true;
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
    if ((movil.value && nombre.value && texto.value && rut.value && apellidos.value && correo.value != null) && (validarRut(rut) != false) && (validarNum(movil) != false) && (validarText(texto) && (validarChecks() || (validarContinuar())))) {
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
