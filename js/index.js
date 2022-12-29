function validar(frase,encript){
    if(validarEmpty(frase)){            
        for(let i=0;i<frase.length;i++){
            if(!((frase.charCodeAt(i)>96 && frase.charCodeAt(i)<123) || (frase.charCodeAt(i)>47 && frase.charCodeAt(i)<58))){
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

function encriptar(frase){
    frase=frase.replaceAll('e','enter');    
    frase=frase.replaceAll('i','imes');
    frase=frase.replaceAll('a','ai');        
    frase=frase.replaceAll('o','ober');
    frase=frase.replaceAll('u','ufat');    
    return(frase);
}

function desEncriptar(frase){
    frase=frase.replaceAll('enter','e');
    frase=frase.replaceAll('imes','i');
    frase=frase.replaceAll('ai','a');        
    frase=frase.replaceAll('ober','o');
    frase=frase.replaceAll('ufat','u');
    return frase;
}

let dato=document.querySelector("[name=texto]");
const copiar=document.querySelector("[name=copiar]");
const limpiar_texto=document.querySelector("[name=limpiar_texto");
const limpiar_mensaje=document.querySelector("[name=limpiar_mensaje");
const encriptador=document.querySelector("[name=encriptar]");
const desEncriptador=document.querySelector("[name=desEncriptar]");
let output=document.querySelector("output");

encriptador.addEventListener("click",()=>{
        if(validar(dato.value,"encriptar")==true) alert(encriptar(dato.value))
});

desEncriptador.addEventListener("click",()=>{
        if(validar(dato.value,"des-encriptar")==true) alert(desEncriptar(dato.value))
});

copiar.addEventListener("click",()=>alert("test"));
// limpiar_texto.addEventListener("click",()=>alert("hola"));
limpiar_mensaje.addEventListener("click",()=>alert("test3"));







// const encriptador=document.querySelector("[name=encriptar]");
// encriptador.addEventListener("click",()=>alert(encriptar(dato.value))); //encriptar sin importar validacion



// let body=document.querySelector("body");
// body.addEventListener("click",(event)=>{
//     if(event.target.name=="encriptar"){alert(encriptar(dato.value))}
//     if(event.target.name=="desEncriptar"){alert(desEncriptar(dato.value))}
// })

