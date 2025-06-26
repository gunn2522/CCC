import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Mic, Users, Award, Brain, Network, Linkedin, Instagram } from "lucide-react";

const communities = [
  { name: "Technology & IT", link: "#" },
  { name: "Creatives & Design", link: "#" },
  { name: "Business & Management", link: "#" },
  { name: "Entrepreneurship & Freelancing", link: "#" },
  { name: "Professional & Soft Skills", link: "#" },
  { name: "Digital Marketing & Content Creation", link: "#" },
  { name: "Job Preparations", link: "#" },
  { name: "LinkedIn & AI Prompting", link: "#" },
];

const benefits = [
  { icon: <Globe className="inline h-6 w-6 text-primary mr-2" />, text: "Join an existing, engaged community of self-learners" },
  { icon: <Linkedin className="inline h-6 w-6 text-primary mr-2" />, text: "Your name and sessions featured on LinkedIn & Instagram" },
  { icon: <Brain className="inline h-6 w-6 text-primary mr-2" />, text: "Build your portfolio and showcase mentorship experience" },
  { icon: <Mic className="inline h-6 w-6 text-primary mr-2" />, text: "Host workshops or demo sessions on real-world tools" },
  { icon: <Network className="inline h-6 w-6 text-primary mr-2" />, text: "Expand your network with educators, students, and founders" },
  { icon: <Award className="inline h-6 w-6 text-primary mr-2" />, text: "Certificate of Recognition + visibility as a domain expert" },
];

const Moderators = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Hero hideHeroSection={true} />
    <main className="flex-1 py-20 md:py-28">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-8 text-center">Apply as a Moderator</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Our Communities</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communities.map((c) => (
              <li key={c.name} className="bg-white rounded-xl p-4 flex items-center justify-between border border-primary/20">
                <span className="font-medium text-brand-oxford">{c.name}</span>
                <Button asChild className="ml-4 bg-primary text-white hover:bg-primary/90">
                  <a href={c.link} target="_blank" rel="noopener noreferrer">Apply</a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Benefits</h3>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center text-lg text-brand-jet">{b.icon}{b.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Moderators; 