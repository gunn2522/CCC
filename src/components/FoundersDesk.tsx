
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const FoundersDesk = () => {
  const founders = [
    {
      name: "Gunn Malhotra",
      role: "CEO & Founder",
      image: "/lovable-uploads/7adfc252-a554-4053-9df4-249d3847da2b.png",
      message: "Our vision at Career Catalyst Community is to bridge the gap between academic learning and industry expectations. Every student, regardless of their college tier, deserves access to quality career guidance. We're building a platform where confusion transforms into clarity, and potential becomes achievement.",
      type: "vision"
    },
    {
      name: "Arshpreet Singh",
      role: "COO & Co-Founder", 
      image: "/lovable-uploads/8e00b038-d236-45fc-9363-9a3ed25ffafe.png",
      message: "Starting this journey has been incredibly rewarding. In just 15 days, we've seen students discover their paths, optimize their professional presence, and gain confidence in their career choices. This is just the beginning - together, we're creating a movement that empowers every student to reach their full potential.",
      type: "motivation"
    }
  ];

  return (
    <section id="founders-desk" className="py-20 bg-background">
      <div className="w-full max-w-none px-8 lg:px-16">
        {/* Eye-catching banner */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-2xl border-4 border-primary/20 shadow-2xl max-w-4xl mx-auto">
            <p className="text-white font-bold text-xl md:text-2xl animate-pulse">
              ⚡ First of Its Kind: A Free Community Built to Uplift Everyone
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-oxford mb-8">
            From Founder's <span className="text-primary">Desk</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-jet max-w-4xl mx-auto leading-relaxed font-medium">
            A message from our founding team about our mission and vision for every student's success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full"
            >
              <CardContent className="p-8 flex flex-col h-full text-center">
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className={`w-full h-full object-cover ${index === 1 ? 'object-top' : ''}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-oxford mb-2">{founder.name}</h3>
                  <p className="text-primary font-semibold text-lg">{founder.role}</p>
                </div>
                
                <div className="flex-grow flex flex-col justify-center">
                  <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-brand-jet leading-relaxed text-lg italic">
                    "{founder.message}"
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    {founder.type === 'vision' ? 'CEO Vision' : 'Founding Team Message'}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom eye-catching message */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary to-primary py-4 px-8 rounded-2xl border-4 border-secondary/20 shadow-2xl max-w-5xl mx-auto">
            <p className="text-white font-bold text-lg md:text-xl animate-pulse">
              📢 Never Done Before: Learn. Grow. Rise — At Almost Zero Cost!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersDesk;
