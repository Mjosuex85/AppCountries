let pathCounts = {};

dates.forEach(date => {
  date.pathList.forEach(pathObj => {
    const { path, count } = pathObj;

    if (!pathCounts[path]) {
      pathCounts[path] = {};
    }

    pathCounts[path][date.date] = count;
  });
});

let result = [];

for (let path in pathCounts) {
  let counts = [];

  fechas.forEach(fecha => {
    const count = pathCounts[path][fecha] || 0;
    counts.push({ date: fecha, count: count });
  });

  result.push({ path: path, counts: counts });
}

console.log(result);
