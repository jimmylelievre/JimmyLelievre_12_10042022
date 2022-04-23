import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const TypesActivity = ({ data, kind }) => {
  console.log("activity data", data);
  if (data.lenght === 0) return null;
  // Format kind
  const titleKind = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const formatKind = (id) => titleKind[kind[id]];

  return (
    <div className="typesActivity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="55%" data={data}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatKind}
            stroke="white"
            axisLine={false}
            tickLine={false}
          />

          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TypesActivity;
