export const Gallery = () => {
  const galleryItems = [
    {
      title: "E-commerce Store",
      category: "Online Store",
      image: "bg-gradient-to-br from-blue-400 to-purple-600"
    },
    {
      title: "Portfolio Website",
      category: "Creative",
      image: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      title: "Business Landing",
      category: "Corporate",
      image: "bg-gradient-to-br from-purple-400 to-pink-600"
    },
    {
      title: "Restaurant Site",
      category: "Food & Beverage",
      image: "bg-gradient-to-br from-yellow-400 to-red-500"
    },
    {
      title: "Blog Platform",
      category: "Content",
      image: "bg-gradient-to-br from-indigo-400 to-cyan-500"
    },
    {
      title: "Agency Website",
      category: "Professional",
      image: "bg-gradient-to-br from-pink-400 to-red-600"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Website Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired by websites built with our platform. From simple portfolios to complex e-commerce stores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-all duration-300">
                <div className={`aspect-video ${item.image} opacity-90 group-hover:scale-110 transition-transform duration-300`}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium opacity-80">{item.category}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            View All Templates
          </button>
        </div>
      </div>
    </section>
  );
};