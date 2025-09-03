export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <h3 className="text-xl font-bold">NoCode Builder</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Build professional websites without code. Fast, easy, and powerful.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <div className="w-6 h-6 bg-background/20 rounded"></div>
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <div className="w-6 h-6 bg-background/20 rounded"></div>
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <div className="w-6 h-6 bg-background/20 rounded"></div>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Templates</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 NoCode Builder. All rights reserved.
          </p>
          <p className="text-background/60 text-sm mt-4 md:mt-0">
            Made with ❤️ for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};