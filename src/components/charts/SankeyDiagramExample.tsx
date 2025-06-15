
import React from 'react';
import { ResponsiveContainer, Sankey, Tooltip } from 'recharts';

const data = {
  nodes: [
    { name: 'Source A' },
    { name: 'Source B' },
    { name: 'Source C' },
    { name: 'Destination X' },
    { name: 'Destination Y' },
    { name: 'Destination Z' },
  ],
  links: [
    { source: 0, target: 3, value: 100 },
    { source: 0, target: 4, value: 50 },
    { source: 1, target: 3, value: 70 },
    { source: 1, target: 5, value: 80 },
    { source: 2, target: 4, value: 60 },
    { source: 2, target: 5, value: 40 },
  ],
};

const SankeyDiagramExample = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Sankey
        data={data}
        nodePadding={50}
        margin={{
          left: 100,
          right: 100,
          top: 20,
          bottom: 20,
        }}
        link={{ stroke: '#77c878' }}
      >
        <Tooltip />
      </Sankey>
    </ResponsiveContainer>
  );
};

export default SankeyDiagramExample;
