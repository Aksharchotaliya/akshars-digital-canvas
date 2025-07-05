import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Award, X } from 'lucide-react';

const CertificateGallery = () => {
  const certificates = [
    {
      title: "Laravel API Development",
      issuer: "Parul University",
      date: "May 2024",
      description: "Certificate of Completion for Laravel API with POSTMAN",
      image: "/lovable-uploads/25b81a42-fba0-4ddf-bb72-be6e89528b3d.png",
      type: "Technical Certification"
    },
    {
      title: "Tech Expo Participation", 
      issuer: "Parul University",
      date: "February 2023",
      description: "Certificate of Participation for Tech Expo 2023 - Heart Attack Prediction Project",
      image: "/lovable-uploads/afd9c7d0-2569-42db-8535-0167d6fe2430.png",
      type: "Project Exhibition"
    },
    {
      title: "Hackathon Participation",
      issuer: "Parul University - Projections",
      date: "March 2021", 
      description: "Certificate of Participation for Hackathon during Gujarat's Largest Technical Festival",
      image: "/lovable-uploads/1f09d790-61b5-4d70-b8dd-baef518ca34d.png",
      type: "Competition"
    },
    {
      title: "1st Rank Coding Competition",
      issuer: "Parul University",
      date: "June 2022",
      description: "Certificate of Merit for 1st position in 'Click n Blink' National Level Technical Event",
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6">
                  <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-muted/30">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={getTypeColor(cert.type)}>
                        {cert.type}
                      </Badge>
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {cert.description}
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="p-6 bg-background">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getTypeColor(cert.type)}>
                        {cert.type}
                      </Badge>
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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