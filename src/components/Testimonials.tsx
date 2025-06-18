import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Harsh Rana",
      role: "Third-year Student",
      content: "I was completely lost about my career path when I joined CCC 10 days ago. Their LinkedIn optimization session was a game-changer! I learned how to present myself professionally and now I feel confident about my future. The one-on-one guidance really helped me understand industry expectations.",
      rating: 5,
      image: "HR"
    },
    {
      name: "Ishan Chander",
      role: "College Student",
      content: "Career Catalyst Community started just 2 weeks ago but they've already shown me a clear path forward. The live Instagram sessions on documentation for internships were incredibly practical. I finally know how to prepare proper documents and what companies actually look for.",
      rating: 5,
      image: "IC"
    },
    {
      name: "Ishika Semwal",
      role: "Third-tier College Student",
      content: "Being from a small college, I never thought I could compete with students from top universities. CCC's LinkedIn connectivity sessions showed me how to build my network effectively. In just 15 days, I've connected with industry professionals and gained valuable insights about my field.",
      rating: 5,
      image: "IS"
    },
    {
      name: "Sukhwinder Singh",
      role: "Engineering Student",
      content: "I was confused about whether to focus on technical skills or soft skills. CCC's personalized guidance through their social channels helped me create a balanced approach. Their documentation tips for internship applications were spot-on - I'm already applying with confidence now!",
      rating: 5,
      image: "SS"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 brand-cosmic">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-brand-oxford mb-4 md:mb-8">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-brand-jet max-w-6xl mx-auto leading-relaxed font-medium">
            Real testimonials from students who found clarity and direction through our live sessions, 
            LinkedIn guidance, and personalized career support - all within our first 15 days!
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
