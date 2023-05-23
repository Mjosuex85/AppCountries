import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Obtener los datos de dates
  const { dates } = dates;

  // Obtener las fechas y los caminos únicos
  const uniquePaths = [];
  const labels = [];
  const datasets = [];

  dates.forEach((item) => {
    const { date, pathList } = item;
    labels.push(date);

    pathList.forEach((pathItem) => {
      const { path, count } = pathItem;

      if (!uniquePaths.includes(path)) {
        uniquePaths.push(path);
        datasets.push({
          label: path,
          data: [],
          fill: false,
          borderColor: getRandomColor(),
        });
      }

      const dataIndex = uniquePaths.indexOf(path);
      datasets[dataIndex].data.push(count);
    });
  });

  // Función para generar un color aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Datos del gráfico
  const data = {
    labels: labels,
    datasets: datasets,
  };

  // Opciones de configuración del gráfico
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
