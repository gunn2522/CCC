import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Users, Briefcase, ArrowRight, ExternalLink } from "lucide-react";

const CareersSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:careercatalystcommunity@gmail.com?subject=Internship Application - Career Catalyst Community';
  };

  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-oxford mb-8">
            Join Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-jet max-w-4xl mx-auto leading-relaxed font-medium">
            Looking for valuable experience? Join Career Catalyst Community as an intern and 
            be part of our mission to bridge industry gaps.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300 mx-auto w-fit">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-brand-oxford mb-4">Internship Opportunities</h3>
                <p className="text-brand-jet leading-relaxed text-lg">
                  Gain hands-on experience while making a real impact in the career development space. 
                  Work with our passionate team to help students across India find their career paths.
                </p>
              </div>
              
              <div className="mb-8 p-6 bg-brand-oxford/5 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <span className="text-brand-oxford font-semibold text-lg">Apply Now</span>
                </div>
                <p className="text-brand-jet mb-4">
                  Send your application to: <strong>careercatalystcommunity@gmail.com</strong>
                </p>
                <p className="text-sm text-brand-jet/80">
                  Our team will respond to you shortly with next steps.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105 rounded-xl font-bold text-lg mr-4"
                  onClick={handleEmailClick}
                >
                  Apply for Internship
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-brand-oxford font-semibold">Stay Updated</span>
                </div>
                <p className="text-brand-jet mb-4">
                  For regular hiring updates and opportunities, join our communities and follow us on LinkedIn.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG', '_blank')}
                  >
                    Join WhatsApp Community
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://www.linkedin.com/company/ccclearntoearn/', '_blank')}
                  >
                    Follow on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
