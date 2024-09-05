import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);
function ScatterGraph() {
  const data = {
    datasets: [
      {
        label: "Sales vs. Satisfaction", // Chart label
        data: [
          { x: 3000, y: 75 }, // Sales, Satisfaction
          { x: 4000, y: 80 },
          { x: 5000, y: 90 },
          { x: 6000, y: 95 },
          { x: 7000, y: 85 },
          { x: 8000, y: 100 },
          { x: 9000, y: 95 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Point color
        borderColor: "rgba(54, 162, 235, 1)",
        pointRadius: 6, // Size of scatter points
        pointHoverRadius: 8, // Size on hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#ffffff", // White label
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Sales: ${context.raw.x}, Satisfaction: ${context.raw.y}`;
          },
        },
      },
      title: {
        display: true,
        text: "Monthly Sales vs. Customer Satisfaction",
        color: "#ffffff", // White title text
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Monthly Sales (in Peso)",
          color: "#ffffff", // White label for X-axis
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // X-axis grid color
        },
        ticks: {
          color: "#ffffff", // White X-axis labels
        },
      },
      y: {
        title: {
          display: true,
          text: "Customer Satisfaction (%)",
          color: "#ffffff", // White label for Y-axis
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Y-axis grid color
        },
        ticks: {
          color: "#ffffff", // White Y-axis labels
        },
        min: 0,
        max: 100,
      },
    },
  };
  return <Scatter data={data} options={options} />;
}
export default ScatterGraph;
