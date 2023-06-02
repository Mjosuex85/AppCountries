// Función para generar un color aleatorio en formato hexadecimal
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const info = useMemo(() => {
  return {
    labels,
    datasets: result.map((item, index) => {
      const color = randomColor();
      return {
        label: item.path,
        data: item.counts,
        transition: 0.1,
        tension: 0.1,
        borderColor: color,
        borderRadius: "30px",
        pointBackgroundColor: color,
        borderWidth: 0.9,
      };
    }),
  };
}, [labels]);
