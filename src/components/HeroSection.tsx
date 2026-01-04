import { ArrowRight, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real-time collaboration powered by AI</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Write together,{" "}
            <span className="gradient-text">anywhere</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            The most intuitive collaborative document editor. Create, edit, and share documents with your team in real-time. No more version conflicts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/dashboard">
              <Button variant="hero" size="xl">
                Start writing for free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              Watch demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>10k+ teams</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Enterprise security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Preview */}
        <div className="mt-16 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-lifted bg-card">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                  docsync.app/doc/project-roadmap
                </div>
              </div>
            </div>
            
            {/* Editor preview */}
            <div className="p-8 min-h-[300px]">
              <div className="flex items-start gap-6">
                {/* Sidebar */}
                <div className="hidden md:block w-48 space-y-3">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Documents</div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-sm font-medium text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Project Roadmap
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    Meeting Notes
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    Design Specs
                  </div>
                </div>

                {/* Editor content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Q1 Project Roadmap</h2>
                  <p className="text-muted-foreground mb-4">
                    This document outlines our key objectives and milestones for the upcoming quarter...
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-medium text-primary-foreground ring-2 ring-card">A</div>
                      <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-xs font-medium text-accent-foreground ring-2 ring-card">B</div>
                      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-secondary-foreground ring-2 ring-card">C</div>
                    </div>
                    <span className="text-muted-foreground">3 collaborators editing</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
