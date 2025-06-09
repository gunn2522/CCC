
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center brand-oxford text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/09f2d9a3-de1d-40b3-9c16-39796000e75e.png" 
              alt="CCC Logo" 
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Learning to <span className="text-primary">Earning</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-cosmic mb-4 animate-fade-in">
            By Career Catalyst Community
          </p>
          
          <p className="text-lg md:text-xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Transform your skills into sustainable income. Join our comprehensive campaign 
            that bridges the gap between learning and earning in today's digital economy.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join the Campaign
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
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">5000+</span>
              </div>
              <p className="text-secondary">Active Learners</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Target className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">85%</span>
              </div>
              <p className="text-secondary">Success Rate</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-primary">100+</span>
              </div>
              <p className="text-secondary">Career Paths</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
