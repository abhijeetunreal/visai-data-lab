
import React, { useState, useMemo } from 'react';
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
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { AiHelp, getAiImplementationHelp } from '@/lib/ai-helper';
import { ScrollArea } from '@/components/ui/scroll-area';

const Gallery = () => {
  const [selectedChart, setSelectedChart] = useState<ChartType | null>(null);
  const [aiHelp, setAiHelp] = useState<AiHelp | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleGetAiHelp = async () => {
    if (!selectedChart) return;
    setIsAiLoading(true);
    setAiHelp(null);
    try {
      const help = await getAiImplementationHelp(selectedChart.id);
      setAiHelp(help);
    } catch (error) {
      console.error("Failed to get AI help", error);
      // Here you could show an error toast to the user
    } finally {
      setIsAiLoading(false);
    }
  };

  const groupedCharts = useMemo(() => {
    return chartTypes.reduce((acc, chart) => {
      const { category } = chart;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(chart);
      return acc;
    }, {} as Record<string, ChartType[]>);
  }, []);

  const categories = Object.keys(groupedCharts).sort((a, b) => a.localeCompare(b));


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
        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category} className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center">
                <span className="text-primary mr-3 text-2xl">🔹</span>
                {category}
              </h2>
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {groupedCharts[category].map((chart, index) => (
                  <div
                    key={chart.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedChart(chart)}
                  >
                    <ChartCard 
                      chart={chart} 
                      style={{ animationDelay: `${index * 100 + 400}ms` }}
                      className="animate-fade-in-up"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Dialog 
        open={!!selectedChart} 
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedChart(null);
            setAiHelp(null);
          }
        }}
      >
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] flex flex-col p-0">
          <ScrollArea className="h-full w-full">
            {selectedChart && (
              <div className="md:grid md:grid-cols-5 h-full">
                <div className="md:col-span-3 flex flex-col p-8">
                  <DialogHeader className="pb-4">
                    <DialogTitle className="text-3xl font-bold">{selectedChart.name}</DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground pt-2">
                      {selectedChart.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex-grow min-h-[300px] md:min-h-0">
                    <selectedChart.component />
                  </div>
                </div>
                <div className="md:col-span-2 bg-secondary/30 border-t md:border-t-0 md:border-l p-6 flex flex-col md:h-full min-h-0">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    Implementation Assistant
                  </h3>
                  <Button onClick={handleGetAiHelp} disabled={isAiLoading}>
                    {isAiLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Thinking...
                      </>
                    ) : "Ask AI for implementation help"}
                  </Button>
                  
                  <ScrollArea className="flex-grow mt-4 -mr-6 pr-6">
                    {aiHelp && (
                      <div className="space-y-6 animate-fade-in-up">
                        <h4 className="text-2xl font-bold text-primary">{aiHelp.heading}</h4>
                        {aiHelp.sections.map((section, index) => (
                          <div key={index}>
                            <h5 className="font-semibold text-lg mb-2">{section.title}</h5>
                            {section.isCode ? (
                              <pre className="bg-background rounded-md p-4 text-sm overflow-x-auto">
                                <code>{section.content}</code>
                              </pre>
                            ) : (
                              <p className="text-muted-foreground">{section.content}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
