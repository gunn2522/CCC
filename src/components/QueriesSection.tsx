
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle, Users, BookOpen, ArrowRight, Mail } from "lucide-react";

const QueriesSection = () => {
  const queryTypes = [
    {
      icon: BookOpen,
      title: "Career Guidance",
      description: "Get personalized advice on career paths, skill development, and industry insights.",
      action: "Ask Career Question"
    },
    {
      icon: Users,
      title: "LinkedIn Optimization",
      description: "Expert help with profile optimization, networking strategies, and professional branding.",
      action: "Optimize LinkedIn"
    },
    {
      icon: HelpCircle,
      title: "Job Preparation",
      description: "Interview tips, resume writing, and preparation strategies for your dream job.",
      action: "Get Job Tips"
    },
    {
      icon: MessageCircle,
      title: "General Doubts",
      description: "Any questions about our services, community, or how we can help you grow.",
      action: "Ask Anything"
    }
  ];

  return (
    <section id="queries" className="py-20 brand-oxford text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-xl text-brand-cosmic max-w-3xl mx-auto leading-relaxed">
            We're here to help! Share your doubts, queries, and career concerns. 
            Our team of experts is ready to guide you on your journey to success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {queryTypes.map((query, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/95 backdrop-blur-sm border-none h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="p-3 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors duration-300 mx-auto w-fit">
                  <query.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-brand-oxford">
                  {query.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col h-full">
                <CardDescription className="text-brand-jet mb-6 leading-relaxed text-sm flex-grow">
                  {query.description}
                </CardDescription>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 group-hover:scale-105"
                >
                  {query.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Contact CTA - moved down with more spacing */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-brand-cosmic mb-6">
                Reach out to us directly through our community channels or drop us a message. 
                We typically respond within 24 hours and are always excited to help ambitious freshers like you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Join WhatsApp Community
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 transition-all duration-300"
                >
                  Send Direct Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QueriesSection;
