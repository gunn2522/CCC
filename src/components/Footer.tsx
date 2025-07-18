import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-jet text-white py-8 md:py-16">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/09f2d9a3-de1d-40b3-9c16-39796000e75e.png" 
                alt="CCC Logo" 
                className="w-10 h-10 md:w-12 md:h-12 mr-4"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">Career Catalyst Community</h3>
                <p className="text-xs md:text-base text-brand-silver">Learning to Earning Campaign</p>
              </div>
            </div>
            <p className="text-brand-silver leading-relaxed mb-6 max-w-md text-sm md:text-base">
              A non-profit initiative dedicated to bridging industry gaps and empowering 
              individuals to transform their skills into sustainable income opportunities.
            </p>
            <div className="mb-4">
              <p className="text-brand-silver text-xs md:text-base">
                <span className="font-semibold">Email:</span> 
                <a href="mailto:careercatalystcommunity@gmail.com" className="text-primary hover:underline ml-2 break-all">
                  careercatalystcommunity@gmail.com
                </a>
              </p>
            </div>
            <div className="flex space-x-2 md:space-x-4">
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
            <h4 className="text-base md:text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="/collaborators" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">Join Movement</a></li>
              <li><a href="/collaborators" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">Collaborators</a></li>
              <li><a href="/testimonials" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">Testimonials</a></li>
              <li><a href="/queries" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">Ask Queries</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-6 text-primary">Support</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">WhatsApp Support</a></li>
              <li><a href="mailto:careercatalystcommunity@gmail.com" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">Email Support</a></li>
              <li><a href="/#support" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">Support Our Vision</a></li>
              <li><a href="/collaborators" className="text-brand-silver hover:text-primary transition-colors duration-300 text-xs md:text-base">Become a Partner</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-brand-silver/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-brand-silver mb-4 md:mb-0 text-xs md:text-base">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary mx-2" />
            <span>by Career Catalyst Community</span>
          </div>
          <p className="text-brand-silver text-xs md:text-base">
            © 2024 CCC Learning to Earning Campaign. A Non-Profit Initiative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
