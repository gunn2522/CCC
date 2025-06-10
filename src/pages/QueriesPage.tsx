
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, HelpCircle, Users, BookOpen, ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QueriesPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    queryType: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const queryTypes = [
    {
      icon: BookOpen,
      title: "Career Guidance",
      description: "Get personalized advice on career paths, skill development, and industry insights.",
      value: "career-guidance"
    },
    {
      icon: Users,
      title: "LinkedIn Optimization",
      description: "Expert help with profile optimization, networking strategies, and professional branding.",
      value: "linkedin-optimization"
    },
    {
      icon: HelpCircle,
      title: "Job Preparation",
      description: "Interview tips, resume writing, and preparation strategies for your dream job.",
      value: "job-preparation"
    },
    {
      icon: MessageCircle,
      title: "General Support",
      description: "Any questions about our services, community, or how we can help you grow.",
      value: "general-support"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "support@careercatalyst.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "WhatsApp Support",
      content: "+91 XXXXX XXXXX",
      description: "Quick support via WhatsApp"
    },
    {
      icon: MapPin,
      title: "Community Base",
      content: "Pan India Operations",
      description: "Serving students nationwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "24-48 Hours",
      description: "Average response time"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQueryTypeSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      queryType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.queryType || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Query Submitted Successfully!",
      description: "We'll get back to you within 24-48 hours. Thank you for reaching out!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      queryType: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
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
                <p className="text-sm text-brand-cosmic">Ask Your Queries</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/10"
                onClick={() => window.location.href = '/'}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/10"
                onClick={() => window.location.href = '/collaborators'}
              >
                Collaborators
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary hover:bg-primary/10"
                onClick={() => window.location.href = '/testimonials'}
              >
                Testimonials
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 brand-oxford text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We're Here to <span className="text-primary">Help</span>
            </h1>
            <p className="text-xl text-brand-cosmic mb-8 leading-relaxed">
              Have questions about your career? Need guidance on LinkedIn optimization? 
              Want to know more about our programs? We're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Query Types */}
      <section className="py-16 brand-cosmic">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-oxford mb-4">
              What Can We Help You <span className="text-primary">With?</span>
            </h2>
            <p className="text-lg text-brand-jet max-w-2xl mx-auto">
              Choose the area where you need support, and we'll connect you with the right expert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {queryTypes.map((query, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 ${
                  formData.queryType === query.value 
                    ? 'border-primary bg-primary/5' 
                    : 'border-secondary bg-white hover:border-primary/50'
                }`}
                onClick={() => handleQueryTypeSelect(query.value)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`p-3 rounded-full mb-3 mx-auto w-fit transition-colors duration-300 ${
                    formData.queryType === query.value 
                      ? 'bg-primary/20' 
                      : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <query.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-oxford">
                    {query.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-brand-jet leading-relaxed text-sm">
                    {query.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Query Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Submit Your <span className="text-primary">Query</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will get back to you within 24-48 hours.
              </p>
            </div>

            <Card className="bg-white border-secondary">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-brand-oxford font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-brand-oxford font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-brand-oxford font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="college" className="text-brand-oxford font-medium">
                        College/Institution
                      </Label>
                      <Input
                        id="college"
                        name="college"
                        type="text"
                        placeholder="Enter your college name"
                        value={formData.college}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-brand-oxford font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Brief subject of your query"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-brand-oxford font-medium">
                      Your Query/Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your query in detail. The more information you provide, the better we can help you."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="bg-brand-oxford hover:bg-brand-oxford/90 text-white px-12 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Submit Query
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 brand-oxford text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Other Ways to <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-brand-cosmic max-w-2xl mx-auto">
              Prefer to reach out directly? Here are all the ways you can connect with our support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/10 backdrop-blur-sm border-white/20 text-center"
              >
                <CardHeader>
                  <div className="p-3 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors duration-300 mx-auto w-fit">
                    <contact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-semibold mb-2">{contact.content}</p>
                  <CardDescription className="text-brand-cosmic">
                    {contact.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QueriesPage;
