
import React from 'react';
import Header from '@/components/Header';
import ChartCard from '@/components/ChartCard';
import { chartTypes } from '@/data/chart-types';

const Gallery = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-16 animate-fade-in-up" style={{ opacity: 0 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Visualization Gallery</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Explore a collection of interactive charts. Hover over them to see details.
          </p>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {chartTypes.map((chart, index) => (
            <ChartCard 
              key={chart.id} 
              chart={chart} 
              style={{ animationDelay: `${index * 150 + 200}ms`, opacity: 0 }}
              className="animate-fade-in-up"
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Gallery;
