function obtenerDiasMes(mes, anio) {
  // Obtener el número de días en el mes y año especificados
  var ultimoDia = new Date(anio, mes, 0).getDate();

  // Crear un array para almacenar los días del mes en formato "dd/mm/yyyy"
  var diasMes = [];

  // Iterar sobre los días del mes
  for (var i = 1; i <= ultimoDia; i++) {
    // Obtener el día actual en formato "dd"
    var dia = i.toString().padStart(2, '0');

    // Obtener el mes actual en formato "mm"
    var mesActual = mes.toString().padStart(2, '0');

    // Obtener el año actual en formato "yyyy"
    var anioActual = anio.toString();

    // Crear la cadena de texto en formato "dd/mm/yyyy" y agregarla al array
    var fecha = dia + '/' + mesActual + '/' + anioActual;
    diasMes.push(fecha);
  }

  // Retornar el array con los días del mes en formato "dd/mm/yyyy"
  return diasMes;
}

// Ejemplo de uso
var mesParametro = 5; // Mes: Mayo
var anioParametro = 2023; // Año: 2023

var diasDelMes = obtenerDiasMes(mesParametro, anioParametro);

// Mostrar el array con los días del mes en formato "dd/mm/yyyy"
console.log(diasDelMes);

