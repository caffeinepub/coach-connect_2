import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          <span className="text-xl font-bold tracking-tight">Coach Connect</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </button>
          <Button onClick={() => scrollToSection('contact')} size="sm">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Testimonials
            </button>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
