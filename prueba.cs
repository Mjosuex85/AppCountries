function parseDateAndFormat(dateStr) {
  // Convertir la cadena a un objeto de fecha
  const dateObj = new Date(dateStr);
  // Obtener el nombre del mes en formato abreviado (MMM)
  const month = dateObj.toLocaleString('default', { month: 'short' });
  // Obtener el año en formato YYYY
  const year = dateObj.getFullYear();
  // Formatear la fecha como "MMM-YYYY" (por ejemplo, "Jul-2023")
  const formattedDate = `${month}-${year}`;
  return formattedDate;
}
