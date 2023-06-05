import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import style from "./lineChart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDates } from "../../../redux/actions";

Chart.register(...registerables);

export default function LineChart(data) {
  const dispatch = useDispatch();

  const fechas = useSelector((state) => state.allMonthDays);
  const [labels, setLabels] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let pathCounts = {};

    data.data?.forEach((date) => {
      date.pathList.forEach((pathObj) => {
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

      fechas.forEach((fecha) => {
        const count = pathCounts[path][fecha] || 0;
        counts.push(count);
      });

      result.push({path: path, counts: counts });
    }

    setLines(result);
  }, []);


  useEffect(() => {
    if (Object.entries(fechas).length === 0) {
      console.log("setea fechas si está vacio");
    } else {
      setLabels(fechas);
    }
  }, [fechas]);


  useEffect(() => {
    dispatch(getDates());
  }, [labels]);

  const options = {
    fill: false,
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
    },
  };

 /*  console.log("TRAE ESTO",lines.map((e) => e.counts)); */

  function generateRandomColors(count) {
    const colors = [];
    const availableColors = [
      "#FF5733 ",
      "#33FF57",
      "#5733FF",
      "#FF33E6",
      "#33E6FF",
      "#E6FF33",
    ];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      const color = availableColors[randomIndex];
      availableColors.splice(randomIndex, 1);
      colors.push(color);
    }

    return colors;
  }

  const info = useMemo(() => {
    const colors = generateRandomColors(lines.length);

    return {
      labels,
      datasets: lines.map((item, index) => {
        const color = colors[index];
        return {
          id: index,
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

console.log("esta info",info)


  return (
    <div className={style.container}>
      <div>
        <Line datasetIdKey="id" data={info} options={options} />
      </div>
    </div>
  );
}


