
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, Megaphone, Target } from "lucide-react";

const DonationSponsorship = () => {
  return (
    <section className="py-32 brand-cosmic">
      <div className="w-full max-w-none px-8 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-oxford mb-8">
            Support Our <span className="text-primary">Vision</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-jet max-w-6xl mx-auto leading-relaxed font-medium">
            Help us launch free, quality education for students worldwide. Be part of building something that will transform careers and change lives. Your early support makes our ambitious vision possible.
          </p>
        </div>

        {/* Desktop Layout - 4 cards per row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-16">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[480px]">
            <CardHeader className="text-center pb-6 px-8 flex-grow">
              <div className="p-6 rounded-full bg-red-500/10 text-red-600 mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Heart className="h-12 w-12" />
              </div>
              <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[70px] flex items-center justify-center">Early Supporters</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-lg flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Join our founding community of supporters. Every early contribution helps us build the foundation for impacting thousands of students.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-8 pb-8 mt-auto">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 text-lg py-6 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Support Launch
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[480px]">
            <CardHeader className="text-center pb-6 px-8 flex-grow">
              <div className="p-6 rounded-full bg-blue-500/10 text-blue-600 mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Handshake className="h-12 w-12" />
              </div>
              <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[70px] flex items-center justify-center">Launch Partners</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-lg flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Partner with us from day one to create lasting impact. Help us establish credible, high-quality education programs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-8 pb-8 mt-auto">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 text-lg py-6 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Become Partner
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[480px]">
            <CardHeader className="text-center pb-6 px-8 flex-grow">
              <div className="p-6 rounded-full bg-green-500/10 text-green-600 mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Megaphone className="h-12 w-12" />
              </div>
              <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[70px] flex items-center justify-center">Mission Advocates</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-lg flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Spread the word about our vision for free education. Help us build a community before we officially launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-8 pb-8 mt-auto">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 text-lg py-6 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Join Movement
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[480px]">
            <CardHeader className="text-center pb-6 px-8 flex-grow">
              <div className="p-6 rounded-full bg-purple-500/10 text-purple-600 mx-auto mb-8 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Target className="h-12 w-12" />
              </div>
              <CardTitle className="text-2xl font-bold text-brand-oxford group-hover:text-primary transition-colors duration-300 min-h-[70px] flex items-center justify-center">Track Our Journey</CardTitle>
              <CardDescription className="text-brand-jet leading-relaxed text-lg flex-grow group-hover:text-brand-oxford transition-colors duration-300">
                Follow our progress as we work toward impacting 50,000 students by 2025. Be part of the story from the beginning.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-8 pb-8 mt-auto">
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 text-lg py-6 font-bold hover:shadow-xl transform hover:scale-105 rounded-xl">
                Follow Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tablet Layout - 3 cards per row */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6 mb-16">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[450px]">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-5 rounded-full bg-red-500/10 text-red-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Heart className="h-10 w-10" />
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

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[450px]">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-5 rounded-full bg-blue-500/10 text-blue-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Handshake className="h-10 w-10" />
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

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[450px]">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-5 rounded-full bg-green-500/10 text-green-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Megaphone className="h-10 w-10" />
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

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 hover:scale-105 min-h-[450px] md:col-span-3 lg:col-span-1">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-5 rounded-full bg-purple-500/10 text-purple-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Target className="h-10 w-10" />
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
        <div className="md:hidden space-y-6 mb-16">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[400px]">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-4 rounded-full bg-red-500/10 text-red-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Heart className="h-10 w-10" />
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

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[400px]">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Handshake className="h-10 w-10" />
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

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[400px]">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-4 rounded-full bg-green-500/10 text-green-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Megaphone className="h-10 w-10" />
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

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-secondary h-full flex flex-col hover:border-primary/30 min-h-[400px]">
            <CardHeader className="text-center pb-6 px-6 flex-grow">
              <div className="p-4 rounded-full bg-purple-500/10 text-purple-600 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 w-fit shadow-lg">
                <Target className="h-10 w-10" />
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
          <Card className="max-w-7xl mx-auto bg-brand-oxford/5 backdrop-blur-sm border-brand-oxford/20">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-oxford mb-8">Why Start with Us</h3>
              <p className="text-xl md:text-2xl text-brand-jet mb-12 leading-relaxed font-medium">
                Every early supporter helps us build the foundation for a revolutionary education platform. Your contribution today will directly fund our initial programs, technology development, and outreach to underserved communities. Together, we're not just planning education—we're reimagining how careers are built.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">50,000</div>
                  <div className="text-xl text-brand-jet font-medium">Our 2025 Goal</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">8+</div>
                  <div className="text-xl text-brand-jet font-medium">Skill Categories</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">100%</div>
                  <div className="text-xl text-brand-jet font-medium">Always Free</div>
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
