
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
    <section id="testimonials" className="py-32 brand-cosmic">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-oxford mb-8">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-jet max-w-6xl mx-auto leading-relaxed font-medium">
            Real testimonials from freshers who transformed their careers with our guidance and support.
          </p>
        </div>
        
        {/* Desktop Layout - 4 cards per row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[480px]"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary mb-4" />
                
                <p className="text-brand-jet mb-6 leading-relaxed text-lg flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-oxford text-lg">{testimonial.name}</h4>
                    <p className="text-brand-jet text-base">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tablet Layout - 2 cards per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[450px]"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-6 w-6 text-primary mb-3" />
                
                <p className="text-brand-jet mb-4 leading-relaxed text-base flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-oxford text-base">{testimonial.name}</h4>
                    <p className="text-brand-jet text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Layout - 1 card per row */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[400px]"
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
