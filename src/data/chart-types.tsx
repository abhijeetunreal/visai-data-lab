import { BarChart, LineChart, PieChart, Donut, Radar, Shapes, ChartScatter, AreaChart, BarChart4, BarChart3, Activity, Layers, Filter, LayoutGrid, Combine, Target, TrendingUp, ListChecks } from 'lucide-react';
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
  AreaChart as RechartsAreaChart,
  Area,
  FunnelChart,
  Funnel,
  Treemap,
  ComposedChart,
  Legend,
  RadialBarChart,
  RadialBar,
} from 'recharts';

export interface ChartType {
  id: string;
  name: string;
  description: string;
  Icon: React.ElementType;
  component: React.ComponentType;
  category: string;
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

const SampleAreaChart = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
          </linearGradient>
        </defs>
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
        <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorValue)" />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

const SampleStackedBarChart = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
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
        <Bar dataKey="pv" stackId="a" fill="#8884d8" radius={[0, 0, 0, 0]} />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

const SampleGroupedBarChart = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
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
        <Bar dataKey="pv" fill="#8884d8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="uv" fill="#82ca9d" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

const SampleHistogram = () => {
  const data = [
    { range: '0-10', value: 30 },
    { range: '10-20', value: 80 },
    { range: '20-30', value: 45 },
    { range: '30-40', value: 60 },
    { range: '40-50', value: 20 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} barGap={0} barCategoryGap={0} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Bar dataKey="value" fill="hsl(var(--primary))" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

const SampleDensityPlot = () => {
  const data = [
    { x: 0, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 5 }, { x: 3, y: 4 }, { x: 4, y: 2 },
    { x: 5, y: 6 }, { x: 6, y: 8 }, { x: 7, y: 5 }, { x: 8, y: 3 }, { x: 9, y: 1 }, { x: 10, y: 0 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <defs>
          <linearGradient id="colorDensity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="x" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Area type="natural" dataKey="y" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorDensity)" />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

const SampleStreamGraph = () => {
  const data = [
    { month: 'Jan', a: 20, b: 30, c: 50 },
    { month: 'Feb', a: 25, b: 35, c: 40 },
    { month: 'Mar', a: 30, b: 20, c: 50 },
    { month: 'Apr', a: 35, b: 45, c: 20 },
    { month: 'May', a: 40, b: 25, c: 35 },
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart data={data} stackOffset="silhouette" margin={{ top: 10, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Area type="monotone" dataKey="a" stackId="1" stroke={COLORS[0]} fill={COLORS[0]} />
        <Area type="monotone" dataKey="b" stackId="1" stroke={COLORS[1]} fill={COLORS[1]} />
        <Area type="monotone" dataKey="c" stackId="1" stroke={COLORS[2]} fill={COLORS[2]} />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

const SampleFunnelChart = () => {
  const data = [
    { value: 100, name: 'Impressions', fill: '#8884d8' },
    { value: 80, name: 'Clicks', fill: '#83a6ed' },
    { value: 50, name: 'Visits', fill: '#8dd1e1' },
    { value: 40, name: 'Inquiries', fill: '#82ca9d' },
    { value: 26, name: 'Orders', fill: '#a4de6c' },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Funnel dataKey="value" data={data} isAnimationActive>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
};

const SampleTreemap = () => {
  const data = [
    { name: 'Electronics', size: 40, children: [{ name: 'Phones', size: 20 }, { name: 'Laptops', size: 20 }] },
    { name: 'Clothing', size: 30, children: [{ name: 'Shirts', size: 15 }, { name: 'Pants', size: 10 }, { name: 'Shoes', size: 5 }] },
    { name: 'Books', size: 30 },
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
  
  const CustomContent = (props: any) => {
    const { depth, x, y, width, height, index, name } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: COLORS[index % COLORS.length],
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}
        >
          {name}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
        content={<CustomContent />}
      />
    </ResponsiveContainer>
  );
};

const SampleComposedChart = () => {
  const data = [
    { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
    { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
    { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
    { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
    { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Legend wrapperStyle={{ fontSize: '12px' }} />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const SampleStackedAreaChart = () => {
  const data = [
    { month: 'Jan', a: 20, b: 30, c: 50 },
    { month: 'Feb', a: 25, b: 35, c: 40 },
    { month: 'Mar', a: 30, b: 20, c: 50 },
    { month: 'Apr', a: 35, b: 45, c: 20 },
    { month: 'May', a: 40, b: 25, c: 35 },
  ];
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Area type="monotone" dataKey="a" stackId="1" stroke={COLORS[0]} fill={COLORS[0]} />
        <Area type="monotone" dataKey="b" stackId="1" stroke={COLORS[1]} fill={COLORS[1]} />
        <Area type="monotone" dataKey="c" stackId="1" stroke={COLORS[2]} fill={COLORS[2]} />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

const SampleBarChartWithNegativeValues = () => {
  const data = [
    { name: 'Page A', uv: 4000 }, { name: 'Page B', uv: -3000 },
    { name: 'Page C', uv: -2000 }, { name: 'Page D', uv: 2780 },
    { name: 'Page E', uv: -1890 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Bar dataKey="uv" fill="hsl(var(--primary))">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.uv > 0 ? '#82ca9d' : '#ff8042'} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

const SampleBiaxialLineChart = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis yAxisId="left" stroke="#8884d8" fontSize={12} />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Legend wrapperStyle={{ fontSize: '12px' }} />
        <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

const SampleRadialBarChart = () => {
  const data = [
    { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
    { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
    { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
    { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
    { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="20%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar background dataKey="uv" />
        <Legend iconSize={10} wrapperStyle={{ fontSize: '12px', top: '10%' }} layout="vertical" verticalAlign="middle" align="right" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

const SampleWaterfallChart = () => {
  const data = [
    { name: 'Revenue', change: 4000 },
    { name: 'COGS', change: -1200 },
    { name: 'Gross Profit' },
    { name: 'Opex', change: -800 },
    { name: 'Net Profit' },
  ];

  let cumulative = 0;
  const processedData = data.map(item => {
    const isTotal = typeof item.change === 'undefined';
    let value = item.change;
    let start = cumulative;

    if (isTotal) {
      value = cumulative;
      start = 0;
    } else {
      cumulative += item.change;
    }
    
    return {
      name: item.name,
      start: value > 0 ? start : cumulative,
      value: Math.abs(value),
      fill: isTotal ? 'hsl(var(--primary))' : value > 0 ? '#82ca9d' : '#ff8042',
      isTotal,
      label: value,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={processedData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
          formatter={(value, name, props) => {
            return [props.payload.label, props.payload.isTotal ? 'Total' : 'Change'];
          }}
        />
        <Bar dataKey="start" stackId="a" fill="transparent" />
        <Bar dataKey="value" stackId="a">
           {processedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

const SampleHeatmap = () => {
  const data = [];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const hours = ['12a', '4a', '8a', '12p', '4p', '8p'];
  for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < hours.length; j++) {
      data.push({
        day: i,
        hour: j,
        value: Math.floor(Math.random() * 100),
      });
    }
  }

  const getColor = (value: number) => {
    if (value > 80) return '#8884d8';
    if (value > 60) return '#82ca9d';
    if (value > 40) return '#ffc658';
    if (value > 20) return '#ff8042';
    return 'hsl(var(--muted))';
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis type="category" dataKey="hour" name="hour" tickFormatter={(tick) => hours[tick]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis type="category" dataKey="day" name="day" tickFormatter={(tick) => days[tick]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
        />
        <Scatter data={data} shape="square" isAnimationActive={false}>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
            ))}
        </Scatter>
      </RechartsScatterChart>
    </ResponsiveContainer>
  );
};

const SampleGanttChart = () => {
  const data = [
    { task: 'Planning', start: 0, end: 4 },
    { task: 'Design', start: 2, end: 6 },
    { task: 'Development', start: 5, end: 12 },
    { task: 'Testing', start: 10, end: 14 },
    { task: 'Deployment', start: 13, end: 15 },
  ];
  
  const processedData = data.map(item => ({
    ...item,
    duration: item.end - item.start,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={processedData} layout="vertical" margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis type="category" dataKey="task" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
        <Tooltip
          cursor={{ fill: 'hsl(var(--accent))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
          }}
          formatter={(value, name, props) => {
            if (name === 'duration') return [`${props.payload.start} - ${props.payload.end}`, 'Timeline'];
            return null;
          }}
        />
        <Bar dataKey="start" stackId="a" fill="transparent" />
        <Bar dataKey="duration" stackId="a" fill="hsl(var(--primary))" radius={[4, 4, 4, 4]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export const chartTypes: ChartType[] = [
  {
    id: 'bar-chart',
    name: 'Column Chart',
    description: 'Presents categorical data with rectangular bars. Ideal for comparing values across categories.',
    Icon: BarChart,
    component: SampleBarChart,
    category: 'Basic Charts & Graphs',
  },
  {
    id: 'line-chart',
    name: 'Line Chart',
    description: 'Displays information as a series of data points connected by lines. Best for showing trends over time.',
    Icon: LineChart,
    component: SampleLineChart,
    category: 'Basic Charts & Graphs',
  },
  {
    id: 'pie-chart',
    name: 'Pie Chart',
    description: 'A circular graphic divided into slices to illustrate numerical proportion. Use for showing parts of a whole.',
    Icon: PieChart,
    component: SamplePieChart,
    category: 'Basic Charts & Graphs',
  },
  {
    id: 'doughnut-chart',
    name: 'Doughnut Chart',
    description: 'Similar to a pie chart, but with the center cut out. Useful for displaying proportions with a space for a central label.',
    Icon: Donut,
    component: SampleDoughnutChart,
    category: 'Basic Charts & Graphs',
  },
  {
    id: 'polar-area-chart',
    name: 'Polar Area Chart',
    description: 'A circular chart where each category has equal angular slices but different radii based on value.',
    Icon: Radar,
    component: SamplePolarAreaChart,
    category: 'Multivariate Visualization',
  },
  {
    id: 'radar-chart',
    name: 'Radar Chart',
    description: 'Displays multivariate data on axes starting from the same point. Also known as a spider or web chart.',
    Icon: Radar,
    component: SampleRadarChart,
    category: 'Comparative/Relational Charts',
  },
  {
    id: 'scatter-chart',
    name: 'Scatter Chart',
    description: 'Shows the relationship between two numerical variables by plotting points on a 2D plane.',
    Icon: ChartScatter,
    component: SampleScatterChart,
    category: 'Basic Charts & Graphs',
  },
  {
    id: 'bubble-chart',
    name: 'Bubble Chart',
    description: 'A variation of a scatter chart where a third data dimension is shown by the size of the markers (bubbles).',
    Icon: Shapes,
    component: SampleBubbleChart,
    category: 'Comparative/Relational Charts',
  },
  {
    id: 'area-chart',
    name: 'Area Chart',
    description: 'An area chart combines a line chart with shading to show the volume of data over time or across categories.',
    Icon: AreaChart,
    component: SampleAreaChart,
    category: 'Basic Charts & Graphs',
  },
  {
    id: 'stacked-bar-chart',
    name: 'Stacked Bar Chart',
    description: 'A bar chart that stacks multiple data series on top of each other. Good for part-to-whole comparisons.',
    Icon: BarChart4,
    component: SampleStackedBarChart,
    category: 'Comparative/Relational Charts',
  },
  {
    id: 'grouped-bar-chart',
    name: 'Grouped Bar Chart',
    description: 'Compares multiple categories across the same set of variables. Bars are grouped together.',
    Icon: BarChart3,
    component: SampleGroupedBarChart,
    category: 'Comparative/Relational Charts',
  },
  {
    id: 'histogram',
    name: 'Histogram',
    description: 'A graphical representation of the distribution of numerical data. An estimate of the probability distribution.',
    Icon: BarChart,
    component: SampleHistogram,
    category: 'Distribution Visualization',
  },
  {
    id: 'density-plot',
    name: 'Density Plot',
    description: 'Visualizes the distribution of data over a continuous interval or time period. It is a smoothed version of a histogram.',
    Icon: Activity,
    component: SampleDensityPlot,
    category: 'Distribution Visualization',
  },
  {
    id: 'stream-graph',
    name: 'Stream Graph',
    description: 'A type of stacked area graph which is displaced around a central axis, resulting in a flowing, organic shape.',
    Icon: Layers,
    component: SampleStreamGraph,
    category: 'Trend/Time Series Visualization',
  },
  {
    id: 'funnel-chart',
    name: 'Funnel Chart',
    description: 'Used to visualize the progressive reduction of data as it passes from one phase to another.',
    Icon: Filter,
    component: SampleFunnelChart,
    category: 'Specialized / Domain-Specific',
  },
  {
    id: 'treemap',
    name: 'Treemap',
    description: 'A method for displaying hierarchical data using nested rectangles. Ideal for showing part-to-whole relationships.',
    Icon: LayoutGrid,
    component: SampleTreemap,
    category: 'Hierarchical Data Visualization',
  },
  {
    id: 'composed-chart',
    name: 'Composed Chart',
    description: 'A chart that combines multiple chart types, like bar, line, and area, on the same plot.',
    Icon: Combine,
    component: SampleComposedChart,
    category: 'Hybrid/Combination Charts',
  },
  {
    id: 'stacked-area-chart',
    name: 'Stacked Area Chart',
    description: 'Shows the trend of the contribution of each value over time. It is like a pie chart changing over time.',
    Icon: Layers,
    component: SampleStackedAreaChart,
    category: 'Trend/Time Series Visualization',
  },
  {
    id: 'bar-chart-negative-values',
    name: 'Bar Chart with Negative Values',
    description: 'A bar chart that can display both positive and negative values, useful for showing profits and losses.',
    Icon: BarChart,
    component: SampleBarChartWithNegativeValues,
    category: 'Basic Charts & Graphs',
  },
  {
    id: 'biaxial-line-chart',
    name: 'Biaxial Line Chart',
    description: 'A line chart with two Y-axes, allowing for comparison of two variables with different scales.',
    Icon: LineChart,
    component: SampleBiaxialLineChart,
    category: 'Comparative/Relational Charts',
  },
  {
    id: 'radial-bar-chart',
    name: 'Radial Bar Chart',
    description: 'A bar chart plotted on a polar coordinate system, instead of a cartesian one.',
    Icon: Target,
    component: SampleRadialBarChart,
    category: 'Specialized / Domain-Specific',
  },
  {
    id: 'waterfall-chart',
    name: 'Waterfall Chart',
    description: 'Visualizes the cumulative effect of sequentially introduced positive or negative values.',
    Icon: TrendingUp,
    component: SampleWaterfallChart,
    category: 'Specialized / Domain-Specific',
  },
  {
    id: 'heatmap',
    name: 'Heatmap',
    description: 'A graphical representation of data where values are depicted by color.',
    Icon: LayoutGrid,
    component: SampleHeatmap,
    category: 'Multivariate Visualization',
  },
  {
    id: 'gantt-chart',
    name: 'Gantt Chart',
    description: 'Illustrates a project schedule, showing the start and finish dates of terminal elements and summary elements of a project.',
    Icon: ListChecks,
    component: SampleGanttChart,
    category: 'Trend/Time Series Visualization',
  },
];
