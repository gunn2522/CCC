
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp, Users, Award, Heart } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "School Student",
      location: "Tier-3 City, Rajasthan",
      content: "I never thought someone from a small town like me could dream big. CCC helped me optimize my LinkedIn profile and prepare for interviews. Within 2 months, I landed my dream internship! Their AI-powered career guidance was exactly what I needed. The mentors were so patient and understanding.",
      rating: 5,
      image: "PS",
      achievement: "Secured dream internship at tech startup"
    },
    {
      name: "Rahul Kumar",
      role: "LinkedIn User",
      location: "Rural College, Bihar",
      content: "Coming from a small town college, I had no idea about industry standards. CCC's mentorship and job preparation tips transformed my career prospects completely. They taught me how to present myself professionally and use AI tools for career growth. Now I'm confident about my future!",
      rating: 5,
      image: "RK",
      achievement: "Increased LinkedIn connections by 300%"
    },
    {
      name: "Anjali Patel",
      role: "College Student",
      location: "Government College, Gujarat",
      content: "The career consultation sessions were incredibly valuable. They helped me understand my strengths and guided me towards the right career path. The personalized roadmap they created for me was life-changing. I finally know what I want to do with my life!",
      rating: 5,
      image: "AP",
      achievement: "Clear career roadmap and direction"
    },
    {
      name: "Arjun Singh",
      role: "LinkedIn User",
      location: "Small Town, Uttar Pradesh",
      content: "CCC's approach to using AI for career growth is revolutionary. They don't just give advice, they provide practical tools and strategies that actually work. The free consultation helped me understand how to leverage technology for my career advancement.",
      rating: 5,
      image: "AS",
      achievement: "Mastered AI tools for career growth"
    },
    {
      name: "Deepika Yadav",
      role: "School Student",
      location: "Village School, Madhya Pradesh",
      content: "I was scared about my future after 12th grade. CCC showed me that there are so many opportunities available if you know how to find them. Their guidance on career planning and skill development gave me hope and direction. Thank you for believing in students like us!",
      rating: 5,
      image: "DY",
      achievement: "Gained confidence and career clarity"
    },
    {
      name: "Vikash Gupta",
      role: "College Student",
      location: "Local College, Jharkhand",
      content: "The best part about CCC is that they understand our struggles. They know what it's like to come from backgrounds where career guidance is rare. Their practical tips on resume building and interview preparation were game-changers for me.",
      rating: 5,
      image: "VG",
      achievement: "Professional resume and interview skills"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Students Helped",
      description: "From tier-2 and tier-3 cities"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Success Rate",
      description: "In career goal achievement"
    },
    {
      icon: Award,
      number: "200+",
      label: "LinkedIn Profiles",
      description: "Optimized and improved"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Free Support",
      description: "No hidden charges ever"
    }
  ];

  const affirmations = [
    "Your background doesn't define your future - your determination does.",
    "Every expert was once a beginner who refused to give up.",
    "Your small town story can become your biggest strength.",
    "Success is not about where you come from, but where you're going.",
    "With the right guidance, any dream is achievable."
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
              Real stories from real students who transformed their careers with our guidance. 
              From small towns to big dreams - see how we're making a difference.
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
              Hear From Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These testimonials represent the voices of students from underserved communities 
              who found their path to success through our support.
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
              Believe in <span className="text-primary">Yourself</span>
            </h2>
            <p className="text-xl text-brand-cosmic max-w-3xl mx-auto leading-relaxed">
              Remember these powerful truths as you embark on your career journey.
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
                <h3 className="text-3xl font-bold text-brand-oxford mb-6">Ready to Write Your Success Story?</h3>
                <p className="text-brand-jet mb-8 text-lg leading-relaxed">
                  Join thousands of students who have transformed their careers with our guidance. 
                  Your success story could be next!
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
