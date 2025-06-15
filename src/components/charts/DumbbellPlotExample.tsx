
import React from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
} from 'recharts';

const data = [
  { name: 'Group A', value1: 400, value2: 240 },
  { name: 'Group B', value1: 300, value2: 139 },
  { name: 'Group C', value1: 200, value2: 980 },
  { name: 'Group D', value1: 278, value2: 390 },
  { name: 'Group E', value1: 189, value2: 480 },
];

const DumbbellPlotExample = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Line dataKey="value1" stroke="transparent" activeDot={false} legendType="none" />
        <Scatter name="2024" dataKey="value1" fill="#8884d8" shape="circle" />
        <Scatter name="2025" dataKey="value2" fill="#82ca9d" shape="circle" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default DumbbellPlotExample;
