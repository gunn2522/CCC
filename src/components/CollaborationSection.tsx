
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, Briefcase, Users, Rocket, Star, ArrowRight } from "lucide-react";

const CollaborationSection = () => {
  const collaborationTypes = [
    {
      icon: Briefcase,
      title: "Industry Partners",
      description: "Companies looking to upskill their workforce or find talented individuals from our community.",
      benefits: ["Access to talent pool", "Custom training programs", "Brand visibility"],
      cta: "Partner With Us"
    },
    {
      icon: Users,
      title: "Content Creators",
      description: "Educators, influencers, and experts who want to share knowledge and monetize their expertise.",
      benefits: ["Revenue sharing", "Platform access", "Community reach"],
      cta: "Become Creator"
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Entrepreneurs seeking skilled team members or wanting to share their journey with our community.",
      benefits: ["Talent recruitment", "Mentorship opportunities", "Network expansion"],
      cta: "Join as Founder"
    },
    {
      icon: Star,
      title: "Mentors & Coaches",
      description: "Experienced professionals who want to guide and support the next generation of earners.",
      benefits: ["Flexible scheduling", "Impact measurement", "Compensation options"],
      cta: "Mentor Others"
    }
  ];

  return (
    <section className="py-20 brand-oxford text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Collaborate</span> With Us
          </h2>
          <p className="text-xl text-brand-cosmic max-w-3xl mx-auto leading-relaxed">
            Join our ecosystem as a collaborator and help shape the future of learning and earning. 
            We welcome partnerships that create mutual value and drive positive impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {collaborationTypes.map((collab, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/95 backdrop-blur-sm border-none"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <collab.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-oxford">
                    {collab.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brand-jet mb-4 leading-relaxed">
                  {collab.description}
                </CardDescription>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-brand-oxford mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {collab.benefits.map((benefit, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 group-hover:scale-105"
                >
                  {collab.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/10 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-brand-cosmic mb-6">
                Have a unique collaboration idea? We'd love to hear from you. 
                Let's create something amazing together.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
