
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why This <span className="text-primary">Campaign?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our Learning to Earning campaign is designed to address the real challenges 
            faced by today's professionals and aspiring entrepreneurs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaignReasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-brand-oxford text-white border-brand-oxford/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors duration-300">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-brand-cosmic leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignCards;
