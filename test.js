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
  const [lines, setLines] = useState([])

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

    result.push({ path: path, counts: counts });
  }

  useEffect(() => {
    setLines(result)
  },[])



  useEffect(() => {
    if (Object.entries(fechas).length === 0) {
      console.log("setea fechas si está vacio");
    } else {
      setLabels([...fechas]);
    }
  }, [fechas]);

  useEffect(() => {
    dispatch(getDates());
  }, [labels]);

  const options = {
    fill: false,
    /* responsive: true, */
    /* scales: {
      y: {
        min: 0,
        max: 100,
      },
    }, */
  };

  console.log(lines.map(e => e.counts))


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

  /* const info = useMemo(
    function () {
      return {
        labels,
        datasets: [
          {
      
            label: lines[0]?.path,
            data: lines[0]?.counts,
            transition: 0.1,
            tension: 0.1,
            borderColor: "FF5733",
            borderRadius: "30px",
            pointBackgroundColor: "FF5733",
            borderWidth: 0.9,
          }
        ],
      };
    },
    [labels]
  ); */

  return (
    <div className={style.container}>
      <div>
        <Line datasetIdKey="id" data={info} options={options} />
      </div>
    </div>
  );
}

