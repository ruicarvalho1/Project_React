import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const loadUsersData = async () => {
      return await axios
        .get("http://localhost:8080/api/ecoponto_movel")
        .then((response) => setChart(response.data.data))
        .catch((err) => console.log(err));
    };

    loadUsersData();
  }, []);

  console.log(chart);

  const data = !chart
    ? null
    : {
        labels: chart.map((x) => x.tipo_eletrodomestico),
        datasets: [
          {
            label: chart.length,
            data: chart.map((x) => x.tamanho_residuos),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <>
      <div>
        <h2>Residuos mais coletados</h2>
      </div>

      <div>
        {data && <Bar data={data} height={600} width={900} options={options} />}
      </div>
    </>
  );
};

export default BarChart;
