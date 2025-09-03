"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

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
      title: "Modern Web Tasarımı",
      category: "Web Design",
      summary: "Kullanıcı dostu arayüzler ve etkileyici görseller ile modern web siteleri oluşturuyoruz.",
      url: "#",
      image: "bg-gradient-to-br from-primary to-primary-glow"
    },
    {
      id: "item-2",
      title: "E-ticaret Çözümleri",
      category: "E-commerce",
      summary: "Güçlü e-ticaret platformları ile işletmenizi dijital dünyada büyütün.",
      url: "#",
      image: "bg-gradient-to-br from-accent to-accent-foreground"
    },
    {
      id: "item-3",
      title: "Mobil Uygulama Geliştirme",
      category: "Mobile App",
      summary: "İOS ve Android platformları için kullanıcı odaklı mobil uygulamalar.",
      url: "#",
      image: "bg-gradient-to-br from-secondary to-secondary-foreground"
    },
    {
      id: "item-4",
      title: "Kurumsal Kimlik Tasarımı",
      category: "Branding",
      summary: "Markanız için profesyonel ve tutarlı kurumsal kimlik çözümleri.",
      url: "#",
      image: "bg-gradient-to-br from-muted to-muted-foreground"
    },
    {
      id: "item-5",
      title: "Dijital Pazarlama",
      category: "Marketing",
      summary: "SEO, sosyal medya ve dijital reklam stratejileri ile büyüyün.",
      url: "#",
      image: "bg-gradient-to-br from-primary-glow to-accent"
    },
    {
      id: "item-6",
      title: "UI/UX Tasarım",
      category: "Design",
      summary: "Kullanıcı deneyimini ön planda tutan yaratıcı tasarım çözümleri.",
      url: "#",
      image: "bg-gradient-to-br from-accent to-primary"
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
    <section id="gallery" className="py-20 bg-background">
      {/* Upper section - normal container width */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Hizmetler Galerisi
            </h2>
            <p className="text-xl text-muted-foreground">
              Dijital dünyada fark yaratmak için tasarladığımız yenilikçi çözümler ve teknolojiler.
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
                    {/* Background gradient */}
                    <div className={`relative h-full w-full transition-all duration-500 group-hover:h-1/2 ${item.image}`}>
                      {/* Fade overlay at bottom */}
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg font-medium md:text-xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base line-clamp-2 mb-4">
                        {item.summary}
                      </p>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute bottom-4 right-4 border hover:-rotate-45 transition-all duration-500 rounded-full"
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