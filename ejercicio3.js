const prompt = require("prompt-sync")();

let opcion = "";

do {
    console.log("\n--- MENÚ ---");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");

    opcion = prompt("Elige una opción: ");

    if (opcion === "1") {
        console.log("Tu saldo es: $10'000.000");
    } else if (opcion === "2") {
        console.log("Función envia dinero...");
    } else if (opcion === "3") {
        console.log("Función recarga dinero...");
    } else if (opcion === "4") {
        console.log("Has seleccionado Salir");
    } else {
        console.log("Opción inválida, ingrese nuevamente");
    }

} while (opcion !== "4");

/* 
🧠 Idea central
while → primero pregunta, luego actúa
do...while → primero actúa, luego pregunta

👉 Aunque el usuario escriba "4" desde el inicio:
✔ El menú sí se muestra una vez

🆚 Comparación con while
while:
👉 “¿quieres comer?” → si dices NO, nunca comes
do...while:
👉 Comes primero → luego decides si sigues

📌 Por eso do...while siempre se ejecuta mínimo 1 vez

Usa do...while cuando necesitas ejecutar algo al menos una vez sí o sí.

ESTRUCTURA 

do {
   // hago algo
} while (condicion);

como seria si se hiciera con While

let opcion = prompt("Elige una opción: ");

while (opcion !== "4") {
  console.log("1. Ver saldo");
  console.log("2. Enviar dinero");
  console.log("3. Recargar");
  console.log("4. Salir");

  opcion = prompt("Elige una opción: ");
}

  Si el usuario escribe "4" desde el inicio…
❌ El menú nunca se muestra


*/