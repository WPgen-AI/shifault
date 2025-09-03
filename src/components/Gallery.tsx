"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { SectionBadge } from "@/components/SectionBadge";

// Import background images
import galleryBg1 from "@/assets/gallery-bg-1.jpg";
import galleryBg2 from "@/assets/gallery-bg-2.jpg";
import galleryBg3 from "@/assets/gallery-bg-3.jpg";
import galleryBg4 from "@/assets/gallery-bg-4.jpg";
import galleryBg5 from "@/assets/gallery-bg-5.jpg";
import galleryBg6 from "@/assets/gallery-bg-6.jpg";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  category: string;
  image: string;
}

export const Gallery = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const galleryItems: GalleryItem[] = [
    {
      id: "item-1",
      title: "Modern Web Design",
      category: "Web Design",
      summary: "Creating stunning user interfaces with modern design principles and cutting-edge technologies.",
      url: "#",
      image: galleryBg1
    },
    {
      id: "item-2",
      title: "E-commerce Solutions",
      category: "E-commerce",
      summary: "Powerful e-commerce platforms to grow your business in the digital marketplace.",
      url: "#",
      image: galleryBg2
    },
    {
      id: "item-3",
      title: "Mobile App Development",
      category: "Mobile App",
      summary: "User-centered mobile applications for iOS and Android platforms with seamless experiences.",
      url: "#",
      image: galleryBg3
    },
    {
      id: "item-4",
      title: "Brand Identity Design",
      category: "Branding",
      summary: "Professional and consistent corporate identity solutions that reflect your brand values.",
      url: "#",
      image: galleryBg4
    },
    {
      id: "item-5",
      title: "Digital Marketing",
      category: "Marketing",
      summary: "Comprehensive SEO, social media, and digital advertising strategies to accelerate growth.",
      url: "#",
      image: galleryBg5
    },
    {
      id: "item-6",
      title: "UI/UX Design",
      category: "Design",
      summary: "Creative design solutions that prioritize user experience and interface excellence.",
      url: "#",
      image: galleryBg6
    }
  ];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  // Carousel scroll tracking
  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section id="gallery" className="py-20 bg-muted/30 dark:bg-transparent">
      {/* Upper section - normal container width */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="max-w-2xl">
            <SectionBadge icon={<Grid3X3 className="w-4 h-4" />}>
              Our Services
            </SectionBadge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Services Gallery
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our innovative solutions and cutting-edge technologies designed to make a difference in the digital world.
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lower section - full width carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{ 
            breakpoints: { "(max-width: 768px)": { dragFree: true } },
            loop: true
          }}
          className="relative w-full"
        >
          <CarouselContent className="w-full -ml-6">
            {galleryItems.map((item) => (
              <CarouselItem key={item.id} className="pl-6 md:basis-1/3 lg:basis-1/4">
                <div className="group block relative w-full h-[400px]">
                  <Card className="overflow-hidden rounded-xl h-full w-full">
                    <div 
                      className="relative h-full w-full transition-all duration-500 group-hover:h-1/2 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {/* Fade overlay at bottom */}
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/20">
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg font-medium md:text-xl text-foreground mb-2">
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                          {item.title}
                        </a>
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base line-clamp-2 mb-4">
                        {item.summary}
                      </p>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute bottom-4 right-4 gradient-primary text-primary-foreground hover:text-white hover:-rotate-45 hover:shadow-glow hover:scale-105 transition-all duration-500 rounded-full border-0"
                      >
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};