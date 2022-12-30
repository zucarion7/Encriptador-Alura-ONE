var listaEncrip=['enter','imes','ai','ober','ufat'],
    listaDesEnc=['e','i','a','o','u'];

function validar(frase,encript){
    if(validarEmpty(frase)){            
        for(let i=0;i<frase.length;i++){
            if(!((frase.charCodeAt(i)==32) || (frase.charCodeAt(i)==241) || (frase.charCodeAt(i)>96 && frase.charCodeAt(i)<123) || (frase.charCodeAt(i)>47 && frase.charCodeAt(i)<58))){
                alert(`Se ingreso letra mayuscula, tilde o caracter especial. \n\nNo se puede ${encript}`)
                return false;
            }
        };    
        return true;
    }else{
        alert("No se encontró ningun mensaje");
    }
}

function validarEmpty(frase){
    let ocupado=frase!="" ? true:false;
    return ocupado;
}

function cambio(frase,lista1,lista2){
    for(let i=0;i<lista1.length;i++){
        frase=frase.replaceAll(lista1[i],lista2[i]);
    }
    return(frase);
}

function copiarPortaPapeles(elemento){
    let textoACopiar=elemento.value;
    navigator.clipboard.writeText(textoACopiar);
}

function pegarPortaPapeles(elemento){   
    elemento.select(); 
    navigator.clipboard.readText()
        .then((value)=>elemento.value=value);
}

let texto=document.querySelector("[name=texto]");
const encriptador=document.querySelector("[name=encriptar]");
const desEncriptador=document.querySelector("[name=desEncriptar]");
const limpiar_texto=document.querySelector("[name=limpiar_texto");
let mensaje=document.querySelector("[name=mensaje]");
const copiar=document.querySelector("[name=copiar]");
const limpiar_mensaje=document.querySelector("[name=limpiar_mensaje");

encriptador.addEventListener("click",()=>{
        if(validar(texto.value,"encriptar")==true) mensaje.value=cambio(texto.value,listaDesEnc,listaEncrip);
});

desEncriptador.addEventListener("click",()=>{
        if(validar(texto.value,"des-encriptar")==true) mensaje.value=cambio(texto.value,listaEncrip,listaDesEnc);
});

limpiar_texto.addEventListener("click",()=>texto.value="");

copiar.addEventListener("click",()=>{
    copiarPortaPapeles(mensaje);
    pegarPortaPapeles(texto);    
});

limpiar_mensaje.addEventListener("click",()=>mensaje.value="");







// const encriptador=document.querySelector("[name=encriptar]");
// encriptador.addEventListener("click",()=>alert(encriptar(dato.value))); //encriptar sin importar validacion



// let body=document.querySelector("body");
// body.addEventListener("click",(event)=>{
//     if(event.target.name=="encriptar"){alert(encriptar(dato.value))}
//     if(event.target.name=="desEncriptar"){alert(desEncriptar(dato.value))}
// })

