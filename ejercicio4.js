let movimientos = [0, 5000, 0, 12000, 3000, 0, 8000];

let posicionEncontrada = -1;  // Empiezo asumiendo que no hay resultado. Si encuentro algo, actualizo la posición.

for (let i = 0; i < movimientos.length; i++) {

  // 🧹 FILTRO: ignorar movimientos en 0
  if (movimientos[i] === 0) {
    continue;
  }

  // 🔍 BÚSQUEDA: primer pago mayor a 10000 
  if (movimientos[i] > 10000) {
    posicionEncontrada = i;
    console.log("Primer pago encontrado mayor a 10000 en posición:", i);
    break;
  }
}

if (posicionEncontrada === -1) {
  console.log("No se encontró ningún pago");
}