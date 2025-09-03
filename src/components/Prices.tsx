import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Prices = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for personal projects and trying out our platform",
      features: [
        "1 Website",
        "Basic Templates",
        "Mobile Responsive",
        "SSL Certificate",
        "Community Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19",
      period: "/month",
      description: "Best for freelancers and small businesses",
      features: [
        "5 Websites",
        "Premium Templates",
        "Custom Domain",
        "Advanced SEO Tools",
        "Priority Support",
        "Analytics Dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "/month",
      description: "For agencies and large organizations",
      features: [
        "Unlimited Websites",
        "White-label Solution",
        "API Access",
        "Custom Integrations",
        "Dedicated Support",
        "Advanced Analytics",
        "Team Collaboration"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-border bg-card hover:shadow-glow transition-smooth ${plan.popular ? 'ring-2 ring-primary scale-105' : 'hover-lift'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-heading font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'gradient-primary text-primary-foreground hover:shadow-glow' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'} transition-smooth`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};