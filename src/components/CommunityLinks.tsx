
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Instagram, Linkedin } from "lucide-react";

const CommunityLinks = () => {
  const communities = [
    {
      icon: MessageCircle,
      title: "WhatsApp Community",
      description: "Join our WhatsApp group for instant updates, discussions, and direct support from our team.",
      link: "#whatsapp",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow us for daily inspiration, success stories, and behind-the-scenes content from our campaigns.",
      link: "#instagram",
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with professionals in our LinkedIn community for career insights and industry networking.",
      link: "#linkedin",
      color: "bg-blue-500/10 text-blue-600"
    }
  ];

  return (
    <section className="py-20 brand-cosmic">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-6">
            Join Our <span className="text-primary">Communities</span>
          </h2>
          <p className="text-xl text-brand-jet max-w-3xl mx-auto leading-relaxed">
            Connect with like-minded individuals committed to bridging industry gaps. 
            Choose the platform that works best for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communities.map((community, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-secondary"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${community.color} group-hover:scale-110 transition-transform duration-300`}>
                  <community.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford">
                  {community.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-brand-jet mb-6 leading-relaxed">
                  {community.description}
                </CardDescription>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                  onClick={() => window.open(community.link, '_blank')}
                >
                  Join Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLinks;
