import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Diploma in Computer Engineering",
      institute: "Parul University",
      duration: "2021–2024",
      cgpa: "6.66 CGPA",
      highlights: ["SIH Finalist", "Laravel Certified", "Tech Expo Participant"],
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "SSC (10th - CBSE)",
      institute: "Bharad School",
      duration: "2019–2020",
      cgpa: "Strong Academic Base",
      highlights: ["Foundation Studies", "Academic Excellence"],
      icon: <Award className="h-6 w-6" />
    }
  ];

  const certifications = [
    {
      name: "Laravel API Development",
      issuer: "Parul University",
      date: "May 2024",
      type: "Technical Certification"
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon",
      organizer: "MHRD, Government of India",
      result: "National Finalist",
      year: "2023"
    },
    {
      title: "College Coding Competition",
      organizer: "Parul University",
      result: "1st Rank",
      year: "2023"
    },
    {
      title: "Tech Expo",
      organizer: "Parul University",
      result: "Active Participant",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education & Achievements</h2>
          <p className="text-lg text-muted-foreground">Academic journey and recognitions</p>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">{edu.icon}</div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-lg text-muted-foreground mb-2">{edu.institute}</p>
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.duration}
                        </div>
                        <Badge variant="secondary">{edu.cgpa}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline">{highlight}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{cert.date}</Badge>
                    <Badge>{cert.type}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Competition & Awards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.organizer}</p>
                  <Badge className="mb-2">{achievement.result}</Badge>
                  <p className="text-sm text-muted-foreground">{achievement.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;