import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Build Websites with{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              No-Code
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Design and publish professional websites in minutes without writing a single line of code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-hero transition-all duration-500 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              Start Building Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-muted px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by thousands of creators worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-16 h-8 bg-muted rounded"></div>
              <div className="w-16 h-8 bg-muted rounded"></div>
              <div className="w-16 h-8 bg-muted rounded"></div>
              <div className="w-16 h-8 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};