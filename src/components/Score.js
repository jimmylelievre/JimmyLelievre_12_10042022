import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Score = ({ userScore }) => {
  const scoreValue = userScore * 100;

  const data = [
    { name: "Done", value: scoreValue },
    { name: "Left", value: 100 - scoreValue },
  ];
  const filling = [{ name: "Filling", value: 1 }];
  const colors = ["red", "#fbfbfb"];

  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="60%"
            outerRadius="70%"
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={450}
            cy="55%"
            opacity="100"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Pie
            cy="55%"
            data={filling}
            dataKey="value"
            nameKey="name"
            outerRadius="60%"
            fill="white"
          />
          <text
            fontSize="15px"
            x="20%"
            y="20%"
            textAnchor="middle"
            fill="black"
          >
            Score{" "}
          </text>

          <text className="score-title-value" x="40%" y="50%">
            {scoreValue + "%"}
          </text>
          <text className="score-title" x="37%" y="60%">
            {"de votre"}
          </text>
          <text className="score-title" x="37%" y="70%">
            {"objectif"}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;
