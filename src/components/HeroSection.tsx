import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
const heroImage = "/lovable-uploads/3209711c-5cbf-48f0-8645-b425aec20413.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm{' '}
              <span className="text-primary">Akshar Chotaliya</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
              Tech meets ambition. Business meets purpose.
            </p>
            <div className="text-lg text-muted-foreground mb-8 max-w-xl">
              <p>
                Tech enthusiast with a business mindset, building brands and ideas for the future.
                Passionate about creating solutions that make a difference.
              </p>
            </div>
            
            <div className="group">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('#projects')}
                  className="font-medium"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                  className="font-medium"
                >
                  Connect With Me
                </Button>
              </div>
              
              {/* Animated underline */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="w-16 h-0.5 bg-primary rounded-full transform scale-x-0 animate-[scale-x-100_0.8s_ease-out_0.5s_forwards] group-hover:scale-x-125 transition-transform duration-300 origin-left lg:origin-left origin-center"></div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="w-[420px] h-[420px] lg:w-[500px] lg:h-[500px]">
                <img
                  src={heroImage}
                  alt="Akshar Chotaliya"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Green underline */}
              <div className="w-[420px] lg:w-[500px] h-0.5 mt-4" style={{backgroundColor: '#22c55e'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;