

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
    heading: 'Implementing Bar Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Bar charts are excellent for comparing discrete categories. Each bar represents a category, and its length is proportional to the value it represents. Chart.js makes creating responsive and animated bar charts straightforward.',
      },
      {
        title: 'Data Structure Tip',
        content: "For Chart.js, you'll typically structure your data with labels for each category and datasets containing the values. This separation makes it easy to manage complex charts with multiple datasets.",
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['Marketing', 'Sales', 'Engineering', 'HR'],
  datasets: [{
    label: 'Department Budget',
    data: [50000, 80000, 120000, 35000],
    backgroundColor: 'rgba(132, 132, 255, 0.6)',
    borderColor: 'rgba(132, 132, 255, 1)',
    borderWidth: 1
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: 'For clarity, sort the data before passing it to Chart.js. Use the built-in tooltip and legend options to provide context. Chart.js offers extensive customization for colors, fonts, and animations to match your design.',
      },
    ],
  },
  'line-chart': {
    heading: 'Mastering Line Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Line charts are perfect for visualizing trends over a continuous interval, like time. They connect individual data points to show the movement and relationship between them. Chart.js excels at rendering smooth, interactive line charts.',
      },
      {
        title: 'Data Structure Tip',
        content: 'Structure your data with an array of labels for the time interval (x-axis) and a dataset array containing the corresponding values. This structure is efficient and easy to update with new data.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Monthly Active Users',
    data: [1200, 1800, 1600, 2400, 2800],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: "Clearly label your axes using Chart.js's scale configuration. If displaying multiple lines, use distinct `borderColor` properties and enable the legend. The `tension` property can be adjusted to control the curve of the line.",
      },
    ],
  },
  'pie-chart': {
    heading: 'Perfecting Pie Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Pie charts show parts of a whole, representing data as slices of a circle. They are most effective when comparing a few categories. Chart.js provides great tooltips and animations for pie charts out of the box.',
      },
      {
        title: 'Data Structure Tip',
        content: 'Similar to other chart types, you provide labels for each slice and a dataset with the corresponding numerical values. You can also specify an array of background colors for the slices.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [{
    label: 'Device Usage',
    data: [55, 35, 10],
    backgroundColor: [
      'rgba(132, 132, 255, 0.8)',
      'rgba(130, 202, 157, 0.8)',
      'rgba(255, 198, 88, 0.8)'
    ],
    hoverOffset: 4
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: "Limit the number of slices to 5-7 for readability. For smaller segments, consider a bar chart instead. Use Chart.js's options to customize tooltips to show percentages or absolute values.",
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
