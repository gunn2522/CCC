import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Users, Briefcase, UserCheck, UserCog, ExternalLink } from "lucide-react";
import Hero from "@/components/Hero";

const roles = [
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: "Internships",
    description: "Gain hands-on experience and make a real impact in the career development space. Work with our passionate team to help students across India find their career paths.",
    link: "/internships",
    button: "Apply for Internship",
    type: "link"
  },
  {
    icon: <UserCheck className="h-12 w-12 text-primary" />,
    title: "Moderators",
    description: "Help us maintain a positive, supportive, and engaging environment in our communities. As a moderator, you'll play a key role in guiding discussions and supporting members.",
    link: "/moderators",
    button: "Apply for Moderator",
    type: "link"
  },
  {
    icon: <UserCog className="h-12 w-12 text-primary" />,
    title: "Community Managers",
    description: "Lead and grow our online communities. As a community manager, you'll organize events, foster engagement, and help shape the future of our movement.",
    link: "/community-managers",
    button: "Apply for Community Manager",
    type: "link"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero hideHeroSection={true} />
      <main className="flex-1 py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-oxford mb-8">
              Join Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-jet max-w-3xl mx-auto leading-relaxed font-medium">
              Looking for valuable experience? Apply for internships, become a moderator, or lead as a community manager at Career Catalyst Community. Be part of our mission to bridge industry gaps and empower the next generation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <Card key={role.title} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col">
                <CardHeader className="text-center pb-4 px-6 flex-grow">
                  <div className="mx-auto mb-6 p-4 rounded-full w-fit bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shadow-lg">
                    {role.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                    {role.title}
                  </CardTitle>
                  <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6 mt-auto">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl whitespace-normal"
                  >
                    <a href={role.link}>{role.button}<Mail className="ml-2 h-5 w-5" /></a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-brand-oxford mb-4">Stay Connected</h3>
            <p className="text-brand-jet mb-6 max-w-xl mx-auto">
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
        </div>
      </main>
    </div>
  );
};

export default Careers; 