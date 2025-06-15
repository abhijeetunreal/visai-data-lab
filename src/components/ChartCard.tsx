
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ChartType } from '@/data/chart-types';

interface ChartCardProps {
  chart: ChartType;
  style?: React.CSSProperties;
  className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ chart, style, className }) => {
  const { name, description, component: ChartComponent, Icon } = chart;
  return (
    <div style={style} className={className}>
      <Card className="h-full flex flex-col bg-secondary/30 border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
          <div className="bg-accent p-3 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col pt-4">
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className="mt-auto -mx-6 -mb-6 rounded-b-lg overflow-hidden h-[200px]">
            <ChartComponent />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartCard;
