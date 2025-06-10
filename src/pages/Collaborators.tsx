import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Video, Rocket, Users, ExternalLink, CheckCircle, Star, TrendingUp, Network, Award, Heart, Target } from "lucide-react";

const Collaborators = () => {
  const collaboratorTypes = [
    {
      icon: Building2,
      title: "Industry Partners",
      description: "Established companies and organizations looking to connect with fresh talent and give back to the community.",
      benefits: [
        "Access to pre-screened fresh talent pool",
        "Brand visibility in educational communities",
        "CSR partnership opportunities",
        "Direct pipeline for internships and placements",
        "Co-branded educational content opportunities"
      ],
      color: "bg-blue-500/10 text-blue-600",
      bgGradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Video,
      title: "Content Creators",
      description: "YouTubers, bloggers, and social media influencers passionate about career development and education.",
      benefits: [
        "Collaborative content creation opportunities",
        "Access to career development stories and case studies",
        "Cross-promotion across our community channels",
        "Early access to industry insights and trends",
        "Revenue sharing on educational content"
      ],
      color: "bg-purple-500/10 text-purple-600",
      bgGradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Visionary entrepreneurs and startup leaders who understand the challenges of building from scratch.",
      benefits: [
        "Access to motivated and hungry talent",
        "Startup ecosystem networking opportunities",
        "Mentorship exchange programs",
        "Early-stage hiring pipeline",
        "Community support for your startup journey"
      ],
      color: "bg-green-500/10 text-green-600",
      bgGradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Users,
      title: "Mentors & Coaches",
      description: "Experienced professionals and life coaches dedicated to guiding the next generation of professionals.",
      benefits: [
        "Structured mentorship program participation",
        "Personal branding and thought leadership opportunities",
        "Direct impact measurement and success stories",
        "Professional development workshops hosting",
        "Recognition in our mentor hall of fame"
      ],
      color: "bg-orange-500/10 text-orange-600",
      bgGradient: "from-orange-500/20 to-orange-600/20"
    }
  ];

  const collaboratorPerks = [
    {
      icon: Star,
      title: "Exclusive Access",
      description: "Get early access to our community insights, career trends, and success metrics."
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Connect with other collaborators and build meaningful professional relationships."
    },
    {
      icon: TrendingUp,
      title: "Growth Partnership",
      description: "Grow your brand, business, or personal impact while helping others succeed."
    },
    {
      icon: Award,
      title: "Recognition & Impact",
      description: "Be recognized as a catalyst for change in the career development ecosystem."
    }
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
                <p className="text-sm text-brand-cosmic">Collaborators Program</p>
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
                onClick={() => window.location.href = '/testimonials'}
              >
                Testimonials
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
              Collaborate <span className="text-primary">With Us</span>
            </h1>
            <p className="text-xl text-brand-cosmic mb-8 leading-relaxed">
              Join our mission to bridge the gap between learning and earning. 
              Together, we can transform careers and create opportunities for underserved communities.
            </p>
          </div>
        </div>
      </section>

      {/* Collaborator Types */}
      <section className="py-20 brand-cosmic">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-6">
              Choose Your <span className="text-primary">Collaboration Path</span>
            </h2>
            <p className="text-xl text-brand-jet max-w-3xl mx-auto leading-relaxed">
              Whether you're an industry leader, content creator, startup founder, or mentor, 
              there's a perfect way for you to make an impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {collaboratorTypes.map((type, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${type.bgGradient}`}></div>
                <CardHeader className="pb-4">
                  <div className={`p-3 rounded-full ${type.color} mb-4 group-hover:scale-110 transition-transform duration-300 w-fit`}>
                    <type.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-brand-jet leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-oxford mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-brand-jet">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full bg-brand-oxford hover:bg-brand-oxford/90 text-white transition-all duration-300 transform group-hover:scale-105"
                    onClick={() => window.open('https://forms.gle/yzKD37P8A6sGG8446', '_blank')}
                  >
                    Join as {type.title.split(' ')[0]}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Perks */}
      <section className="py-20 brand-oxford text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Collaboration <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-brand-cosmic max-w-3xl mx-auto leading-relaxed">
              Beyond making a difference, here's what every collaborator gets access to.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaboratorPerks.map((perk, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/10 backdrop-blur-sm border-white/20 text-center"
              >
                <CardHeader>
                  <div className="p-3 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors duration-300 mx-auto w-fit">
                    <perk.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">
                    {perk.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brand-cosmic leading-relaxed">
                    {perk.description}
                  </CardDescription>
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
                <h3 className="text-3xl font-bold text-brand-oxford mb-6">Ready to Make an Impact?</h3>
                <p className="text-brand-jet mb-8 text-lg leading-relaxed">
                  Join hundreds of collaborators who are already transforming careers and creating opportunities. 
                  Your expertise and passion can be the catalyst someone needs to change their life.
                </p>
                <Button 
                  size="lg" 
                  className="bg-brand-oxford hover:bg-brand-oxford/90 text-white px-12 py-6 text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://forms.gle/yzKD37P8A6sGG8446', '_blank')}
                >
                  Start Collaborating Today
                  <ExternalLink className="ml-3 h-6 w-6" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborators;
