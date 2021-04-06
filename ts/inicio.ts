let nombre:any = document.getElementById("nombre"); 
let apellidos:any = document.getElementById("apellidos"); 
let rut:any = document.getElementById("rut"); 
let correo:any = document.getElementById("correo"); 
let movil:any = document.getElementById("movil"); 
let python:any = document.getElementById("a"); 
let java:any = document.getElementById("b");
let ts:any = document.getElementById("c") ;
let php:any = document.getElementById("d") ;
let c:any = document.getElementById("e") ;
let cmasmas:any = document.getElementById("f");
let texto = document.getElementById("texto") as HTMLInputElement;
let continuar = document.getElementById("continuar") as HTMLInputElement;



nombre.setAttribute("required", "");
apellidos.setAttribute("required", "");
rut.setAttribute("required", "");
correo.setAttribute("required", "");
movil.setAttribute("required", "");
texto.setAttribute("required", "");
continuar.setAttribute("required", "");




let hasError = false;

function validarRadios(){
    
    if(document.querySelector('input[name="nivel"]:checked') as HTMLInputElement){
        return true;
    }
    else{
        hasError = true;
        alert("es obligatorio marcar radio");
        return false;
    }

}

function validarText(texto:HTMLInputElement){
    let valor = texto.value;

    if(valor.length > 300){

        alert("exedio caracteres");
        texto.value="";
        let cuerpo = valor.slice(0,-2);
        texto.value=cuerpo;
        return false;
    }
    
    return true;
}

function validarContinuar(){
    if((continuar.checked)&&(continuar.value != null)){
        return true;
    }
}

function validarChecks(){

    if((python.checked)&&(python.value != null)){
        return true;
    }
    if((java.checked)&&(java.value != null)){
        return true;
    }
    if((ts.checked)&&(ts.value != null)){
        return true;
    }
    if((php.checked)&&(php.value != null)){
        return true;
    }
    if((c.checked)&&(c.value != null)){
        return true;
    }
    if((cmasmas.checked)&&(cmasmas.value != null)){
        return true;
    }
}

function validarNum(num:HTMLInputElement): boolean {
    let valor = num.value;
    if(valor.length <= 8 || !valor.match(/^[0-9]+$/)){
        return false;
    }
    else{
        return true;
    }
}



function validarRut(rut:HTMLInputElement) {
    
    var valor:any = rut.value.replace('.','');
    
    valor = valor.replace('-','');
    
    
    let cuerpo = valor.slice(0,-1);
    let dv:any = valor.slice(-1).toUpperCase();
    
    
    rut.value = cuerpo + '-'+ dv
    
    
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
   
    let suma = 0;
    let multiplo = 2;
    
   
    for(let i=1;i<=cuerpo.length;i++) {
    
        
        let index = multiplo * valor.charAt(cuerpo.length - i);
        
        
        suma = suma + index;
        
        
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    
    let dvEsperado = 11 - (suma % 11);
    
    
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
     
    rut.setCustomValidity('');
    
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    
    
}




let formulario = document.getElementById("formulario") as HTMLFormElement;
formulario.addEventListener("submit",function(event){
    
    if((movil.value && nombre.value && texto.value && rut.value && apellidos.value && correo.value != null) && (validarRut(rut) != false)&&(validarNum(movil)!=false)&&(validarText(texto)&&(validarChecks()||(validarContinuar()))&&(validarRadios()))) {

        formulario.style.display = "none";
        document.write("hemos recibido sus datos, pronto nos estaremos comunicando con usted");
        if(hasError) event?.preventDefault();
    }
    
});

let limpiarDatos = document.getElementById("limpiar") as HTMLInputElement;
limpiarDatos.addEventListener("click",function(event){
    event.preventDefault();
    var reiniciar:any = document.getElementById("formulario");
    reiniciar.reset();
});