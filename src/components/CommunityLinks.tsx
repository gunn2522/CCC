import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Instagram, Linkedin } from "lucide-react";

const CommunityLinks = () => {
  const communities = [
    {
      icon: MessageCircle,
      title: "WhatsApp Community",
      description: "Join our WhatsApp group for instant updates, discussions, and direct support from our team.",
      link: "https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow us for daily inspiration, success stories, and behind-the-scenes content from our campaigns.",
      link: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ygh8fhi",
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with professionals in our LinkedIn community for career insights and industry networking.",
      link: "https://www.linkedin.com/company/ccclearntoearn/",
      color: "bg-blue-500/10 text-blue-600"
    }
  ];

  return (
    <section className="py-12 md:py-24 brand-oxford">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Join Our <span className="text-primary">Communities</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-brand-cosmic max-w-6xl mx-auto leading-relaxed font-medium">
            Connect with like-minded individuals committed to bridging industry gaps. 
            Choose the platform that works best for you.
          </p>
        </div>
        
        {/* Desktop Layout - 3 cards per row */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
          {communities.map((community, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 brand-oxford border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[360px]"
            >
              <CardHeader className="text-center pb-4 px-6 flex-grow">
                <div className={`mx-auto mb-6 p-4 rounded-full w-fit ${community.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <community.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                  {community.title}
                </CardTitle>
                <CardDescription className="text-brand-cosmic leading-relaxed text-base flex-grow group-hover:text-white transition-colors duration-300">
                  {community.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 mt-auto">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => window.open(community.link, '_blank')}
                >
                  Join Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - 1 card per row */}
        <div className="md:hidden space-y-6">
          {communities.map((community, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 brand-oxford border-secondary h-full flex flex-col hover:border-primary/30 min-h-[320px]"
            >
              <CardHeader className="text-center pb-4 px-5 flex-grow">
                <div className={`mx-auto mb-5 p-3 rounded-full w-fit ${community.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <community.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 mb-3">
                  {community.title}
                </CardTitle>
                <CardDescription className="text-brand-cosmic leading-relaxed text-sm flex-grow group-hover:text-white transition-colors duration-300">
                  {community.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-5 pb-5 mt-auto">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 text-sm py-3 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => window.open(community.link, '_blank')}
                >
                  Join Now
                  <ExternalLink className="ml-2 h-3 w-3" />
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
