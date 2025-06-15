
import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { category: 'A', range: [20, 80], quartiles: [35, 65] },
    { category: 'B', range: [10, 95], quartiles: [25, 75] },
    { category: 'C', range: [30, 70], quartiles: [40, 60] },
    { category: 'D', range: [5, 85], quartiles: [30, 70] },
];

const BoxPlotExample = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="range" fill="#8884d8" barSize={30} />
                <Bar dataKey="quartiles" fill="#82ca9d" barSize={50} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BoxPlotExample;
