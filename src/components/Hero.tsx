
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap, Instagram, Linkedin, MessageCircle, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

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
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/10"
                onClick={() => scrollToSection('home')}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/10"
                onClick={() => navigateToPage('/collaborators')}
              >
                Collaborators
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/10"
                onClick={() => navigateToPage('/testimonials')}
              >
                Testimonials
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/10"
                onClick={() => navigateToPage('/queries')}
              >
                Ask Queries
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10"
                onClick={() => openLink('https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG')}
              >
                <MessageCircle className="h-5 w-5 text-white hover:text-primary" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10"
                onClick={() => openLink('https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ygh8fhi')}
              >
                <Instagram className="h-5 w-5 text-white hover:text-primary" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10"
                onClick={() => openLink('https://www.linkedin.com/company/ccclearntoearn/')}
              >
                <Linkedin className="h-5 w-5 text-white hover:text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reduced Height */}
      <section id="home" className="relative min-h-[80vh] flex items-center justify-center brand-oxford text-white overflow-hidden pt-20">
        {/* Enhanced Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-secondary rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="w-full max-w-none px-8 lg:px-16 z-10">
          <div className="text-center">
            {/* Enhanced Main Heading - Single Line */}
            <div className="mb-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-brand-cosmic to-primary bg-clip-text text-transparent drop-shadow-2xl">
                  Learning to Earning
                </span>
              </h1>
            </div>
            
            {/* Enhanced Subheading */}
            <div className="mb-8 animate-fade-in">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Transform Your Career Journey with Expert Guidance
              </h2>
              <p className="text-lg md:text-xl text-brand-cosmic mb-3 font-medium">
                A Non-Profit Initiative by Career Catalyst Community
              </p>
            </div>
            
            {/* Enhanced Content Structure */}
            <div className="max-w-6xl mx-auto mb-12 animate-fade-in">
              <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed font-medium">
                From Consultation to Placement - Your Success Story Starts Here
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">LinkedIn Profile Optimization</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">AI-Powered Growth Strategies</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">Job Preparation & Placement</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">Career Guidance Support</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-xl"
                onClick={() => scrollToSection('skills')}
              >
                Start Your Journey
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 rounded-xl"
                onClick={() => scrollToSection('queries')}
              >
                Ask a Question
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-brand-oxford px-10 py-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 rounded-xl"
                onClick={() => navigateToPage('/testimonials')}
              >
                View Success Stories
              </Button>
            </div>
            
            {/* Enhanced Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-primary mr-3" />
                    <span className="text-4xl md:text-5xl font-bold text-primary">100%</span>
                  </div>
                  <p className="text-secondary text-lg font-medium">Non-Profit Mission</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <Target className="h-10 w-10 text-primary mr-3" />
                    <span className="text-4xl md:text-5xl font-bold text-primary">∞</span>
                  </div>
                  <p className="text-secondary text-lg font-medium">Career Opportunities</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="h-10 w-10 text-primary mr-3" />
                    <span className="text-4xl md:text-5xl font-bold text-primary">0₹</span>
                  </div>
                  <p className="text-secondary text-lg font-medium">Cost to Join</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-primary mr-3" />
                    <span className="text-4xl md:text-5xl font-bold text-primary">500+</span>
                  </div>
                  <p className="text-secondary text-lg font-medium">Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
