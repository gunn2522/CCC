
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, Briefcase, Users, Rocket, Star, ArrowRight, Check } from "lucide-react";

const CollaborationSection = () => {
  const collaborationTypes = [
    {
      icon: Briefcase,
      title: "Industry Partners",
      description: "Companies seeking to bridge talent gaps and contribute to skill development.",
      benefits: ["Website featuring", "Brand launch partnership", "Community recognition", "CSR opportunity"],
      cta: "Partner With Us"
    },
    {
      icon: Users,
      title: "Content Creators",
      description: "Educators and influencers passionate about sharing knowledge and creating social impact.",
      benefits: ["Platform visibility", "Launch event invitation", "Community collaboration", "Content showcase"],
      cta: "Create With Us"
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Entrepreneurs wanting to give back to the community while building meaningful connections.",
      benefits: ["Networking opportunities", "Website showcase", "Partner recognition", "Mentor network"],
      cta: "Collaborate Now"
    },
    {
      icon: Star,
      title: "Mentors & Coaches",
      description: "Experienced professionals committed to nurturing the next generation of skilled professionals.",
      benefits: ["Impact measurement", "Launch event access", "Community leadership", "Recognition badge"],
      cta: "Mentor With Us"
    }
  ];

  const navigateToCollaborators = () => {
    window.location.href = '/collaborators';
  };

  return (
    <section id="collaborators" className="py-20 brand-oxford text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="w-full max-w-none px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary">Collaborate</span> With Us
          </h2>
          <p className="text-xl md:text-2xl text-brand-cosmic max-w-6xl mx-auto leading-relaxed font-medium">
            As a non-profit initiative, we offer meaningful partnerships that create social impact. 
            Join us in bridging industry gaps while gaining valuable exposure and networking opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {collaborationTypes.map((collab, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/95 backdrop-blur-sm border-none h-full flex flex-col min-h-[380px]"
            >
              <CardHeader className="pb-4 text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors duration-300 mx-auto w-fit">
                  <collab.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford">
                  {collab.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-brand-jet mb-4 leading-relaxed text-sm">
                  {collab.description}
                </CardDescription>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-brand-oxford mb-3 text-sm">Partner Benefits:</h4>
                  <div className="space-y-2">
                    {collab.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-brand-jet">
                        <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full brand-oxford hover:bg-brand-oxford/90 text-white transition-all duration-300 group-hover:scale-105 mt-auto"
                >
                  <a href="https://forms.gle/bd4ekBjywP15MbFH7" target="_blank" rel="noopener noreferrer">
                    {collab.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105 rounded-xl font-bold text-lg"
            onClick={navigateToCollaborators}
          >
            View More Collaborators
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/10 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Make an Impact?</h3>
              <p className="text-brand-cosmic mb-6">
                Join our non-profit mission to bridge industry gaps. Get featured on our website 
                and be part of our exclusive brand launch event as a valued partner.
              </p>
              <Button 
                asChild
                size="lg" 
                className="brand-oxford hover:bg-brand-oxford/90 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105"
              >
                <a href="/collaborators">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
