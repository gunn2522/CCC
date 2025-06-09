
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-jet text-white py-16">
      <div className="container mx-auto px-6">
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
              Empowering individuals to transform their skills into sustainable income 
              through comprehensive learning programs and community support.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-brand-silver text-brand-silver hover:bg-primary hover:border-primary">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-brand-silver text-brand-silver hover:bg-primary hover:border-primary">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-brand-silver text-brand-silver hover:bg-primary hover:border-primary">
                <MapPin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-brand-silver hover:text-primary transition-colors duration-300">About Campaign</a></li>
              <li><a href="#courses" className="text-brand-silver hover:text-primary transition-colors duration-300">Learning Paths</a></li>
              <li><a href="#success" className="text-brand-silver hover:text-primary transition-colors duration-300">Success Stories</a></li>
              <li><a href="#community" className="text-brand-silver hover:text-primary transition-colors duration-300">Community</a></li>
              <li><a href="#resources" className="text-brand-silver hover:text-primary transition-colors duration-300">Resources</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Support</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-brand-silver hover:text-primary transition-colors duration-300">Help Center</a></li>
              <li><a href="#contact" className="text-brand-silver hover:text-primary transition-colors duration-300">Contact Us</a></li>
              <li><a href="#faq" className="text-brand-silver hover:text-primary transition-colors duration-300">FAQ</a></li>
              <li><a href="#privacy" className="text-brand-silver hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#terms" className="text-brand-silver hover:text-primary transition-colors duration-300">Terms of Service</a></li>
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
            © 2024 CCC Learning to Earning Campaign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
