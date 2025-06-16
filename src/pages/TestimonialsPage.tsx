
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp, Users, Award, Heart } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Harsh Rana",
      role: "Third-year Student",
      location: "Local Engineering College",
      content: "I discovered Career Catalyst Community just 10 days ago and it's already transformed my perspective! I was completely confused about my career direction, but their LinkedIn optimization live session showed me how to present myself professionally. The mentors were patient and gave practical tips that I could implement immediately. Now I actually have a plan!",
      rating: 5,
      image: "HR",
      achievement: "Optimized LinkedIn profile and gained career clarity"
    },
    {
      name: "Ishan Chander",
      role: "College Student",
      location: "Tier-3 College, Himachal Pradesh",
      content: "CCC started just 15 days ago but they've already delivered more value than any other career guidance I've received. Their Instagram live sessions on documentation for internships were incredibly detailed. I learned exactly what documents to prepare and how to format them. The one-on-one LinkedIn connectivity session helped me understand networking properly.",
      rating: 5,
      image: "IC",
      achievement: "Mastered internship documentation and networking"
    },
    {
      name: "Ishika Semwal",
      role: "Third-tier College Student",
      location: "Government College, Uttarakhand",
      content: "Being from a small government college, I always felt behind students from premier institutions. Career Catalyst Community changed that mindset completely! Through their social media channels and live sessions, I learned that with the right guidance, anyone can build a strong professional presence. Their LinkedIn tips were game-changing.",
      rating: 5,
      image: "IS",
      achievement: "Built confidence and professional online presence"
    },
    {
      name: "Sukhwinder Singh",
      role: "Engineering Student",
      location: "Regional Technical College, Punjab",
      content: "I was torn between focusing on technical skills vs soft skills when I found CCC two weeks ago. Their personalized approach through Instagram and LinkedIn interactions helped me create a balanced development plan. The documentation guidelines for internship applications were exactly what I needed. Finally, someone who understands students like us!",
      rating: 5,
      image: "SS",
      achievement: "Created balanced skill development roadmap"
    },
    {
      name: "Priya Joshi",
      role: "Second-year Student",
      location: "Local Commerce College",
      content: "I joined CCC's community when they were just starting out, and I'm so glad I did! Their live sessions on career planning opened my eyes to possibilities I never knew existed. The way they explain complex career concepts in simple terms makes everything so clear. Their Instagram content is genuinely helpful, not just motivational fluff.",
      rating: 5,
      image: "PJ",
      achievement: "Discovered new career opportunities and pathways"
    },
    {
      name: "Arjun Mehta",
      role: "Final Year Student",
      location: "Private College, Rajasthan",
      content: "What impressed me most about Career Catalyst Community is their authentic approach. They're new but already showing real impact through their social channels. The LinkedIn connectivity strategies they shared helped me connect with industry professionals. Their documentation tips for job applications gave me the confidence to start applying to companies I thought were out of my reach.",
      rating: 5,
      image: "AM",
      achievement: "Successfully connected with industry professionals"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Students Guided",
      description: "In just 15 days of operation"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Clarity Achieved",
      description: "Students gained career direction"
    },
    {
      icon: Award,
      number: "50+",
      label: "LinkedIn Profiles",
      description: "Optimized through live sessions"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Free Guidance",
      description: "Always accessible to everyone"
    }
  ];

  const affirmations = [
    "Your college's tier doesn't determine your career's potential.",
    "With the right guidance, every student can build a strong professional presence.",
    "Career confusion is normal - clarity comes with proper mentorship.",
    "Small steps taken consistently lead to significant career transformations.",
    "Your background is your story, not your limitation."
  ];

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
                <p className="text-sm text-brand-cosmic">Success Stories</p>
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
                onClick={() => window.location.href = '/queries'}
              >
                Ask Queries
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
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-brand-cosmic mb-8 leading-relaxed">
              Real impact stories from our first 15 days! See how students from tier-3 colleges 
              found career clarity through our live sessions, LinkedIn guidance, and social media mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 brand-cosmic">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-secondary text-center"
              >
                <CardHeader className="pb-4">
                  <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300 mx-auto w-fit">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {stat.number}
                  </CardTitle>
                  <CardDescription className="text-brand-oxford font-semibold">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-jet text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Early Impact <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These testimonials are from students who joined us in our very first weeks. 
              Real people, real stories, real impact - even in our early days.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-secondary h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  
                  <p className="text-brand-jet mb-4 leading-relaxed text-sm flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-oxford">{testimonial.name}</h4>
                        <p className="text-brand-jet text-xs">{testimonial.role}</p>
                        <p className="text-primary text-xs">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-2 rounded text-xs text-green-700 font-medium">
                      ✅ {testimonial.achievement}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Positive Affirmations */}
      <section className="py-20 brand-oxford text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Remember These <span className="text-primary">Truths</span>
            </h2>
            <p className="text-xl text-brand-cosmic max-w-3xl mx-auto leading-relaxed">
              Powerful reminders for every student on their career journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affirmations.map((affirmation, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/10 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-8 text-center">
                  <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-white text-lg font-medium leading-relaxed">
                    {affirmation}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 brand-cosmic">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-primary/10 backdrop-blur-sm border-primary/20">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-brand-oxford mb-6">Ready to Join Our Growing Community?</h3>
                <p className="text-brand-jet mb-8 text-lg leading-relaxed">
                  We may be new, but we're already making a real difference. Join our community and 
                  experience the same career transformation as these students!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-brand-oxford hover:bg-brand-oxford/90 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = '/queries'}
                  >
                    Start Your Journey
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-brand-oxford text-brand-oxford hover:bg-brand-oxford hover:text-white px-8 py-4 transition-all duration-300"
                    onClick={() => window.location.href = '/'}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
