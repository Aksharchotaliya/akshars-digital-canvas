import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Brain, Award, ExternalLink, Lightbulb } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "Heart Attack Predictor",
      tools: ["Python", "Machine Learning", "Data Science"],
      description: "Advanced health risk prediction system using machine learning algorithms to analyze patient data and predict potential heart attack risks.",
      result: "Featured at Tech Expo 2023",
      type: "AI/ML",
      status: "Completed",
      icon: <Brain className="h-6 w-6" />
    },
    {
      name: "Laravel API Development",
      tools: ["Laravel", "PHP", "Postman", "MySQL"],
      description: "Comprehensive backend API development for web applications with authentication, data management, and testing protocols.",
      result: "Laravel Certified",
      type: "Backend",
      status: "Certified",
      icon: <Code className="h-6 w-6" />
    },
    {
      name: "Smart India Hackathon Project",
      tools: ["Full-stack Development", "React", "Node.js"],
      description: "National-level hackathon project addressing real-world problems through innovative technological solutions.",
      result: "National Finalist",
      type: "Full-stack",
      status: "Finalist",
      icon: <Award className="h-6 w-6" />
    },
    {
      name: "Axiom Electronics (Concept)",
      tools: ["AI", "IoT", "Electronics", "Business Planning"],
      description: "Future startup concept focused on AI-powered electronics and IoT devices. Planning to design, manufacture, and retail smart devices in India.",
      result: "In Planning Phase",
      type: "Future Startup",
      status: "Planning",
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Certified':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Finalist':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Projects</h2>
          <p className="text-lg text-muted-foreground">Building innovative solutions through technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="mb-3">{project.type}</Badge>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-medium text-success">{project.result}</p>
                  <p className="text-xs text-muted-foreground">Achievement</p>
                </div>
                {project.status === 'Planning' && (
                  <Button variant="outline" size="sm" disabled>
                    <Lightbulb className="h-4 w-4 mr-1" />
                    Coming Soon
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-muted/30">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Future Vision</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My technical journey continues with plans to launch Axiom Electronics, a startup focused on 
              AI-powered IoT devices and smart electronics. The goal is to design, manufacture, and retail 
              innovative technology solutions that address real-world problems in the Indian market.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;