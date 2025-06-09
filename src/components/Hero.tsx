
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 brand-oxford border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/09f2d9a3-de1d-40b3-9c16-39796000e75e.png" 
                alt="CCC Logo" 
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-xl font-bold text-white">Career Catalyst Community</h1>
                <p className="text-sm text-brand-cosmic">Learning to Earning Campaign</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Instagram className="h-5 w-5 text-white hover:text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="h-5 w-5 text-white hover:text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center brand-oxford text-white overflow-hidden pt-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Learning to <span className="text-primary">Earning</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-cosmic mb-4 animate-fade-in">
              A Non-Profit Initiative by Career Catalyst Community
            </p>
            
            <p className="text-lg md:text-xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Bridging industry gaps through skills transformation. Join our mission to make 
              earning opportunities accessible to everyone, everywhere.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 text-primary mr-2" />
                  <span className="text-3xl font-bold text-primary">100%</span>
                </div>
                <p className="text-secondary">Non-Profit Mission</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Target className="h-8 w-8 text-primary mr-2" />
                  <span className="text-3xl font-bold text-primary">∞</span>
                </div>
                <p className="text-secondary">Opportunities Created</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Zap className="h-8 w-8 text-primary mr-2" />
                  <span className="text-3xl font-bold text-primary">0₹</span>
                </div>
                <p className="text-secondary">Cost to Join</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
