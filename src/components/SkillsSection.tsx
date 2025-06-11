
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
    <section className="py-24 brand-cosmic">
      <div className="w-full max-w-none px-8 lg:px-16">
        {/* Hero-style heading section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-brand-oxford mb-6 leading-tight">
            Learn. Grow. <span className="text-primary">Earn.</span>
          </h1>
          
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-xl md:text-2xl lg:text-2xl text-brand-jet leading-relaxed mb-8 font-medium">
              Join specialized communities for each skill area and start your journey from learning to earning. 
              Connect with experts, get resources, and grow your career.
            </p>
            
            {/* Enhanced mission statement with brand identity */}
            <div className="bg-gradient-to-r from-primary/5 via-brand-cosmic to-primary/5 rounded-2xl p-8 border-l-8 border-primary shadow-xl max-w-6xl mx-auto">
              <p className="text-xl md:text-2xl font-bold text-brand-oxford mb-4 leading-tight">
                This is a non-profit campaign dedicated to providing students with essential skills at no cost.
              </p>
              <p className="text-lg md:text-xl text-brand-jet font-medium">
                A social impact initiative by <span className="font-bold text-brand-oxford">CCC Company</span> – redefining education for a brighter future.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Enhanced smaller cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-card border-border h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[340px]"
            >
              <CardHeader className="text-center pb-4 px-6 flex-grow">
                <div className={`mx-auto mb-6 p-4 rounded-full w-fit ${skill.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <skill.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford leading-tight mb-4 group-hover:text-primary transition-colors duration-300 min-h-[48px] flex items-center justify-center">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-6 mt-auto">
                <Button 
                  className="w-full bg-brand-oxford hover:bg-primary text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => handleJoinNow(skill.link)}
                >
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tablet Layout - 3 cards per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-5 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-card border-border h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[320px]"
            >
              <CardHeader className="text-center pb-4 px-5 flex-grow">
                <div className={`mx-auto mb-5 p-3 rounded-full w-fit ${skill.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <skill.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg font-bold text-brand-oxford leading-tight mb-3 group-hover:text-primary transition-colors duration-300 min-h-[40px] flex items-center justify-center">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-sm flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-5 pb-5 mt-auto">
                <Button 
                  className="w-full bg-brand-oxford hover:bg-primary text-white transition-all duration-300 text-sm py-3 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
                  onClick={() => handleJoinNow(skill.link)}
                >
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - Carousel for smaller screens */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {skills.map((skill, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2">
                  <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-card border-border h-full flex flex-col hover:border-primary/30 min-h-[300px]">
                    <CardHeader className="text-center pb-4 px-5 flex-grow">
                      <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${skill.color} group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                        <skill.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-lg font-bold text-brand-oxford mb-3 group-hover:text-primary transition-colors duration-300 min-h-[40px] flex items-center justify-center">
                        {skill.title}
                      </CardTitle>
                      <CardDescription className="text-brand-jet leading-relaxed text-sm flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                        {skill.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center px-5 pb-5 mt-auto">
                      <Button 
                        className="w-full bg-brand-oxford hover:bg-primary text-white transition-all duration-300 text-sm py-3 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl"
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
