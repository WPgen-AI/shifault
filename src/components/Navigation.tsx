import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg shadow-soft"></div>
            <h1 className="text-xl font-bold text-foreground">NoCode Builder</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};