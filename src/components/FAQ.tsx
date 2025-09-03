import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is a no-code website builder?",
      answer: "A no-code website builder is a platform that allows you to create websites without writing any code. You can design, customize, and publish websites using a visual drag-and-drop interface."
    },
    {
      question: "Do I need technical knowledge to use this platform?",
      answer: "No technical knowledge is required! Our platform is designed to be user-friendly for everyone, from complete beginners to experienced designers. If you can use a computer, you can build a website."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes, you can connect your own custom domain name to any website you build on our platform. We also provide free subdomains if you prefer to start without purchasing a domain."
    },
    {
      question: "Are the websites mobile-responsive?",
      answer: "Absolutely! All websites created with our platform are automatically optimized for mobile devices, tablets, and desktops. Your site will look great on any screen size."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer comprehensive support including detailed documentation, video tutorials, community forums, and direct customer support. Premium plan users get priority support with faster response times."
    },
    {
      question: "Can I export my website?",
      answer: "Yes, you can export your website's code if you need to host it elsewhere or make advanced customizations. This gives you full ownership and control of your website."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! You can start with our free plan which includes all basic features. There's no time limit on the free plan, and you can upgrade to a paid plan anytime you need additional features."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <button className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow transition-smooth hover-lift">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};