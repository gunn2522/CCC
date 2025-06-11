
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-jet text-white py-16">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/09f2d9a3-de1d-40b3-9c16-39796000e75e.png" 
                alt="CCC Logo" 
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Career Catalyst Community</h3>
                <p className="text-brand-silver">Learning to Earning Campaign</p>
              </div>
            </div>
            <p className="text-brand-silver leading-relaxed mb-6 max-w-md">
              A non-profit initiative dedicated to bridging industry gaps and empowering 
              individuals to transform their skills into sustainable income opportunities.
            </p>
            <div className="mb-4">
              <p className="text-brand-silver">
                <span className="font-semibold">Email:</span> 
                <a href="mailto:careercatalystcommunity@gmail.com" className="text-primary hover:underline ml-2">
                  careercatalystcommunity@gmail.com
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-brand-silver text-brand-silver hover:bg-primary hover:border-primary"
                onClick={() => window.open('https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ygh8fhi', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-brand-silver text-brand-silver hover:bg-primary hover:border-primary"
                onClick={() => window.open('https://www.linkedin.com/company/ccclearntoearn/', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-brand-silver text-brand-silver hover:bg-primary hover:border-primary"
                onClick={() => window.open('https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-brand-silver text-brand-silver hover:bg-primary hover:border-primary"
                onClick={() => window.open('mailto:careercatalystcommunity@gmail.com', '_blank')}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#skills" className="text-brand-silver hover:text-primary transition-colors duration-300">Skills & Communities</a></li>
              <li><a href="/collaborators" className="text-brand-silver hover:text-primary transition-colors duration-300">Collaborators</a></li>
              <li><a href="/testimonials" className="text-brand-silver hover:text-primary transition-colors duration-300">Testimonials</a></li>
              <li><a href="/#communities" className="text-brand-silver hover:text-primary transition-colors duration-300">Join Communities</a></li>
              <li><a href="/queries" className="text-brand-silver hover:text-primary transition-colors duration-300">Ask Queries</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Support</h4>
            <ul className="space-y-3">
              <li><a href="https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG" className="text-brand-silver hover:text-primary transition-colors duration-300">WhatsApp Support</a></li>
              <li><a href="mailto:careercatalystcommunity@gmail.com" className="text-brand-silver hover:text-primary transition-colors duration-300">Email Support</a></li>
              <li><a href="/#support" className="text-brand-silver hover:text-primary transition-colors duration-300">Support Our Vision</a></li>
              <li><a href="/collaborators" className="text-brand-silver hover:text-primary transition-colors duration-300">Become a Partner</a></li>
              <li><a href="/#communities" className="text-brand-silver hover:text-primary transition-colors duration-300">Join Movement</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-brand-silver/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-brand-silver mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary mx-2" />
            <span>by Career Catalyst Community</span>
          </div>
          <p className="text-brand-silver">
            © 2024 CCC Learning to Earning Campaign. A Non-Profit Initiative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
