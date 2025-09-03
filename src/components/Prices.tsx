"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, CreditCard } from "lucide-react";
// import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { SectionBadge } from "@/components/SectionBadge";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "STARTER",
    price: "29",
    yearlyPrice: "23",
    period: "per month",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "48-hour support response",
      "Community access",
      "Email support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "#",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response",
      "Priority support",
      "Team collaboration",
      "API access",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "#",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "#",
    isPopular: false,
  },
];

export const Prices = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const isMobile = useIsMobile();
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section className="py-20 bg-muted/30 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="text-center space-y-4 mb-12">
          <SectionBadge icon={<CreditCard className="w-4 h-4" />}>
            Pricing Plans
          </SectionBadge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-10">
          <span className="text-sm font-medium text-muted-foreground">Monthly</span>
          <Label className="relative inline-flex items-center cursor-pointer">
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
          <span className="text-sm font-medium">
            Annual <span className="text-primary font-semibold">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={
                !isMobile
                  ? {
                      y: plan.isPopular ? -20 : 0,
                      opacity: 1,
                      x: index === 2 ? -30 : index === 0 ? 30 : 0,
                      scale: index === 0 || index === 2 ? 0.94 : 1.0,
                    }
                  : { y: 0, opacity: 1 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.4,
                opacity: { duration: 0.5 },
              }}
               className={cn(
                 "rounded-2xl border p-6 bg-card text-center relative",
                 plan.isPopular ? "border-primary border-2 shadow-glow" : "border-border",
                 plan.isPopular && "gradient-primary",
                 "flex flex-col",
                !plan.isPopular && "mt-5",
                index === 0 || index === 2
                  ? "z-0 transform translate-x-0 translate-y-0"
                  : "z-10",
                index === 0 && "origin-right",
                index === 2 && "origin-left"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
                  <Star className="text-primary-foreground h-4 w-4 fill-current" />
                  <span className="text-primary-foreground ml-1 font-semibold text-sm">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="flex-1 flex flex-col">
                 <p className={cn(
                   "text-base font-semibold mb-6",
                   plan.isPopular ? "text-primary-foreground/90" : "text-muted-foreground"
                 )}>
                   {plan.name}
                 </p>
                
                 <div className="mb-6 flex items-center justify-center gap-x-2">
                   <span className={cn(
                     "text-5xl font-bold tracking-tight",
                     plan.isPopular ? "text-primary-foreground" : "text-foreground"
                   )}>
                     ${isMonthly ? plan.price : plan.yearlyPrice}
                   </span>
                   <span className={cn(
                     "text-sm font-semibold leading-6 tracking-wide",
                     plan.isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
                   )}>
                     / {plan.period}
                   </span>
                </div>

                 <p className={cn(
                   "text-xs leading-5 mb-6",
                   plan.isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
                 )}>
                   {isMonthly ? "billed monthly" : "billed annually"}
                 </p>

                <ul className="mb-6 gap-3 flex flex-col text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                       <span className={cn(
                         "text-sm",
                         plan.isPopular ? "text-primary-foreground" : "text-foreground"
                       )}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-6 border-border" />

                <a
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: plan.isPopular ? "default" : "outline",
                    }),
                    "group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tight mb-4",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1"
                  )}
                >
                  {plan.buttonText}
                </a>
                
                 <p className={cn(
                   "text-xs leading-5",
                   plan.isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
                 )}>
                   {plan.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};