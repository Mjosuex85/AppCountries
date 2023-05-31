let pathCounts = {};

// Recorrer cada objeto en el array "dates"
dates.forEach(date => {
  // Recorrer cada objeto en "pathList" de cada fecha
  date.pathList.forEach(pathObj => {
    const { path, count } = pathObj;
    // Si el path no existe en el objeto pathCounts, se agrega con su conteo
    if (!pathCounts[path]) {
      pathCounts[path] = {};
    }
    // Si el path existe, se establece el conteo en la fecha correspondiente
    pathCounts[path][date.date] = { date: date.date, count: count || 0 };
  });
});

// Crear un array para almacenar los resultados
let result = [];

// Recorrer el objeto pathCounts y agregar los paths al array result
for (let path in pathCounts) {
  let counts = [];
  for (let date in pathCounts[path]) {
    counts.push(pathCounts[path][date]);
  }
  let pathObj = {
    path: path,
    counts: counts
  };
  result.push(pathObj);
}

