import { BarChart, LineChart, PieChart, Donut, Radar, Shapes, ChartScatter } from 'lucide-react';
import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar as RechartsRadar,
  ScatterChart as RechartsScatterChart,
  Scatter,
  ZAxis,
} from 'recharts';

export interface ChartType {
  id: string;
  name: string;
  description: string;
  Icon: React.ElementType;
  component: React.ComponentType;
}

const SampleBarChart = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

const SampleLineChart = () => {
  const data = [
    { name: 'A', uv: 4000 },
    { name: 'B', uv: 3000 },
    { name: 'C', uv: 2000 },
    { name: 'D', uv: 2780 },
    { name: 'E', uv: 1890 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Line type="monotone" dataKey="uv" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: 'hsl(var(--primary))' }} activeDot={{ r: 8 }} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

const SamplePieChart = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

const SampleDoughnutChart = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

const SamplePolarAreaChart = () => {
  const data = [
    { subject: 'Math', A: 120, fullMark: 150 },
    { subject: 'History', A: 65, fullMark: 150 },
    { subject: 'Physics', A: 85, fullMark: 150 },
    { subject: 'English', A: 86, fullMark: 150 },
    { subject: 'Geography', A: 99, fullMark: 150 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
        <RechartsRadar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const SampleRadarChart = () => {
  const data = [
    { subject: 'Eating', A: 120, B: 110, fullMark: 150 },
    { subject: 'Drinking', A: 98, B: 130, fullMark: 150 },
    { subject: 'Sleeping', A: 86, B: 130, fullMark: 150 },
    { subject: 'Designing', A: 99, B: 100, fullMark: 150 },
    { subject: 'Coding', A: 85, B: 90, fullMark: 150 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}/>
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}/>
        <RechartsRadar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <RechartsRadar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const SampleScatterChart = () => {
  const data = [
    { x: 100, y: 200 }, { x: 120, y: 100 },
    { x: 170, y: 300 }, { x: 140, y: 250 },
    { x: 150, y: 400 }, { x: 110, y: 280 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsScatterChart margin={{ top: 20, right: 20, bottom: 20, left: -10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Scatter name="A school" data={data} fill="hsl(var(--primary))" />
      </RechartsScatterChart>
    </ResponsiveContainer>
  );
};

const SampleBubbleChart = () => {
  const data = [
    { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsScatterChart margin={{ top: 20, right: 20, bottom: 20, left: -10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Scatter name="A school" data={data} fill="hsl(var(--primary))" shape="circle" />
      </RechartsScatterChart>
    </ResponsiveContainer>
  );
};

export const chartTypes: ChartType[] = [
  {
    id: 'bar-chart',
    name: 'Bar Chart',
    description: 'Presents categorical data with rectangular bars. Ideal for comparing values across categories.',
    Icon: BarChart,
    component: SampleBarChart,
  },
  {
    id: 'line-chart',
    name: 'Line Chart',
    description: 'Displays information as a series of data points connected by lines. Best for showing trends over time.',
    Icon: LineChart,
    component: SampleLineChart,
  },
  {
    id: 'pie-chart',
    name: 'Pie Chart',
    description: 'A circular graphic divided into slices to illustrate numerical proportion. Use for showing parts of a whole.',
    Icon: PieChart,
    component: SamplePieChart,
  },
  {
    id: 'doughnut-chart',
    name: 'Doughnut Chart',
    description: 'Similar to a pie chart, but with the center cut out. Useful for displaying proportions with a space for a central label.',
    Icon: Donut,
    component: SampleDoughnutChart,
  },
  {
    id: 'polar-area-chart',
    name: 'Polar Area Chart',
    description: 'A circular chart where each category has equal angular slices but different radii based on value.',
    Icon: Radar,
    component: SamplePolarAreaChart,
  },
  {
    id: 'radar-chart',
    name: 'Radar Chart',
    description: 'Displays multivariate data on axes starting from the same point. Also known as a spider or web chart.',
    Icon: Radar,
    component: SampleRadarChart,
  },
  {
    id: 'scatter-chart',
    name: 'Scatter Chart',
    description: 'Shows the relationship between two numerical variables by plotting points on a 2D plane.',
    Icon: ChartScatter,
    component: SampleScatterChart,
  },
  {
    id: 'bubble-chart',
    name: 'Bubble Chart',
    description: 'A variation of a scatter chart where a third data dimension is shown by the size of the markers (bubbles).',
    Icon: Shapes,
    component: SampleBubbleChart,
  },
];
