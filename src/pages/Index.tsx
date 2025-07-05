import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import CertificateGallery from '@/components/CertificateGallery';
import ProjectsSection from '@/components/ProjectsSection';
import VenturesSection from '@/components/VenturesSection';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <CertificateGallery />
        <ProjectsSection />
        <VenturesSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
