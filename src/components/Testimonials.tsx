
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "School Student",
      content: "CCC helped me optimize my LinkedIn profile and prepare for interviews. Within 2 months, I landed my dream job! Their AI-powered career guidance was exactly what I needed.",
      rating: 5,
      image: "PS"
    },
    {
      name: "Rahul Kumar",
      role: "LinkedIn User",
      content: "Coming from a small town college, I had no idea about industry standards. CCC's mentorship and job preparation tips transformed my career prospects completely.",
      rating: 5,
      image: "RK"
    },
    {
      name: "Anjali Patel",
      role: "College Student",
      content: "The career consultation sessions were incredibly valuable. They helped me understand my strengths and guided me towards the right career path. Highly recommended!",
      rating: 5,
      image: "AP"
    },
    {
      name: "Arjun Singh",
      role: "LinkedIn User",
      content: "CCC's approach to using AI for career growth is revolutionary. They don't just give advice, they provide practical tools and strategies that actually work.",
      rating: 5,
      image: "AS"
    }
  ];

  return (
    <section id="testimonials" className="py-20 brand-cosmic">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-6">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-brand-jet max-w-3xl mx-auto leading-relaxed">
            Real testimonials from freshers who transformed their careers with our guidance and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-oxford text-sm">{testimonial.name}</h4>
                    <p className="text-brand-jet text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
