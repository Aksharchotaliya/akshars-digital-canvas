import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Akshar Chotaliya</h3>
            <p className="text-muted-foreground">Tech meets ambition. Business meets purpose.</p>
          </div>

          <div className="flex justify-center items-center space-x-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="h-4 w-4 text-blue-500" />
            </div>
            <div className="flex items-center space-x-1">
              <span>Powered by</span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://ramniklalmasala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Ramniklal Masala
            </a>
            <a
              href="https://tripleaexim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Triple A Exim
            </a>
            <a
              href="mailto:contact@aksharchotaliya.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Akshar Chotaliya. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              "Work in silence, build with purpose, and let your journey speak for itself."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;