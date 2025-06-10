
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-6">
            Skills You Can <span className="text-primary">Learn & Earn</span> From
          </h2>
          <p className="text-xl text-brand-jet max-w-3xl mx-auto leading-relaxed mb-8">
            Join specialized communities for each skill area and start your journey from learning to earning. 
            Connect with experts, get resources, and grow your career.
          </p>
          <div className="bg-primary/10 rounded-lg p-6 max-w-4xl mx-auto border-l-4 border-primary">
            <p className="text-lg font-semibold text-brand-oxford mb-2">
              This is a non-profit campaign dedicated to providing students with essential skills at no cost.
            </p>
            <p className="text-brand-jet">
              A social impact initiative by CCC Company – redefining education for a brighter future.
            </p>
          </div>
        </div>

        {/* Desktop Layout - 8 cards in a row with equal distribution */}
        <div className="hidden lg:grid lg:grid-cols-8 gap-4 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-secondary h-full flex flex-col"
            >
              <CardHeader className="text-center pb-3 px-3 flex-grow">
                <div className={`mx-auto mb-3 p-2 rounded-full w-fit ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-sm font-bold text-brand-oxford leading-tight mb-2">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-brand-jet leading-relaxed text-xs flex-grow">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center px-3 pb-4 mt-auto">
                <Button 
                  size="sm"
                  className="w-full bg-brand-oxford hover:bg-brand-oxford/90 text-white transition-all duration-300 text-xs py-2"
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
            <CarouselContent className="-ml-2 md:-ml-4">
              {skills.map((skill, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-secondary h-full flex flex-col">
                    <CardHeader className="text-center pb-4 flex-grow">
                      <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-lg font-bold text-brand-oxford mb-2">
                        {skill.title}
                      </CardTitle>
                      <CardDescription className="text-brand-jet leading-relaxed flex-grow">
                        {skill.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center mt-auto">
                      <Button 
                        className="w-full bg-brand-oxford hover:bg-brand-oxford/90 text-white transition-all duration-300"
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
