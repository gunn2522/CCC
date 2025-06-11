
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";

const QueriesSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Get instant answers to your questions through our dedicated WhatsApp support.",
      action: "Chat Now",
      link: "https://chat.whatsapp.com/HA2OtWFBunc324bQFSUNuG",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions and we'll respond within 24 hours.",
      action: "Send Email",
      link: "mailto:careercatalystcommunity@gmail.com",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      description: "Book a one-on-one consultation call with our career guidance experts.",
      action: "Book Call",
      link: "#",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get answers to frequently asked questions instantly through our help center.",
      action: "Browse FAQ",
      link: "#",
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  return (
    <section id="queries" className="py-24 brand-oxford">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Still Have <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-2xl text-brand-cosmic max-w-6xl mx-auto leading-relaxed font-medium">
            We're here to help you every step of the way. Choose your preferred method to get in touch with our team.
          </p>
          <p className="text-lg md:text-xl text-secondary mt-4 font-medium">
            Email us at: <span className="text-primary font-bold">careercatalystcommunity@gmail.com</span>
          </p>
        </div>

        {/* Desktop Layout - 4 cards per row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[340px]"
            >
              <CardHeader className="text-center pb-4 px-6 flex-grow">
                <div className={`mx-auto mb-6 p-4 rounded-full w-fit ${method.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <method.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[48px] flex items-center justify-center">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 mt-auto">
                <Button 
                  className="w-full bg-brand-oxford hover:bg-primary text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tablet Layout - 3 cards per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-5 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[320px]"
            >
              <CardHeader className="text-center pb-4 px-5 flex-grow">
                <div className={`mx-auto mb-5 p-3 rounded-full w-fit ${method.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <method.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-base font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[40px] flex items-center justify-center">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-sm flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-5 pb-5 mt-auto">
                <Button 
                  className="w-full bg-brand-oxford hover:bg-primary text-white transition-all duration-300 text-sm py-3 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - 1 card per row */}
        <div className="md:hidden space-y-5">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[300px]"
            >
              <CardHeader className="text-center pb-4 px-5 flex-grow">
                <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${method.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <method.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-base font-bold text-brand-oxford mb-3 group-hover:text-primary transition-colors duration-300 min-h-[40px] flex items-center justify-center">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-sm flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-5 pb-5 mt-auto">
                <Button 
                  className="w-full bg-brand-oxford hover:bg-primary text-white transition-all duration-300 text-sm py-3 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueriesSection;
