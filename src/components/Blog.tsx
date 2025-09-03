import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Blog = () => {
  const blogPosts = [
    {
      title: "10 Essential Design Tips for No-Code Websites",
      description: "Learn the fundamental design principles that will make your no-code website stand out from the competition.",
      author: "Sarah Johnson",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "Design"
    },
    {
      title: "How to Optimize Your Website for Search Engines",
      description: "Complete guide to SEO best practices for no-code websites, from meta tags to site structure.",
      author: "Mike Chen",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      category: "SEO"
    },
    {
      title: "Building an E-commerce Store Without Code",
      description: "Step-by-step tutorial on creating a fully functional online store using our drag-and-drop builder.",
      author: "Emma Davis",
      date: "Mar 10, 2024",
      readTime: "12 min read",
      category: "Tutorial"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest tips, tutorials, and insights from the no-code world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-soft transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.description}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <span className="font-medium">{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            Read All Articles
          </button>
        </div>
      </div>
    </section>
  );
};