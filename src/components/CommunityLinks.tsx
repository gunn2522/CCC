
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Users, Calendar, BookOpen, Video } from "lucide-react";

const CommunityLinks = () => {
  const communities = [
    {
      icon: MessageCircle,
      title: "Discord Community",
      description: "Join our vibrant Discord server for real-time discussions, Q&A sessions, and networking with fellow learners.",
      link: "#discord",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Users,
      title: "LinkedIn Group",
      description: "Connect with professionals in our LinkedIn community for career insights and industry networking.",
      link: "#linkedin",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Calendar,
      title: "Weekly Webinars",
      description: "Attend our weekly live sessions featuring industry experts sharing insights on earning strategies.",
      link: "#webinars",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access our comprehensive library of guides, templates, and tools for your learning journey.",
      link: "#resources",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Video,
      title: "YouTube Channel",
      description: "Subscribe to our channel for tutorials, success stories, and tips on converting skills to income.",
      link: "#youtube",
      color: "bg-red-500/10 text-red-600"
    }
  ];

  return (
    <section className="py-20 brand-cosmic">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-6">
            Join Our <span className="text-primary">Communities</span>
          </h2>
          <p className="text-xl text-brand-jet max-w-3xl mx-auto leading-relaxed">
            Connect, learn, and grow with like-minded individuals across multiple platforms. 
            Choose the community that best fits your learning style and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {communities.map((community, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-secondary"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${community.color} group-hover:scale-110 transition-transform duration-300`}>
                  <community.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-oxford">
                  {community.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-brand-jet mb-6 leading-relaxed">
                  {community.description}
                </CardDescription>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                  onClick={() => window.open(community.link, '_blank')}
                >
                  Join Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLinks;
