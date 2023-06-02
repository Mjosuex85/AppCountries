function generateRandomDarkColors(count) {
  const colors = [];
  
  for (let i = 0; i < count; i++) {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(color);
  }
  
  return colors;
}

const info = useMemo(() => {
  const colors = generateRandomDarkColors(result.length);
  
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
