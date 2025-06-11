
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
    <section id="queries" className="py-32 brand-oxford text-white relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="w-full max-w-none px-8 lg:px-16 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Have <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-cosmic max-w-6xl mx-auto leading-relaxed font-medium">
            We're here to help! Share your doubts, queries, and career concerns. 
            Our team of experts is ready to guide you on your journey to success.
          </p>
        </div>
        
        {/* Desktop Layout - 4 cards per row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-24">
          {queryTypes.map((query, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/95 backdrop-blur-sm border-none h-full flex flex-col hover:scale-105 min-h-[480px]"
            >
              <CardHeader className="text-center pb-6 px-8 flex-grow">
                <div className="p-6 rounded-full bg-primary/10 mb-8 group-hover:bg-primary/20 transition-colors duration-500 mx-auto w-fit group-hover:scale-125">
                  <query.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[70px] flex items-center justify-center">
                  {query.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-lg flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {query.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8 mt-auto">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 text-lg py-6 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                >
                  {query.action}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tablet Layout - 2 cards per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 mb-20">
          {queryTypes.map((query, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/95 backdrop-blur-sm border-none h-full flex flex-col hover:scale-105 min-h-[450px]"
            >
              <CardHeader className="text-center pb-6 px-6 flex-grow">
                <div className="p-5 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-500 mx-auto w-fit group-hover:scale-125">
                  <query.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[60px] flex items-center justify-center">
                  {query.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {query.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 mt-auto">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                >
                  {query.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - 1 card per row */}
        <div className="md:hidden space-y-6 mb-20">
          {queryTypes.map((query, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/95 backdrop-blur-sm border-none h-full flex flex-col min-h-[400px]"
            >
              <CardHeader className="text-center pb-6 px-6 flex-grow">
                <div className="p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-500 mx-auto w-fit group-hover:scale-125">
                  <query.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 mb-4">
                  {query.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {query.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 mt-auto">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                >
                  {query.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Contact CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-primary/10 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-12">
              <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Have Questions?</h3>
              <p className="text-brand-cosmic mb-8 text-xl leading-relaxed">
                Reach out to us directly through our community channels or drop us a message. 
                We typically respond within 24 hours and are always excited to help ambitious freshers like you!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105 rounded-xl"
                  onClick={() => window.open('https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG', '_blank')}
                >
                  Join WhatsApp Community
                  <MessageCircle className="ml-2 h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  Send Direct Message
                  <ArrowRight className="ml-2 h-6 w-6" />
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
