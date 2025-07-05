import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle, Send, MapPin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:contact@aksharchotaliya.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your message has been prepared in your default email client.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contact@aksharchotaliya.com",
      action: "mailto:contact@aksharchotaliya.com",
      color: "text-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 92653 24408",
      action: "tel:+919265324408",
      color: "text-green-600"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "Chat with me",
      action: "https://wa.me/919265324408",
      color: "text-green-500"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/aksharchotaliya",
      icon: "📷"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aksharchotaliya",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/aksharchotaliya",
      icon: "💻"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@aksharchotaliya",
      icon: "📺"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Let's connect and explore opportunities together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`${method.color} group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{method.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary ml-auto" />
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </h4>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary ml-auto" />
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">
                    Based in India, available for remote collaboration and on-site meetings.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, idea, or how we can work together..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Build Something Amazing</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're interested in collaboration, have a project idea, or just want to connect, 
              I'm always open to meaningful conversations. Let's explore how we can create something 
              impactful together.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;