import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="sessionDuration-tooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
const legendLineX = (day) => days[day];

const SessionDuration = ({ userSession }) => {
  return (
    <div className="SessionDuration">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={250}
          height={263}
          data={userSession}
          margin={{
            top: 60,
            bottom: 20,
          }}
        >
          <YAxis hide domain={["dataMin-10", "dataMax+1"]} />
          <XAxis
            className="averageSpeedGraph__legend"
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            stroke="white"
            tick={{ fill: "#ffffff81" }}
            tickSize={0}
            padding={{ left: 10, right: 10 }}
            tickFormatter={legendLineX}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            dot={false}
            type="natural"
            dataKey="sessionLength"
            stroke="rgb(230,230,230)"
            strokeWidth={3}
            activeDot={{ stroke: "white", strokeWidth: 5, r: 3 }}
          />
          <text
            fontSize="15px"
            x={100}
            y={35}
            textAnchor="middle"
            fill="#ffffff81"
          >
            Durée moyenne des
          </text>
          <text
            fontSize="15px"
            x={70}
            y={55}
            textAnchor="middle"
            fill="#ffffff81"
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionDuration;
