import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="dailyActivityGraph-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
};

const legendText = (value) => {
  let legendTxt = "";
  if (value === "kilogram") {
    legendTxt = "Poids (kg)";
  } else {
    legendTxt = "Calories brûlées (kCal)";
  }
  return <span className="dailyActivityGraph-legend">{legendTxt}</span>;
};

const formatDay = (day) => new Date(day).getDate();

const DailyActivity = ({ userActivity }) => {
  return (
    <div className="dailyAcitity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userActivity}
          margin={{
            top: 20,
            right: 0,
            left: 40,
            bottom: 20,
          }}
          barCategoryGap={54}
          barGap={8}
          barSize={7}
        >
          <CartesianGrid vertical={false} strokeDasharray="2" />
          <XAxis
            tickLine={false}
            dataKey="day"
            stroke="#9B9EAC"
            tickFormatter={formatDay}
          />
          <YAxis
            type="number"
            domain={["dataMin - 100", "dataMax + 100"]}
            hide={true}
            yAxisId="left"
            orientation="left"
          />
          <YAxis
            type="number"
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 1", "dataMax + 1"]}
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={legendText}
            height={100}
            iconSize={8}
            iconType="circle"
            align="right"
            verticalAlign="top"
          />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            radius={[10, 10, 0, 0]}
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
          />
          <text
            className="dailyActivity-title"
            fontSize="15px"
            x={100}
            y={35}
            textAnchor="middle"
            fill="black"
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
