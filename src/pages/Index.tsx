
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import React from 'react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
