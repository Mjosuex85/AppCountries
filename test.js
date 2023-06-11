const fechaActual = new Date();

const año = fechaActual.getFullYear(); 
const mes = fechaActual.getMonth() + 1; 
const fechaFormateada = "track_" + año + padZero(mes);

function padZero(numero) {
  return numero < 10 ? "0" + numero : numero;
};

console.log(fechaFormateada);
