import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, GraduationCap, Award, Building, Zap, Heart } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2020",
      event: "SSC Completed",
      description: "Successfully completed Secondary School Certificate from Bharad School (CBSE)",
      type: "Education",
      icon: <GraduationCap className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2021",
      event: "Started Diploma",
      description: "Began Diploma in Computer Engineering at Parul University",
      type: "Education",
      icon: <GraduationCap className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2023",
      event: "SIH Finalist",
      description: "Reached national finals in Smart India Hackathon - a prestigious achievement",
      type: "Achievement",
      icon: <Award className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2024",
      event: "Launched Ramniklal Masala",
      description: "Founded authentic spice brand focusing on quality and traditional flavors",
      type: "Business",
      icon: <Building className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2024",
      event: "Laravel Certification",
      description: "Earned certification in Laravel API Development from Parul University",
      type: "Certification",
      icon: <Award className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2025",
      event: "Co-Founded Triple A Exim",
      description: "Launched export business focusing on Indian goods and global markets",
      type: "Business",
      icon: <Building className="h-4 w-4" />,
      status: "active"
    },
    {
      year: "Future",
      event: "Launch Axiom Electronics",
      description: "Planned startup in AI-powered electronics and IoT devices",
      type: "Vision",
      icon: <Zap className="h-4 w-4" />,
      status: "planned"
    },
    {
      year: "Future",
      event: "Multispecialty Hospital",
      description: "Long-term goal to establish healthcare facility with R&D capabilities",
      type: "Vision",
      icon: <Heart className="h-4 w-4" />,
      status: "planned"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Education':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Achievement':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Business':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Certification':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'Vision':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50 dark:bg-green-950';
      case 'active':
        return 'border-blue-500 bg-blue-50 dark:bg-blue-950';
      case 'planned':
        return 'border-gray-400 bg-gray-50 dark:bg-gray-900 opacity-70';
      default:
        return 'border-gray-300 bg-white dark:bg-gray-800';
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Journey Timeline</h2>
          <p className="text-lg text-muted-foreground">Key milestones and future aspirations</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center ${getStatusStyle(event.status)}`}>
                  <div className="text-primary">
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <Card className={`flex-grow p-6 ${getStatusStyle(event.status)}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="font-medium">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.year}
                      </Badge>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {event.event}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">The Journey Continues</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every milestone represents growth, learning, and the pursuit of meaningful impact. 
              From academic achievements to business ventures, each step builds toward a future 
              where technology and entrepreneurship create lasting positive change.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;