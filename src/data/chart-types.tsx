
import FunnelChartExample from "@/components/charts/FunnelChartExample";
import SankeyDiagramExample from "@/components/charts/SankeyDiagramExample";
import DumbbellPlotExample from "@/components/charts/DumbbellPlotExample";
import BoxPlotExample from "@/components/charts/BoxPlotExample";
import WordCloudExample from "@/components/charts/WordCloudExample";
import BarChartExample from "@/components/charts/BarChartExample";
import LineChartExample from "@/components/charts/LineChartExample";
import PieChartExample from "@/components/charts/PieChartExample";

import {
  Filter,
  Waypoints,
  GitCommitHorizontal,
  Box,
  Cloud,
  BarChart4,
  LineChart,
  PieChart as PieChartIcon,
} from 'lucide-react';
import { ChartCandlestick, GitCommit, HelpCircle, GanttChart } from 'lucide-react';

/*
import DoughnutChartExample from "@/components/charts/DoughnutChartExample";
import PolarAreaChartExample from "@/components/charts/PolarAreaChartExample";
import RadarChartExample from "@/components/charts/RadarChartExample";
import ScatterChartExample from "@/components/charts/ScatterChartExample";
import BubbleChartExample from "@/components/charts/BubbleChartExample";
import AreaChartExample from "@/components/charts/AreaChartExample";
import StackedBarChartExample from "@/components/charts/StackedBarChartExample";
import GroupedBarChartExample from "@/components/charts/GroupedBarChartExample";
import HistogramExample from "@/components/charts/HistogramExample";
import DensityPlotExample from "@/components/charts/DensityPlotExample";
import StreamGraphExample from "@/components/charts/StreamGraphExample";
import ComposedChartExample from "@/components/charts/ComposedChartExample";
import StackedAreaChartExample from "@/components/charts/StackedAreaChartExample";
import BarChartNegativeValuesExample from "@/components/charts/BarChartNegativeValuesExample";
import BiAxialLineChartExample from "@/components/charts/BiAxialLineChartExample";
import RadialBarChartExample from "@/components/charts/RadialBarChartExample";
import WaterfallChartExample from "@/components/charts/WaterfallChartExample";
import HeatmapExample from "@/components/charts/HeatmapExample";
import GanttChartExample from "@/components/charts/GanttChartExample";
*/


export interface ChartType {
  id: string;
  name: string;
  description: string;
  category: string;
  component: React.ComponentType;
  Icon: React.ComponentType<{ className?: string }>;
}

export const chartTypes: ChartType[] = [
  {
    id: 'bar-chart',
    name: 'Bar Chart',
    description: 'A standard chart for comparing values across different categories.',
    category: 'Comparative/Relational Charts',
    component: BarChartExample,
    Icon: BarChart4,
  },
  {
    id: 'line-chart',
    name: 'Line Chart',
    description: 'Displays information as a series of data points connected by straight line segments.',
    category: 'Trend/Time Series Visualization',
    component: LineChartExample,
    Icon: LineChart,
  },
  {
    id: 'pie-chart',
    name: 'Pie Chart',
    description: 'A circular statistical graphic, which is divided into slices to illustrate numerical proportion.',
    category: 'Part-to-Whole Visualization',
    component: PieChartExample,
    Icon: PieChartIcon,
  },
  // {
  //   id: 'doughnut-chart',
  //   name: 'Doughnut Chart',
  //   description: 'Doughnut charts are similar to pie charts, but display an empty circle in the center..',
  //   category: 'Part-to-Whole Visualization',
  //   component: DoughnutChartExample,
  // },
  // {
  //   id: 'polar-area-chart',
  //   name: 'Polar Area Chart',
  //   description: 'Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.',
  //   category: 'Comparative/Relational Charts',
  //   component: PolarAreaChartExample,
  // },
  // {
  //   id: 'radar-chart',
  //   name: 'Radar Chart',
  //   description: 'A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.',
  //   category: 'Network & Graph Visualization',
  //   component: RadarChartExample,
  // },
  // {
  //   id: 'scatter-chart',
  //   name: 'Scatter Chart',
  //   description: 'A scatter chart is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data.',
  //   category: 'Comparative/Relational Charts',
  //   component: ScatterChartExample,
  // },
  // {
  //   id: 'bubble-chart',
  //   name: 'Bubble Chart',
  //   description: 'A bubble chart is a type of chart that displays three dimensions of data. Each entity with its triplet (v1, v2, v3) of associated data is plotted as a disk that expresses two of the vi values through the disk\'s xy location and the third through its size.',
  //   category: 'Comparative/Relational Charts',
  //   component: BubbleChartExample,
  // },
  // {
  //   id: 'area-chart',
  //   name: 'Area Chart',
  //   description: 'Area charts are used to represent quantitative data graphically. Area charts are similar to line charts, but the area below the line is filled in.',
  //   category: 'Trend/Time Series Visualization',
  //   component: AreaChartExample,
  // },
  // {
  //   id: 'stacked-bar-chart',
  //   name: 'Stacked Bar Chart',
  //   description: 'A stacked bar chart is a chart that uses bars to show the total, but also breaks the total down into categories.',
  //   category: 'Part-to-Whole Visualization',
  //   component: StackedBarChartExample,
  // },
  // {
  //   id: 'grouped-bar-chart',
  //   name: 'Grouped Bar Chart',
  //   description: 'A grouped bar chart is a chart that uses bars to show the total, but also breaks the total down into categories.',
  //   category: 'Comparative/Relational Charts',
  //   component: GroupedBarChartExample,
  // },
  // {
  //   id: 'histogram',
  //   name: 'Histogram',
  //   description: 'A histogram is a graphical representation of the distribution of numerical data. It is an estimate of the probability distribution of a continuous variable.',
  //   category: 'Distribution Visualization',
  //   component: HistogramExample,
  // },
  // {
  //   id: 'density-plot',
  //   name: 'Density Plot',
  //   description: 'A density plot is a visualization of the distribution of data over a continuous interval or time period. This chart is a variation of a histogram that uses kernel smoothing to plot values, allowing for smoother distributions by smoothing out the noise.',
  //   category: 'Distribution Visualization',
  //   component: DensityPlotExample,
  // },
  // {
  //   id: 'stream-graph',
  //   name: 'Stream Graph',
  //   description: 'A stream graph is a type of data visualization used to display changes in data over time for different categories. It is similar to a stacked area chart, but the data is displaced around a central axis, resulting in a flowing, organic shape.',
  //   category: 'Trend/Time Series Visualization',
  //   component: StreamGraphExample,
  // },
  // {
  //   id: 'composed-chart',
  //   name: 'Composed Chart',
  //   description: 'A composed chart is a chart that combines multiple chart types into one chart.',
  //   category: 'Combination Charts',
  //   component: ComposedChartExample,
  // },
  // {
  //   id: 'stacked-area-chart',
  //   name: 'Stacked Area Chart',
  //   description: 'Stacked area charts are used to display the trend of multiple data series over time. Each data series is represented by an area, and the areas are stacked on top of each other.',
  //   category: 'Trend/Time Series Visualization',
  //   component: StackedAreaChartExample,
  // },
  // {
  //   id: 'bar-chart-negative-values',
  //   name: 'Bar Chart with Negative Values',
  //   description: 'A bar chart that displays both positive and negative values.',
  //   category: 'Comparative/Relational Charts',
  //   component: BarChartNegativeValuesExample,
  // },
  // {
  //   id: 'biaxial-line-chart',
  //   name: 'Biaxial Line Chart',
  //   description: 'A line chart with two y-axes.',
  //   category: 'Trend/Time Series Visualization',
  //   component: BiAxialLineChartExample,
  // },
  // {
  //   id: 'radial-bar-chart',
  //   name: 'Radial Bar Chart',
  //   description: 'A radial bar chart is a bar chart that is plotted on a polar coordinate system.',
  //   category: 'Comparative/Relational Charts',
  //   component: RadialBarChartExample,
  // },
  // {
  //   id: 'waterfall-chart',
  //   name: 'Waterfall Chart',
  //   description: 'A waterfall chart is a type of chart that shows the cumulative effect of sequential positive and negative values.',
  //   category: 'Comparative/Relational Charts',
  //   component: WaterfallChartExample,
  // },
  // {
  //   id: 'heatmap',
  //   name: 'Heatmap',
  //   description: 'A heatmap is a graphical representation of data where the individual values contained in a matrix are represented as colors.',
  //   category: 'Comparative/Relational Charts',
  //   component: HeatmapExample,
  // },
  // {
  //   id: 'gantt-chart',
  //   name: 'Gantt Chart',
  //   description: 'Illustrates a project schedule, showing the start and finish dates of tasks.',
  //   category: 'Trend/Time Series Visualization',
  //   component: GanttChartExample,
  // },
  {
    id: 'funnel-chart',
    name: 'Funnel Chart',
    description: 'Represents stages in a process, like a sales funnel, showing progressive reduction.',
    category: 'Comparative/Relational Charts',
    component: FunnelChartExample,
    Icon: Filter,
  },
  {
    id: 'sankey-diagram',
    name: 'Sankey Diagram',
    description: 'Visualizes flows from one set of values to another, with flow width proportional to quantity.',
    category: 'Network & Graph Visualization',
    component: SankeyDiagramExample,
    Icon: Waypoints,
  },
  {
    id: 'dumbbell-plot',
    name: 'Dumbbell Plot',
    description: 'Compares two data points for different categories, highlighting the difference between them.',
    category: 'Comparative/Relational Charts',
    component: DumbbellPlotExample,
    Icon: GitCommitHorizontal,
  },
  {
    id: 'box-plot',
    name: 'Box Plot',
    description: 'Displays data distribution through quartiles, showing median, spread, and skewness.',
    category: 'Distribution Visualization',
    component: BoxPlotExample,
    Icon: Box,
  },
  {
    id: 'word-cloud',
    name: 'Word Cloud',
    description: 'Visual representation of text data where word size indicates frequency or importance.',
    category: 'Text Data Visualization',
    component: WordCloudExample,
    Icon: Cloud,
  },
];
