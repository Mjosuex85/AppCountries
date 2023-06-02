function generateRandomColors(count) {
  const colors = [];
  const availableColors = ["#FF5733", "#33FF57", "#5733FF", "#FF33E6", "#33E6FF", "#E6FF33"];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    const color = availableColors[randomIndex];
    availableColors.splice(randomIndex, 1);
    colors.push(color);
  }
  
  return colors;
}

const info = useMemo(() => {
  const colors = generateRandomColors(result.length);
  
  return {
    labels,
    datasets: result.map((item, index) => {
      const color = colors[index];
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
