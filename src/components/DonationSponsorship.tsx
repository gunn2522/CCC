import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, Megaphone, Target } from "lucide-react";

const DonationSponsorship = () => {
  return (
    <section className="py-24 brand-cosmic">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-oxford mb-6">
            Support Our <span className="text-primary">Vision</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-2xl text-brand-jet max-w-6xl mx-auto leading-relaxed font-medium">
            Help us launch free, quality education for students worldwide. Be part of building something that will transform careers and change lives. Your early support makes our ambitious vision possible.
          </p>
        </div>

        {/* Desktop Layout - 4 cards per row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[360px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-red-500/10 text-red-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center justify-center">Early Supporters</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Join our founding community of supporters. Every early contribution helps us build the foundation for impacting thousands of students.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Support Launch
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[360px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Handshake className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center justify-center">Launch Partners</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Partner with us from day one to create lasting impact. Help us establish credible, high-quality education programs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Become Partner
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[360px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-green-500/10 text-green-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Megaphone className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center justify-center">Mission Advocates</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Spread the word about our vision for free education. Help us build a community before we officially launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Join Movement
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[360px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-purple-500/10 text-purple-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[56px] flex items-center justify-center">Track Our Journey</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Follow our progress as we work toward impacting 50,000 students by 2025. Be part of the story from the beginning.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 text-base py-4 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Follow Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tablet Layout - 3 cards per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-5 mb-12">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[300px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-red-500/10 text-red-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[60px] flex items-center justify-center">Early Supporters</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Join our founding community of supporters. Every early contribution helps us build the foundation for impacting thousands of students.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Support Launch
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[300px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Handshake className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[60px] flex items-center justify-center">Launch Partners</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Partner with us from day one to create lasting impact. Help us establish credible, high-quality education programs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Become Partner
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[300px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-green-500/10 text-green-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Megaphone className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[60px] flex items-center justify-center">Mission Advocates</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Spread the word about our vision for free education. Help us build a community before we officially launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Join Movement
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[300px] md:col-span-3 lg:col-span-1">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-purple-500/10 text-purple-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[60px] flex items-center justify-center">Track Our Journey</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Follow our progress as we work toward impacting 50,000 students by 2025. Be part of the story from the beginning.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Follow Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Layout - 1 card per row */}
        <div className="md:hidden space-y-5 mb-12">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[300px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-red-500/10 text-red-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford mb-4 group-hover:text-primary transition-colors duration-300">Early Supporters</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Join our founding community of supporters. Every early contribution helps us build the foundation for impacting thousands of students.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Support Launch
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[300px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Handshake className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford mb-4 group-hover:text-primary transition-colors duration-300">Launch Partners</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Partner with us from day one to create lasting impact. Help us establish credible, high-quality education programs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Become Partner
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[300px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-green-500/10 text-green-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Megaphone className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford mb-4 group-hover:text-primary transition-colors duration-300">Mission Advocates</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Spread the word about our vision for free education. Help us build a community before we officially launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Join Movement
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[300px]">
            <CardHeader className="text-center pb-4 px-6 flex-grow">
              <div className="p-4 rounded-full bg-purple-500/10 text-purple-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-brand-oxford mb-4 group-hover:text-primary transition-colors duration-300">Track Our Journey</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-base flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Follow our progress as we work toward impacting 50,000 students by 2025. Be part of the story from the beginning.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-6 pb-6 mt-auto">
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 text-base py-5 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Follow Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-6xl mx-auto bg-brand-oxford/5 backdrop-blur-sm border-brand-oxford/20">
            <CardContent className="p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-oxford mb-6">Why Start with Us</h3>
              <p className="text-lg md:text-xl text-brand-jet mb-10 leading-relaxed font-medium">
                Every early supporter helps us build the foundation for a revolutionary education platform. Your contribution today will directly fund our initial programs, technology development, and outreach to underserved communities. Together, we're not just planning education—we're reimagining how careers are built.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">50,000</div>
                  <div className="text-lg text-brand-jet font-medium">Our 2025 Goal</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">8+</div>
                  <div className="text-lg text-brand-jet font-medium">Skill Categories</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3">100%</div>
                  <div className="text-lg text-brand-jet font-medium">Always Free</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSponsorship;
