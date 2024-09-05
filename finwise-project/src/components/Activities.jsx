import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Activities() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "2024",
        data: [4000, 6000, 8000, 5000, 7000, 6000],
        backgroundColor: "rgba(255, 255, 255, 0.800)",
        borderColor: "#011C75",
        borderWidth: 1,
      },
      {
        label: "2023",
        data: [3000, 4000, 5000, 3000, 6000, 4000],
        backgroundColor: "rgba(255, 255, 255, 0.400)",
        borderColor: "#011C75",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff", // Legend text color
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "",
        color: "#ffffff", // Title color
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Grid color for X-axis
        },
        ticks: {
          color: "#ffffff", // Label color for X-axis
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Grid color for Y-axis
        },
        ticks: {
          color: "#ffffff", // Label color for Y-axis
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
}
export default Activities;
