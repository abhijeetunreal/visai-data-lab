
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative container mx-auto flex flex-col items-center justify-center text-center min-h-screen px-4 md:px-6">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-0 -z-10 h-2/3 w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Master the Art of Data Visualization
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mb-8">
          An interactive guide to learning and applying modern data visualization techniques. Explore, learn, and create stunning charts with ease.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#gallery-section" onClick={handleExploreClick}>
              Explore Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://docs.lovable.dev/" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
