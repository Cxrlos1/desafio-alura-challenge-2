
const textArea = document.querySelector(".textarea");
const imagenMuneco = document.querySelector(".img__cifrado");
const resultTittle = document.querySelector(".h2");
const resultText = document.querySelector(".p");
const botonEncriptar = document.querySelector(".btn__encriptar");
const botonDesencriptar = document.querySelector(".btn__desencriptar");
const botonCopiar = document.querySelector(".btn__copiar");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

//funcion encriptar mensaje
function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

//funcion desencriptar mensaje
function desencriptarmensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

//ocultar elementos
textArea.addEventListener("input", (e)=> {
    resultTittle.textContent = "Capturando mensaje";
    resultText.textContent = "";
})

//funcion boton encriptar
botonEncriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultTittle.textContent = mensajeEncriptado;
    resultText.textContent = "Mensaje encriptado exitosamente";
})

//funcion boton desencriptar
botonDesencriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    resultTittle.textContent = mensajeDesencriptado;
    resultText.textContent = "Mensaje desencriptado exitosamente";
})

//funcion boton copiar
botonCopiar.addEventListener("click", ()=> {
    let textoCopiado = resultTittle.textContent; 
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        resultTittle.textContent ="Texto copiado";
        resultText.textContent = "";
    })
})