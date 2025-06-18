import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, Users, Target, TrendingUp, Calendar, Users2, Zap } from "lucide-react";

const DonationSponsorship = () => {
  const supportCards = [
    {
      icon: Heart,
      title: "Early Supporters",
      description: "Join our founding community of supporters. Every early contribution helps us build the foundation for impacting thousands of students.",
      cta: "Support Launch",
      color: "bg-red-500/10 text-red-600",
      link: "https://forms.gle/LG7mkLNvX7qH2Sse8"
    },
    {
      icon: Handshake,
      title: "Launch Partners",
      description: "Partner with us from day one to create lasting impact. Help us establish credible, high-quality education programs.",
      cta: "Become Partner",
      color: "bg-blue-500/10 text-blue-600",
      link: "https://forms.gle/hx2VoEdqTud1PAh98"
    },
    {
      icon: Users,
      title: "Mission Advocates",
      description: "Spread the word about our vision for free education. Help us build a community before we officially launch.",
      cta: "Join Movement",
      color: "bg-green-500/10 text-green-600",
      link: "https://forms.gle/aTHiH1UbbUmmWNFp6"
    },
    {
      icon: Target,
      title: "Track Our Journey",
      description: "Follow our progress as we work toward impacting 50,000 students by 2025. Be part of the story from the beginning.",
      cta: "Follow Progress",
      color: "bg-purple-500/10 text-purple-600",
      link: "https://forms.gle/954vRtNYtb4FE3uC9"
    }
  ];

  const stats = [
    {
      icon: Calendar,
      number: "2025",
      label: "Launch Target",
      description: "When We Go Live"
    },
    {
      icon: Users2,
      number: "50,000",
      label: "Student Goal",
      description: "Students to Impact"
    },
    {
      icon: Zap,
      number: "₹0",
      label: "Student Cost",
      description: "Free Education"
    },
    {
      icon: TrendingUp,
      number: "∞",
      label: "Opportunities",
      description: "Unlimited Potential"
    }
  ];

  return (
    <section id="support" className="py-12 md:py-20 brand-cosmic">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-brand-oxford mb-4 md:mb-6">
            Support Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-brand-jet max-w-6xl mx-auto leading-relaxed font-medium">
            Help us launch free, quality education for students worldwide. Be part of building something 
            that will transform careers and change lives. Your early support makes our ambitious vision possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
          {supportCards.map((card, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-border h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[380px]"
            >
              <CardHeader className="text-center pb-4 px-6 flex-grow">
                <div className={`mx-auto mb-6 p-4 rounded-full w-fit ${card.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <card.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 mt-auto">
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                >
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    {card.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Start with Us Section */}
        <div className="text-center mb-8 md:mb-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-brand-cosmic to-primary/5 border-l-8 border-primary shadow-xl">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-oxford mb-4 md:mb-6">Why Start with Us</h3>
              <p className="text-sm md:text-lg lg:text-xl text-brand-jet leading-relaxed">
                Every early supporter helps us build the foundation for a revolutionary education platform. 
                Your contribution today will directly fund our initial programs, technology development, and 
                outreach to underserved communities. Together, we're not just planning education—we're 
                reimagining how careers are built.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="h-10 w-10 text-primary mr-3" />
                  <span className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</span>
                </div>
                <h4 className="text-lg font-bold text-brand-oxford mb-2">{stat.label}</h4>
                <p className="text-brand-jet text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSponsorship;
