//arreglos que contienen los cambios de encriptacion
const listaEncrip=['enter','imes','ai','ober','ufat'],
    listaDesEnc=['e','i','a','o','u'];

//validacion de caracteres
function validarLetras(frase){
    for(let i=0;i<frase.length;i++){
        if(!(frase.charCodeAt(i)==32 || frase.charCodeAt(i)==10 || frase.charCodeAt(i)==241 || (frase.charCodeAt(i)>96 && frase.charCodeAt(i)<123) || (frase.charCodeAt(i)>47 && frase.charCodeAt(i)<58))){
            return true;
        };
    }
    return false;
}
//validacion si encontramos el texto o el encriptado vacio
function validarEmpty(frase){
    return frase=="";
}

//control de validaciones
function validar(frase){
    let validacion=false;
    if(validarEmpty(frase)){
        vacioAlert(frase);
    }else if(validarLetras(frase)){
        animarAlert();        
    }else{
        validacion=true;
    }
    return validacion;
};

//funcion de encriptacion (aqui se realiza la desencriptacion tambien)
function cambio(frase,lista1,lista2){
    for(let i=0;i<lista1.length;i++){
        frase=frase.replaceAll(lista1[i],lista2[i]);
    }
    return(frase);
}

//copiar al porta papeles
function copiarPortaPapeles(elemento){    
    navigator.clipboard.writeText(elemento.value);
}

//pegar al portapapeles
// function pegarPortaPapeles(elemento){   
//     elemento.select(); 
//     navigator.clipboard.readText()
//         .then((value)=>elemento.value=value);
// }

//animacion de la alerta de caracter no debido
function animarAlert(){
    alerta.classList.add("activate");
    setTimeout(()=>{
        alerta.classList.remove("activate");
    },1500);
}

//animacion alerta de no hay mensaje para encriptar o desencriptar
function vacioAlert(frase,empty=validarEmpty(frase)){
    displayear(imgAlura,false);
    displayear(img_no_mensaje,true);
    displayear(limpiar_mensaje,false);
    displayear(copiar,false);
    img_no_mensaje.classList.add("activate");
    setTimeout(()=>{        
        img_no_mensaje.classList.remove("activate");        
        displayear(img_no_mensaje,false);
        if(validarEmpty(mensaje.value)){
            displayear(imgAlura,true);
        }else{
            displayear(limpiar_mensaje,true);
            displayear(copiar,true); 
        }
        
    },4000)
}

//funcion para mostrar un elemento especifico u ocultarlo
function displayear(elemento,estilo){
    if(estilo){
        elemento.style.display = "block";
    }else{
        elemento.style.display = "none";
    }
}

//mostrar imagen alura
function aluraAlert(){
    displayear(imgAlura,true);
    displayear(img_no_mensaje,false);
    displayear(limpiar_mensaje,false);
    displayear(copiar,false);
}

//mostrar los botones
function activarBotones(){
    displayear(img_no_mensaje,false);
    displayear(imgAlura,false);
    displayear(limpiar_mensaje,true);
    displayear(copiar,true);
    limpiar_mensaje.style.marginLeft = 'auto';
    copiar.style.marginLeft = 'auto';
}

function alertCopiado(){
    copiar.innerHTML="Copiado";
    copiar.style.boxShadow="3px 2px 22px 1px green";
    setTimeout(()=>{
        copiar.innerHTML="Copiar";
        copiar.style.boxShadow="";
    },3000)
}

//declaracion de variables
let texto=document.querySelector("[name=texto]");
const encriptador=document.querySelector("[name=encriptar]");
const desEncriptador=document.querySelector("[name=desEncriptar]");
const limpiar_texto=document.querySelector("[name=limpiar_texto");
let mensaje=document.querySelector("[name=mensaje]");
var copiar=document.querySelector("[name=copiar]");
var limpiar_mensaje=document.querySelector("[name=limpiar_mensaje");
var alerta=document.querySelector(".alerta");
var imgAlura=document.querySelector("#alura-img");
var img_no_mensaje=document.querySelector("#img-no-mensaje");

//funcionalidad del boton encriptar
encriptador.addEventListener("click",()=>{
    if(validar(texto.value)){
        mensaje.value=cambio(texto.value,listaDesEnc,listaEncrip);
        activarBotones();
    }
    texto.focus();
});

//funcionalidad del boton desencriptar
desEncriptador.addEventListener("click",()=>{
    if(validar(texto.value)){
        mensaje.value=cambio(texto.value,listaEncrip,listaDesEnc);
        activarBotones();
    }
    texto.focus();
});

//funcionalidad boton limpiar texto
limpiar_texto.addEventListener("click",()=>{
    texto.value="";
    texto.focus();
});
 
//funcionalidad boton copiar
copiar.addEventListener("click",()=>{
    copiarPortaPapeles(mensaje);
    alertCopiado();
    texto.focus();
    // pegarPortaPapeles(texto);    
});

//funcionalidad boton limpiar zona de mensaje encriptado
limpiar_mensaje.addEventListener("click",()=>{
    mensaje.value="";
    aluraAlert();
    texto.focus();
});