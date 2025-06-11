
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, DollarSign, Users, Lightbulb, TrendingUp, Shield } from "lucide-react";

const CampaignCards = () => {
  const campaignReasons = [
    {
      icon: GraduationCap,
      title: "Skill-First Approach",
      description: "Focus on building practical, industry-relevant skills that directly translate to earning opportunities in today's market."
    },
    {
      icon: DollarSign,
      title: "Direct Path to Income",
      description: "Bridge the gap between education and employment with our proven frameworks that help you monetize your skills quickly."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of learners, mentors, and industry professionals who support your journey from learning to earning."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "Learn to identify market opportunities and develop innovative solutions that create value and generate sustainable income."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Build skills and strategies that not only help you earn but also scale your income potential over time."
    },
    {
      icon: Shield,
      title: "Future-Proof Career",
      description: "Develop adaptable skills and multiple income streams to ensure career resilience in an ever-changing economy."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
            Why This <span className="text-primary">Campaign?</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-6xl mx-auto leading-relaxed font-medium">
            Our Learning to Earning campaign is designed to address the real challenges 
            faced by today's professionals and aspiring entrepreneurs.
          </p>
        </div>
        
        {/* Desktop Layout - 3 cards per row */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {campaignReasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-brand-oxford text-white border-brand-oxford/20 h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[480px]"
            >
              <CardHeader className="text-center pb-6 px-8 flex-grow">
                <div className="mx-auto mb-8 p-6 rounded-full bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors duration-500 shadow-lg group-hover:scale-125">
                  <reason.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 min-h-[70px] flex items-center justify-center leading-tight">
                  {reason.title}
                </CardTitle>
                <CardDescription className="text-center text-brand-cosmic leading-relaxed text-lg flex-grow group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Tablet Layout - 2 cards per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 mb-16">
          {campaignReasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-brand-oxford text-white border-brand-oxford/20 h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[450px]"
            >
              <CardHeader className="text-center pb-6 px-6 flex-grow">
                <div className="mx-auto mb-6 p-5 rounded-full bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors duration-500 shadow-lg group-hover:scale-125">
                  <reason.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 min-h-[60px] flex items-center justify-center">
                  {reason.title}
                </CardTitle>
                <CardDescription className="text-center text-brand-cosmic leading-relaxed text-base flex-grow group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - 1 card per row */}
        <div className="md:hidden space-y-6">
          {campaignReasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-brand-oxford text-white border-brand-oxford/20 h-full flex flex-col hover:border-primary/30 min-h-[400px]"
            >
              <CardHeader className="text-center pb-6 px-6 flex-grow">
                <div className="mx-auto mb-6 p-4 rounded-full bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors duration-500 shadow-lg group-hover:scale-125">
                  <reason.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-4">
                  {reason.title}
                </CardTitle>
                <CardDescription className="text-center text-brand-cosmic leading-relaxed text-base flex-grow group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignCards;
