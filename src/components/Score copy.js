import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Score = ({ userScore }) => {
  return (
    <div style={{ width: 258, height: 258 }}>
      <Doughnut
        data={{
          datasets: [
            {
              data: [userScore.todayScore * 100, 100 - userScore.todayScore],
              backgroundColor: ["#E60000", "white"],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Score",
              align: "start",
            },
          },
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default Score;
