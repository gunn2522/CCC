
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const Navigation = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 brand-oxford border-b border-border">
      <div className="w-full max-w-none px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/09f2d9a3-de1d-40b3-9c16-39796000e75e.png" 
              alt="CCC Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Career Catalyst Community</h1>
              <p className="text-base text-brand-cosmic">Learning to Earning Campaign</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="text-white hover:text-primary hover:bg-primary/10 text-lg"
              onClick={() => scrollToSection('home')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-primary hover:bg-primary/10 text-lg"
              onClick={() => navigateToPage('/collaborators')}
            >
              Collaborators
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-primary hover:bg-primary/10 text-lg"
              onClick={() => navigateToPage('/testimonials')}
            >
              Testimonials
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-primary hover:bg-primary/10 text-lg"
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
  );
};

export default Navigation;
