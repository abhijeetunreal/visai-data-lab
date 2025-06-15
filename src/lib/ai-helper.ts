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
  'doughnut-chart': {
    heading: 'Creating Doughnut Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Doughnut charts are similar to pie charts but with the center cut out. They are great for showing proportions of a whole while allowing space in the middle for additional information, like a total value.',
      },
      {
        title: 'Data Structure Tip',
        content: "The data structure is identical to a pie chart's. You'll need labels for each segment and a dataset with the corresponding values. Chart.js makes it easy to specify background colors for each segment.",
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: 'Use the `cutout` property in the chart options to control the size of the center hole. A larger cutout can make the chart feel lighter and more modern. Avoid using too many segments to keep it readable.',
      },
    ],
  },
  'polar-area-chart': {
    heading: 'Visualizing with Polar Area Charts in Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Polar area charts are similar to pie charts, but each segment has the same angle – the radius of the segment differs depending on the value. This makes them useful for comparing values that are not part of a whole.',
      },
      {
        title: 'Data Structure Tip',
        content: 'Like a pie chart, you provide labels and a dataset with values. The main difference is in the visualization, which Chart.js handles automatically when you specify the chart type as `polarArea`.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(255, 205, 86, 0.5)',
      'rgba(201, 203, 207, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)'
    ]
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: 'Polar area charts are visually engaging. Use a transparent background color for the segments to create an overlapping effect, which can be aesthetically pleasing. Ensure the scale starts at zero for accurate representation.',
      },
    ],
  },
  'radar-chart': {
    heading: 'Building Radar Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Radar charts (or spider charts) are a way of showing multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.',
      },
      {
        title: 'Data Structure Tip',
        content: 'You will have labels for each axis, and then one or more datasets. Each dataset represents an entity being compared, with values corresponding to each axis label.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['Strength', 'Agility', 'Intellect', 'Stamina', 'Charisma'],
  datasets: [{
    label: 'Hero',
    data: [65, 59, 90, 81, 56],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
  }, {
    label: 'Villain',
    data: [28, 48, 40, 19, 96],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: "Radar charts are great for comparing multiple entities across several metrics. Don't overcrowd the chart with too many datasets or variables, as it can become hard to read. Use distinct colors for each dataset.",
      },
    ],
  },
  'scatter-chart': {
    heading: 'Implementing Scatter Charts in Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Scatter charts are used to plot data points on a horizontal and a vertical axis in the attempt to show how much one variable is affected by another. Each point has an x and y value.',
      },
      {
        title: 'Data Structure Tip',
        content: 'The dataset for a scatter chart is an array of objects, where each object has `x` and `y` properties. This allows for plotting individual points on the graph.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  datasets: [{
    label: 'Test Scores vs. Study Hours',
    data: [{x: 1, y: 65}, {x: 2, y: 75}, {x: 3, y: 80}, {x: 3.5, y: 88}, {x: 5, y: 95}],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: 'Use a clear and descriptive label for each axis. Tooltips are very important on scatter plots to show the exact coordinates of a point on hover. Chart.js options allow for extensive customization of axes and tooltips.',
      },
    ],
  },
  'bubble-chart': {
    heading: 'Creating Bubble Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'A bubble chart is a variation of a scatter chart in which the data points are replaced with bubbles, and an additional dimension of the data is represented in the size of the bubbles.',
      },
      {
        title: 'Data Structure Tip',
        content: 'The data structure is similar to a scatter chart, but each data point object also includes an `r` property for the radius of the bubble.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  datasets: [{
    label: 'Products',
    data: [
      {x: 20, y: 30, r: 15}, // {sales, profit, market share}
      {x: 40, y: 10, r: 10},
      {x: 30, y: 25, r: 25},
      {x: 15, y: 35, r: 12}
    ],
    backgroundColor: 'rgba(255, 99, 132, 0.5)'
  }]
};`,
        isCode: true,
      },
      {
        title: 'Design Best Practice',
        content: 'Bubble charts can represent three dimensions of data, making them quite powerful. Make sure the bubble size scaling is meaningful and clearly explained in a legend or tooltip. Avoid overlapping bubbles if possible for clarity.',
      },
    ],
  },
  'area-chart': {
    heading: 'Implementing Area Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Area charts are like line charts but with the area below the line filled in. They are useful for visualizing quantitative data and showing volume or magnitude over a continuous dimension.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    label: 'Website Traffic',
    data: [65, 59, 80, 81, 56],
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    tension: 0.1
  }]
};`,
        isCode: true,
      },
    ],
  },
  'stacked-bar-chart': {
    heading: 'Creating Stacked Bar Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Stacked bar charts are used to compare parts of a whole. Each bar represents a total, and segments within the bar represent different categories or parts of that total.',
      },
      {
        title: 'Data Structure Tip',
        content: 'In Chart.js, you enable stacking on the x and y axes in the chart options. Each dataset will then be stacked on top of the previous one.',
      },
      {
        title: 'Example Configuration for Chart.js',
        content: `const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true
    }
  }
};`,
        isCode: true,
      },
    ],
  },
  'grouped-bar-chart': {
    heading: 'Building Grouped Bar Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Grouped bar charts display more than one data series in clustered columns. Each data series shares the same axis labels, so vertical bars are grouped by category.',
      },
      {
        title: 'Data Structure Tip',
        content: 'For a grouped bar chart in Chart.js, you will have a single set of labels and multiple datasets. Each dataset object represents a group of bars.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['2022', '2023', '2024'],
  datasets: [{
    label: 'Product A',
    data: [120, 150, 180],
    backgroundColor: 'rgba(132, 132, 255, 0.5)',
  }, {
    label: 'Product B',
    data: [110, 130, 160],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
  }]
};`,
        isCode: true,
      },
    ],
  },
  'histogram': {
    heading: 'Creating Histograms with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'A histogram is used to show the distribution of a dataset. It groups numbers into ranges and the height of the bar shows how many fall in that range. For a true histogram, set `barPercentage` and `categoryPercentage` to 1 in the options to remove gaps.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['0-10', '10-20', '20-30', '30-40', '40-50'],
  datasets: [{
    label: 'Data Distribution',
    data: [30, 80, 45, 60, 20],
    backgroundColor: 'rgba(132, 132, 255, 0.6)',
  }]
};`,
        isCode: true,
      },
    ],
  },
  'density-plot': {
    heading: 'Implementing Density Plots with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'A density plot is a smoothed, continuous version of a histogram. It can be created using an area chart with a curved line (`tension` > 0) to show the probability density of a continuous variable.',
      },
      {
        title: 'Example Data for Chart.js',
        content: `const data = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  datasets: [{
    label: 'Data Density',
    data: [2, 5, 8, 6, 4, 3, 5, 7, 6, 3],
    fill: true,
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4
  }]
};`,
        isCode: true,
      },
    ],
  },
  'stream-graph': {
    heading: 'Building Stream Graphs with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Stream graphs are a variation of stacked area charts that displays changes in data over time for different categories. They are best for high-volume datasets to discover trends and patterns. This typically requires a plugin for Chart.js.',
      },
      {
        title: 'Note on Implementation',
        content: 'Chart.js does not natively support stream graphs. You would need a plugin or use a different library like D3.js that has more direct support for this chart type. The visual is similar to a stacked area chart with a `silhouette` offset.',
      },
    ],
  },
  'funnel-chart': {
    heading: 'Creating Funnel Charts with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Funnel charts are often used to represent stages in a sales process and show the amount of potential revenue for each stage. They can be created using a dedicated plugin for Chart.js.',
      },
      {
        title: 'Note on Implementation',
        content: 'A funnel chart is not a standard chart type in Chart.js. A popular plugin to add this functionality is `chartjs-plugin-funnel`.',
        isCode: true,
      },
    ],
  },
  'treemap': {
    heading: 'Implementing Treemaps with Chart.js',
    sections: [
      {
        title: 'Core Concept',
        content: 'Treemaps are ideal for displaying large amounts of hierarchical data. The space in a treemap is divided into rectangles that are sized and ordered by a quantitative variable.',
      },
      {
        title: 'Note on Implementation',
        content: 'Chart.js does not natively support treemaps. You would need a plugin like `chartjs-chart-treemap` to add this capability. The plugin handles the complex layout calculations.',
        isCode: true,
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
