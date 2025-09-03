import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg elevation flex items-center justify-center">
              <Wand2 className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-heading font-bold text-foreground">Project Name</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#features" className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300">
              Features
            </a>
            <a href="#gallery" className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300">
              Gallery
            </a>
            <a href="#pricing" className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300">
              Pricing
            </a>
            <a href="#blog" className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300">
              Blog
            </a>
            <a href="#faq" className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300">
              FAQ
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Link to="/login">
              <Button className="gradient-primary text-primary-foreground hover:shadow-glow transition-smooth">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#features" 
                className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#gallery" 
                className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#pricing" 
                className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#blog" 
                className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a 
                href="#faq" 
                className="text-lg text-foreground/90 hover:text-gradient transition-all duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              
              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  className="w-full text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Button>
                <Link to="/login">
                  <Button 
                    className="w-full gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};