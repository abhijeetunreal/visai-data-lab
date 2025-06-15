
import React from 'react';
import { ChartArea, Code } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold">
          <ChartArea className="h-6 w-6 text-primary" />
          <span className="font-bold">DataViz</span>
        </a>
        <Button asChild variant="outline" size="sm" className="hidden md:flex">
          <a
            href="https://github.com/lovable-inc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Code className="h-4 w-4" />
            Source
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
