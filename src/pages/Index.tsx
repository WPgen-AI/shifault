import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Prices } from "@/components/Prices";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <Prices />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
