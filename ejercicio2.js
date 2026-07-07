const prompt = require("prompt-sync")();


const pinCorrecto = "1234";
let intento = prompt("Ingresa tu PIN: ");

while (intento !== pinCorrecto) {
    console.log("PIN incorrecto");
    intento = prompt("Intenta de nuevo: ");
}

console.log("Credencial verificada, sesión iniciada con exito👉");