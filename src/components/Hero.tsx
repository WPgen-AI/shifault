"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ShineBorder, TypeWriter } from "@/components/ui/hero-design";
import { Plus } from "lucide-react";

export const Hero = () => {
  const talkAbout = [
    "Modern Web Apps",
    "Business Solutions", 
    "Digital Products",
    "Creative Projects",
    "Digital Innovation",
    "User Experience",
    "Professional Sites",
  ];

  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];


  return (
    <AuroraBackground className="bg-muted/30 dark:bg-transparent">
      <section id="hero" className="relative min-h-[80vh] flex items-center justify-center hero-section w-full">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        <div className="flex flex-col items-center justify-center px-6 text-center relative z-10 container mx-auto">
          {/* Introduction Badge */}
          <div className="mb-6 mt-4 sm:justify-center md:mb-4 md:mt-8">
            <div className="relative flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              Introducing Your Platform.
              <span className="ml-1 flex items-center font-semibold text-foreground">
                Explore <span aria-hidden="true"> →</span>
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto max-w-5xl">
            <div className="relative mx-auto h-full bg-card/50 backdrop-blur-sm border border-border rounded-lg py-12 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">
              {/* Corner Plus Icons */}
              <Plus
                strokeWidth={4}
                className="text-accent-primary absolute -left-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-accent-primary absolute -bottom-5 -left-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-accent-primary absolute -right-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-accent-primary absolute -bottom-5 -right-5 h-10 w-10"
              />
              
              {/* Main Heading */}
              <h1 className="flex flex-col text-center text-5xl font-heading font-bold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl text-foreground">
                <span>
                  Your complete platform for{" "}
                  <span className="text-gradient">Success.</span>
                </span>
              </h1>
              
              {/* Status Indicator */}
              <div className="flex items-center mt-4 justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success-primary"></span>
                </span>
                <p className="text-xs text-success-primary">Available Now</p>
              </div>
            </div>

            {/* Description */}
            <h2 className="mt-8 text-2xl md:text-2xl text-foreground">
              Welcome to the future of web development!{" "}
              <span className="text-gradient font-bold">Build anything </span>
            </h2>

            <p className="text-muted-foreground py-4">
              Expert in creating solutions like{" "}
              <span className="text-gradient font-semibold">
                <TypeWriter strings={talkAbout} />
              </span>.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <ShineBorder
                borderRadius={12}
                borderWidth={2}
                className="border cursor-pointer h-auto w-auto p-2 bg-background/50 backdrop-blur-md"
                color={["hsl(25 95% 53%)", "hsl(15 88% 45%)"]}
              >
                <Button 
                  asChild
                  className="w-full rounded-xl gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 hover:opacity-90 transition-all duration-300 ease-out"
                >
                  <Link to="/login">Get Started Now</Link>
                </Button>
              </ShineBorder>
              
              <Button 
                className="rounded-xl hover:border-[hsl(25_95%_53%)] hover:text-white hover:bg-[hsl(25_85%_65%)] transform-gpu transition-all duration-300 ease-out" 
                variant="outline"
                size="lg"
              >
                Watch Demo
              </Button>
            </div>

            {/* Avatar Circles */}
            <div className="flex justify-center mt-6">
              <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            </div>
          </div>
        </div>

      </section>
    </AuroraBackground>
  );
};