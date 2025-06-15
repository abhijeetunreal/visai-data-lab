
export interface AiHelp {
  heading: string;
  sections: Array<{
    title: string;
    content: string;
    isCode?: boolean;
  }>;
}

const aiResponses: Record<string, AiHelp> = {
  'bar-chart': {
    heading: 'Implementing Bar Charts Effectively',
    sections: [
      {
        title: 'Core Concept',
        content: 'Bar charts are excellent for comparing discrete categories. Each bar represents a category, and its length is proportional to the value it represents. Use vertical bars for chronological data and horizontal bars when category labels are long.',
      },
      {
        title: 'Data Structure Tip',
        content: 'Your data should be an array of objects. Each object needs a key for the category name (x-axis) and another for its value (y-axis).',
      },
      {
        title: 'Example Data for Recharts',
        content: `const data = [
  { name: 'Marketing', budget: 50000 },
  { name: 'Sales', budget: 80000 },
  { name: 'Engineering', budget: 120000 },
  { name: 'HR', budget: 35000 },
];`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: 'For clarity, sort the bars in a meaningful order (e.g., ascending or descending). Use color to highlight specific data points, but avoid using too many colors which can be distracting.',
      },
    ],
  },
  'line-chart': {
    heading: 'Mastering Line Charts',
    sections: [
      {
        title: 'Core Concept',
        content: 'Line charts are perfect for visualizing trends over a continuous interval, like time. They connect individual data points to show the movement and relationship between them.',
      },
      {
        title: 'Data Structure Tip',
        content: 'Structure your data as an array of objects. Each object should represent a point in time, with keys for the time interval (x-axis) and the value at that point (y-axis).',
      },
      {
        title: 'Example Data for Recharts',
        content: `const data = [
  { month: 'Jan', users: 1200 },
  { month: 'Feb', users: 1800 },
  { month: 'Mar', users: 1600 },
  { month: 'Apr', users: 2400 },
  { month: 'May', users: 2800 },
];`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: 'Clearly label your axes. If displaying multiple lines, use a legend and distinct colors/styles. Avoid overly steep lines, as they can distort the perception of change.',
      },
    ],
  },
  'pie-chart': {
    heading: 'Perfecting Pie Charts',
    sections: [
      {
        title: 'Core Concept',
        content: 'Pie charts show parts of a whole, representing data as slices of a circle. They are most effective when comparing a few categories that sum up to 100%.',
      },
      {
        title: 'Data Structure Tip',
        content: 'Use an array of objects, where each object has a key for the category name and another for its numerical value. The library will calculate the percentage for each slice.',
      },
      {
        title: 'Example Data for Recharts',
        content: `const data = [
  { name: 'Desktop', value: 55 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 10 },
];`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: "Limit the number of slices to 5-7 for readability. If you have many small categories, group them into an 'Other' slice. Ensure slice colors are distinct and accessible.",
      },
    ],
  },
};

export const getAiImplementationHelp = async (chartId: string): Promise<AiHelp> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (aiResponses[chartId]) {
    return aiResponses[chartId];
  }
  
  throw new Error('AI help not available for this chart type.');
};
