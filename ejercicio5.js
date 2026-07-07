let usuarios = [
  { nombre: "Carol", movimientos: [10000, 5000, 12000,-11000] },
  { nombre: "Cony", movimientos: [3000, -2000, 8000,15000] },
  { nombre: "Camila", movimientos: [80000, -50000, 20000,3000] }
];
    console.log("<=============================>");
    console.log("RESUMEN USUARIOS");
    
//  BUCLE EXTERNO: recorre usuarios
for (let i = 0; i < usuarios.length; i++) {

  let totalUsuario = 0; // reinicia cada usuario

  //  BUCLE anidado recorre movimientos del usuario
  for (let j = 0; j < usuarios[i].movimientos.length; j++) {

    let movimiento = usuarios[i].movimientos[j];

    //  recorre los movimientos del usuario y se acumulan en totalusuario
    totalUsuario += movimiento;
  }

  //IMPRIMO LOS USUARIOS

    console.log("<=============================>");
    console.log("Usuario:", usuarios[i].nombre);
    console.log("Total de cuenta: $", totalUsuario);
    console.log("<=============================>");
   
  
}

