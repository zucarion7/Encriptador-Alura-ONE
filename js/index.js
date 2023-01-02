const listaEncrip=['enter','imes','ai','ober','ufat'],
    listaDesEnc=['e','i','a','o','u'];

function validarLetras(frase){
    let validacion=true;
    for(let i=0;i<frase.length;i++){
        if(!((frase.charCodeAt(i)==32) || (frase.charCodeAt(i)==241) || (frase.charCodeAt(i)>96 && frase.charCodeAt(i)<123) || (frase.charCodeAt(i)>47 && frase.charCodeAt(i)<58))){
            validacion=false;
            break;
        };
    }
    return validacion;
}

function validarEmpty(frase){
    let ocupado=frase!="" ? true:false;
    return ocupado;
}

function mensajeEmpty(){
    let message=document.querySelector("[name=mensaje]");
    let validacion= message.value=="" ? true:false;
    return validacion;
}

function validar(frase){
    let validacion=false;
    if(validarEmpty(frase)==false){
        vacioAlert(true);
    }else if(validarLetras(frase)==false){
        animarAlert();
        setTimeout(()=>{
            alerta.classList.remove("activate");},5000)

    }else{
        validacion=true;
    }
    return validacion;
};

function cambio(frase,lista1,lista2){
    for(let i=0;i<lista1.length;i++){
        frase=frase.replaceAll(lista1[i],lista2[i]);
    }
    return(frase);
}

function copiarPortaPapeles(elemento){    
    navigator.clipboard.writeText(elemento.value);
}

// function pegarPortaPapeles(elemento){   
//     elemento.select(); 
//     navigator.clipboard.readText()
//         .then((value)=>elemento.value=value);
// }

function animarAlert(){
    alerta.classList.add("activate");
}

function displayear(elemento,estilo){
    if(estilo==true){
        elemento.style.display = "inline";
    }else{
        elemento.style.display = "none";
    }
}

function aluraAlert(empty){
    displayear(imgAlura,empty);
    displayear(img_no_mensaje,!empty);
    displayear(limpiar_mensaje,!empty);
    displayear(copiar,!empty);
}

function activarBotones(empty){
    displayear(img_no_mensaje,!empty);
    displayear(imgAlura,!empty);
    displayear(limpiar_mensaje,empty);
    displayear(copiar,empty);
}

function vacioAlert(empty){
    displayear(img_no_mensaje,empty);
    displayear(imgAlura,!empty);
    displayear(limpiar_mensaje,!empty);
    displayear(copiar,!empty);
}

function validoAlert(alerta1,alerta2){
    displayear(alerta1,false);
    displayear(alerta2,true);
}

let texto=document.querySelector("[name=texto]");
const encriptador=document.querySelector("[name=encriptar]");
const desEncriptador=document.querySelector("[name=desEncriptar]");
const limpiar_texto=document.querySelector("[name=limpiar_texto");
let mensaje=document.querySelector("[name=mensaje]");
var copiar=document.querySelector("[name=copiar]");
var limpiar_mensaje=document.querySelector("[name=limpiar_mensaje");
var alerta=document.querySelector(".alerta");
// var alert1=document.querySelector("#img-alert1");
// var alert2=document.querySelector("#img-alert2");
var imgAlura=document.querySelector("#alura-img");
var img_no_mensaje=document.querySelector("#img-no-mensaje");

encriptador.addEventListener("click",()=>{
    if(validar(texto.value)==true){
        mensaje.value=cambio(texto.value,listaDesEnc,listaEncrip);
        activarBotones(!mensajeEmpty());
    }
});

desEncriptador.addEventListener("click",()=>{
    if(validar(texto.value)==true){
        mensaje.value=cambio(texto.value,listaEncrip,listaDesEnc);
        activarBotones(!mensajeEmpty());
    }
});

limpiar_texto.addEventListener("click",()=>texto.value="");

copiar.addEventListener("click",()=>{
    copiarPortaPapeles(mensaje);
    // pegarPortaPapeles(texto);    
});

limpiar_mensaje.addEventListener("click",()=>{
    mensaje.value="";
    aluraAlert(true);
});