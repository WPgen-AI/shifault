import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      title: "Drag & Drop Builder",
      description: "Intuitive visual builder that lets you create stunning websites by simply dragging and dropping elements.",
      icon: "🎨"
    },
    {
      title: "Responsive Design",
      description: "All websites are automatically optimized for desktop, tablet, and mobile devices.",
      icon: "📱"
    },
    {
      title: "Custom Templates",
      description: "Choose from hundreds of professionally designed templates or start from scratch.",
      icon: "🎯"
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO tools to help your website rank higher in search results.",
      icon: "🚀"
    },
    {
      title: "Fast Loading",
      description: "Optimized code and CDN delivery ensures your website loads lightning fast.",
      icon: "⚡"
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team.",
      icon: "🛟"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, customize, and grow your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-glow transition-smooth hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-heading font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};