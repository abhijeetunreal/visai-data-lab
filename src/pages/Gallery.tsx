
import React, { useState } from 'react';
import Header from '@/components/Header';
import ChartCard from '@/components/ChartCard';
import { chartTypes, ChartType } from '@/data/chart-types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedChart, setSelectedChart] = useState<ChartType | null>(null);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Visualization Gallery</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Explore a collection of interactive charts. Click on a card to see a larger, more detailed version.
          </p>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {chartTypes.map((chart, index) => (
            <div
              key={chart.id}
              className="cursor-pointer"
              onClick={() => setSelectedChart(chart)}
            >
              <ChartCard 
                chart={chart} 
                style={{ animationDelay: `${index * 150 + 200}ms` }}
                className="animate-fade-in-up"
              />
            </div>
          ))}
        </div>
      </main>
      <Dialog open={!!selectedChart} onOpenChange={(isOpen) => !isOpen && setSelectedChart(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[80vh] flex flex-col p-8">
          {selectedChart && (
            <>
              <DialogHeader className="pb-4">
                <DialogTitle className="text-3xl font-bold">{selectedChart.name}</DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground pt-2">
                  {selectedChart.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex-grow">
                <selectedChart.component />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
