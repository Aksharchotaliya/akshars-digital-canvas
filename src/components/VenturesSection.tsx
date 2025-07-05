import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Building2, Truck, Zap, Heart, Instagram } from 'lucide-react';

const VenturesSection = () => {
  const ventures = [
    {
      name: "Ramniklal Masala",
      role: "Founder",
      year: "2024–Present",
      description: "High-quality, authentic spice brand focusing on traditional Indian flavors with modern packaging and distribution.",
      highlights: ["B2C & B2B Growth", "Brand Development", "Quality Assurance", "Market Expansion"],
      website: "https://ramniklalmasala.com",
      instagram: "@ramniklalmasala",
      status: "Active",
      icon: <Building2 className="h-6 w-6" />,
      color: "text-orange-600"
    },
    {
      name: "Triple A Exim",
      role: "Co-Founder",
      year: "2025–Present",
      description: "Export and trading company specializing in Indian goods, focusing on global sourcing, logistics, and market expansion.",
      highlights: ["Global Markets", "Sourcing & Logistics", "Export Operations", "Trade Relations"],
      website: "https://tripleaexim.com",
      instagram: "@tripleaexim",
      status: "Active",
      icon: <Truck className="h-6 w-6" />,
      color: "text-blue-600"
    },
    {
      name: "Axiom Electronics",
      role: "Founder (Planned)",
      year: "Future",
      description: "Upcoming startup in AI-powered tech & electronics. Vision to design, manufacture, and retail IoT & smart devices in India.",
      highlights: ["AI Integration", "IoT Devices", "Smart Electronics", "Manufacturing"],
      website: "#",
      instagram: "#",
      status: "Planning",
      icon: <Zap className="h-6 w-6" />,
      color: "text-purple-600"
    },
    {
      name: "Multispecialty Hospital",
      role: "Visionary",
      year: "Long-term Goal",
      description: "Future healthcare venture with R&D facilities, aiming to provide comprehensive medical services and advance healthcare research.",
      highlights: ["Healthcare Services", "R&D Facilities", "Medical Research", "Community Impact"],
      website: "#",
      instagram: "#",
      status: "Vision",
      icon: <Heart className="h-6 w-6" />,
      color: "text-red-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Vision':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="ventures" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Business Ventures</h2>
          <p className="text-lg text-muted-foreground">Building brands and creating opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start space-x-4 mb-4">
                <div className={`${venture.color} group-hover:scale-110 transition-transform`}>
                  {venture.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{venture.name}</h3>
                    <Badge className={getStatusColor(venture.status)}>
                      {venture.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">{venture.role}</Badge>
                    <span className="text-sm text-muted-foreground">{venture.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {venture.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Highlights:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {venture.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {venture.status === 'Active' && (
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild>
                    <a href={venture.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Website
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://instagram.com/${venture.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-3 w-3 mr-1" />
                      Instagram
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Entrepreneurial Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-6">
              My entrepreneurial journey is driven by the belief that businesses should solve real problems 
              and create positive impact. From spices to exports, and future tech ventures to healthcare, 
              each venture represents a step towards building a more connected and efficient world.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Problem-Solving Focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Community Impact</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Scalable Solutions</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;