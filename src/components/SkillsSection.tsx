
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Megaphone, 
  Briefcase, 
  TrendingUp, 
  PenTool, 
  Users, 
  Linkedin, 
  FileText 
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Technology & IT",
      description: "Build in-demand skills in coding, cloud, cybersecurity, and data science.",
      link: "https://chat.whatsapp.com/D4JiEEd7iQl7fpa46X9fid",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing & Content Creation",
      description: "Master SEO, social media, and video content to grow brands online.",
      link: "https://chat.whatsapp.com/BnfyBglvaJUEAgtMbLYQiF",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship & Freelancing",
      description: "Learn how to start, scale, and monetize your skills independently.",
      link: "https://chat.whatsapp.com/BuWVSJ4PVzuDZpYh44bWN1",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Business & Management",
      description: "Develop strategic, operational, and leadership capabilities for business success.",
      link: "https://chat.whatsapp.com/LWglhjMlXMVH9aCk0eZ5DH",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: PenTool,
      title: "Creative & Design",
      description: "Explore graphic design, UI/UX, and visual storytelling like a pro.",
      link: "https://chat.whatsapp.com/H7IOt3UFckhISSrgarb0KJ",
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      icon: Users,
      title: "Professional & Soft Skills",
      description: "Enhance communication, teamwork, and emotional intelligence at work.",
      link: "https://chat.whatsapp.com/JlizN4fDRB54OhjYDQJwOp",
      color: "bg-indigo-500/10 text-indigo-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn & AI Prompt Expert",
      description: "Unlock career growth with optimized LinkedIn profiles and powerful AI prompts.",
      link: "https://chat.whatsapp.com/IRqY9pN6uINKh8wE3VHlBj",
      color: "bg-blue-700/10 text-blue-700"
    },
    {
      icon: FileText,
      title: "Job Preparations",
      description: "Prepare for interviews, resumes, and job tests with industry-aligned tools.",
      link: "https://chat.whatsapp.com/C1czd9ajIkUG7cI3iVisjp",
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const handleJoinNow = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-oxford mb-6">
            Learn. Grow. <span className="text-primary">Earn.</span>
          </h2>
          <p className="text-lg text-brand-jet max-w-2xl mx-auto leading-relaxed mb-12">
            Join specialized communities for each skill area and start your journey from learning to earning. 
            Connect with experts, get resources, and grow your career.
          </p>
          <div className="bg-primary/5 rounded-xl p-8 max-w-5xl mx-auto border-l-4 border-primary shadow-lg">
            <p className="text-xl font-bold text-brand-oxford mb-3">
              This is a non-profit campaign dedicated to providing students with essential skills at no cost.
            </p>
            <p className="text-brand-jet text-lg">
              A social impact initiative by <span className="font-semibold text-brand-oxford">CCC Company</span> – redefining education for a brighter future.
            </p>
          </div>
        </div>

        {/* Desktop Layout - 8 cards in a row with full breadth */}
        <div className="hidden lg:grid lg:grid-cols-8 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-card border-border h-full flex flex-col hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4 px-4 flex-grow">
                <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${skill.color} group-hover:scale-125 transition-transform duration-500`}>
                  <skill.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-base font-bold text-brand-oxford leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-sm flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-4 pb-6 mt-auto">
                <Button 
                  size="sm"
                  className="w-full bg-brand-oxford hover:bg-primary text-card-foreground transition-all duration-300 text-sm py-3 font-semibold hover:shadow-lg transform hover:scale-105"
                  onClick={() => handleJoinNow(skill.link)}
                >
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Layout - Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-3 md:-ml-4">
              {skills.map((skill, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                  <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-card border-border h-full flex flex-col hover:border-primary/20">
                    <CardHeader className="text-center pb-6 px-6 flex-grow">
                      <div className={`mx-auto mb-6 p-4 rounded-full w-fit ${skill.color} group-hover:scale-125 transition-transform duration-500`}>
                        <skill.icon className="h-10 w-10" />
                      </div>
                      <CardTitle className="text-xl font-bold text-brand-oxford mb-4 group-hover:text-primary transition-colors duration-300">
                        {skill.title}
                      </CardTitle>
                      <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                        {skill.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center px-6 pb-6 mt-auto">
                      <Button 
                        className="w-full bg-brand-oxford hover:bg-primary text-card-foreground transition-all duration-300 text-base py-4 font-semibold hover:shadow-lg transform hover:scale-105"
                        onClick={() => handleJoinNow(skill.link)}
                      >
                        Join Now
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
