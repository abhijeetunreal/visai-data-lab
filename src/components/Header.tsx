
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChartArea, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <ChartArea className="h-6 w-6 text-primary" />
          <span className="font-bold">DataViz</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
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
