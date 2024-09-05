import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register required components in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
function Statistics() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        label: '2024',
        data: [4000, 6000, 8000, 5000, 7000, 6000],
        borderColor: '#E40D31',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', 
        pointBackgroundColor: '#ffffff', 
        fill: true, 
        tension: 0.4, // 
      },
      {
        label: '2023',
        data: [3000, 4000, 5000, 3000, 6000, 4000],
        borderColor: '#ffffff',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: '#E40D31',
        fill: true,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true, // Round point icons in the legend
          color: '#ffffff', // Legend text color
        },
      },
      title: {
        display: true,
        text: '',
        color: '#ffffff', // Title color
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // X-axis grid color
        },
        ticks: {
          color: '#ffffff', // X-axis text color
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Y-axis grid color
        },
        ticks: {
          color: '#ffffff', // Y-axis text color
        },
      },
    },
  };
  return <Line data={data} options={options} />
}
export default Statistics;
