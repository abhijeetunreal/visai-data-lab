
import React from 'react';
import { Funnel, FunnelChart, LabelList, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { value: 100, name: 'Website Visits', fill: '#8884d8' },
  { value: 80, name: 'Downloads', fill: '#83a6ed' },
  { value: 50, name: 'Signups', fill: '#8dd1e1' },
  { value: 40, name: 'Subscribed', fill: '#82ca9d' },
  { value: 25, name: 'Purchased', fill: '#a4de6c' },
];

const FunnelChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart>
        <Tooltip />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
};

export default FunnelChartExample;
