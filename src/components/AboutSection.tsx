import React from 'react';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">Get to know the person behind the projects</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio */}
          <div className="lg:col-span-2">
            <Card className="p-8 h-full">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  I'm a tech enthusiast and entrepreneur driven by a passion for building meaningful solutions. 
                  Currently pursuing my Diploma in Computer Engineering at Parul University, I've been on a 
                  journey that combines technical expertise with business acumen.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground">
                  My experience spans from being a Smart India Hackathon finalist to founding my own spice 
                  brand, Ramniklal Masala, and co-founding Triple A Exim, an export business. Each venture 
                  has taught me valuable lessons about perseverance, innovation, and the importance of 
                  solving real-world problems.
                </p>

                <p className="text-lg leading-relaxed text-foreground">
                  Through hostel life, tech competitions, business launches, and overcoming health challenges, 
                  I've learned that success comes from discipline, taking action, and maintaining humility 
                  throughout the journey. I believe in working quietly, building purposefully, and letting 
                  the results speak for themselves.
                </p>

                <p className="text-lg leading-relaxed text-foreground">
                  Looking ahead, I'm planning to launch Axiom Electronics and eventually establish a 
                  multispecialty hospital with R&D facilities, always with the goal of creating ventures 
                  that empower others and solve meaningful problems.
                </p>
              </div>
            </Card>
          </div>

          {/* Quote & Values */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-3">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-foreground italic">
                    "Work in silence, build with purpose, and let your journey speak for itself."
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Values</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Discipline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Action-Oriented</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Humility</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Mission</h3>
              <p className="text-foreground">
                To build future-ready ventures that solve real problems and empower others to achieve their potential.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;