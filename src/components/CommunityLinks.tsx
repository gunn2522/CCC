
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
    <section className="py-32 brand-cosmic">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-oxford mb-8">
            Join Our <span className="text-primary">Communities</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-jet max-w-6xl mx-auto leading-relaxed font-medium">
            Connect with like-minded individuals committed to bridging industry gaps. 
            Choose the platform that works best for you.
          </p>
        </div>
        
        {/* Desktop Layout - 3 cards per row */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {communities.map((community, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[480px]"
            >
              <CardHeader className="text-center pb-6 px-8 flex-grow">
                <div className={`mx-auto mb-8 p-6 rounded-full w-fit ${community.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <community.icon className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[70px] flex items-center justify-center">
                  {community.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-lg flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {community.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8 mt-auto">
                <Button 
                  className="w-full bg-brand-oxford hover:bg-brand-oxford/90 text-white transition-all duration-300 text-lg py-6 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => window.open(community.link, '_blank')}
                >
                  Join Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - 1 card per row */}
        <div className="md:hidden space-y-8">
          {communities.map((community, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[420px]"
            >
              <CardHeader className="text-center pb-6 px-6 flex-grow">
                <div className={`mx-auto mb-6 p-5 rounded-full w-fit ${community.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <community.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 mb-4">
                  {community.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {community.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 mt-auto">
                <Button 
                  className="w-full bg-brand-oxford hover:bg-brand-oxford/90 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
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
