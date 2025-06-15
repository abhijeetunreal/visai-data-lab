
import React from 'react';
import WordCloud from 'react-wordcloud';

const words = [
  { text: 'React', value: 64 },
  { text: 'JavaScript', value: 80 },
  { text: 'TypeScript', value: 55 },
  { text: 'DataViz', value: 40 },
  { text: 'D3', value: 30 },
  { text: 'Recharts', value: 50 },
  { text: 'CSS', value: 45 },
  { text: 'Tailwind', value: 60 },
  { text: 'Vite', value: 25 },
  { text: 'Component', value: 35 },
  { text: 'Props', value: 28 },
  { text: 'State', value: 32 },
];

const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [20, 60] as [number, number],
  padding: 1,
};

const WordCloudExample = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WordCloud words={words} options={options} />
    </div>
  );
};

export default WordCloudExample;

