import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Award, Calendar, Building } from 'lucide-react';

const CertificateGallery = () => {
  const certificates = [
    {
      title: "Laravel API Development",
      shortTitle: "Laravel API Development – May 2024",
      issuer: "Parul University",
      date: "May 2024",
      description: "Advanced certificate program focused on building robust REST APIs using Laravel framework with comprehensive POSTMAN testing and documentation.",
      image: "/lovable-uploads/25b81a42-fba0-4ddf-bb72-be6e89528b3d.png",
      type: "Technical Certification"
    },
    {
      title: "Tech Expo Participation", 
      shortTitle: "Tech Expo Participation – Feb 2023",
      issuer: "Parul University",
      date: "February 2023",
      description: "Participated in the prestigious Tech Expo 2023 showcasing innovative Heart Attack Prediction Project using machine learning algorithms and data analytics.",
      image: "/lovable-uploads/afd9c7d0-2569-42db-8535-0167d6fe2430.png",
      type: "Project Exhibition"
    },
    {
      title: "Smart India Hackathon",
      shortTitle: "Smart India Hackathon – Finalist 2023",
      issuer: "Government of India",
      date: "March 2023", 
      description: "Achieved finalist status in India's largest hackathon competition, developing innovative solutions for real-world problems with national impact.",
      image: "/lovable-uploads/1f09d790-61b5-4d70-b8dd-baef518ca34d.png",
      type: "Competition"
    },
    {
      title: "Coding Competition Winner",
      shortTitle: "Coding Competition – 1st Rank",
      issuer: "Parul University",
      date: "June 2022",
      description: "Secured first position in 'Click n Blink' National Level Technical Event, demonstrating exceptional programming skills and problem-solving abilities.",
      image: "/lovable-uploads/0e223b3c-c103-425f-b866-24a5e672c3e8.png",
      type: "Achievement"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Technical Certification':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Project Exhibition':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Competition':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'Achievement':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="certificate-gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Award className="h-8 w-8 mr-3 text-primary" />
            Certificate Gallery
          </h2>
          <p className="text-lg text-muted-foreground">Academic and professional achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <HoverCard key={index} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={getTypeColor(cert.type)}>
                        {cert.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.shortTitle}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground font-medium">
                        <Building className="h-4 w-4 mr-2" />
                        {cert.issuer}
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    
                    <div className="pt-2 text-xs text-primary/70 font-medium">
                      Hover to view certificate →
                    </div>
                  </div>
                </Card>
              </HoverCardTrigger>
              
              <HoverCardContent 
                className="w-96 p-0 border-2 border-primary/20 shadow-2xl" 
                side="top"
                sideOffset={10}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-4 bg-background/95 backdrop-blur-sm">
                  <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Recognition & Growth</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These certificates represent continuous learning, technical expertise, and recognition 
              for innovation. Each achievement builds toward creating meaningful technological solutions 
              and contributing to the advancement of the field.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;