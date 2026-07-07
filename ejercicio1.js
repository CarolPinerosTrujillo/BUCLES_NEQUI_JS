const movimientos =[-100, 100, 200, -250, 500, 700]

let total = 0; // empieza en cero por que es un acumulador
let cantidadRetiros = 0; //empieza en cero por que es un contador 
let cantidadIngresos = 0
let cantidadMovimientos =0;

for (let i = 0; i < movimientos.length; i++) {
    const element = movimientos[i];

    total = total + element;

    if (element < 0) {
        cantidadRetiros = cantidadRetiros + 1;
        cantidadMovimientos=cantidadMovimientos+1;
    } else{
    cantidadIngresos = cantidadIngresos + 1;
    cantidadMovimientos=cantidadMovimientos+1;
    }
    /// console.log("Cantidad de retiros:" ,cantidadRetiros); imprime 5 veces las veces que vaya contanto que hay un retiro
    
}

console.log("Total de la cuenta: ",total);
console.log("Cantidad de retiros:" ,cantidadRetiros);
console.log("Cantidad de ingresos:" ,cantidadIngresos);
console.log("Total movimientos:" ,cantidadMovimientos);