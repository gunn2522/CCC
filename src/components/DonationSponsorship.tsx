
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Building2, Users, Target } from "lucide-react";

const DonationSponsorship = () => {
  return (
    <section className="py-20 brand-cosmic">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford mb-6">
            Support Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-xl text-brand-jet max-w-3xl mx-auto leading-relaxed">
            Help us provide free, quality education to students worldwide. Your contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none text-center">
            <CardHeader className="pb-4">
              <div className="p-4 rounded-full bg-red-500/10 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford">Individual Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-jet mb-4">
                Support students with any amount. Every contribution helps us reach more learners.
              </CardDescription>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Donate Now
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none text-center">
            <CardHeader className="pb-4">
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                <Building2 className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford">Corporate Sponsors</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-jet mb-4">
                Partner with us to create lasting impact and build your corporate social responsibility.
              </CardDescription>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Become Sponsor
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none text-center">
            <CardHeader className="pb-4">
              <div className="p-4 rounded-full bg-green-500/10 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                <Users className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford">Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-jet mb-4">
                Join our community of supporters and help us spread the word about free education.
              </CardDescription>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Join Community
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none text-center">
            <CardHeader className="pb-4">
              <div className="p-4 rounded-full bg-purple-500/10 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg font-bold text-brand-oxford">Impact Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-jet mb-4">
                Help us reach 100,000 students by 2025 with free access to career-building skills.
              </CardDescription>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                See Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-brand-oxford/5 backdrop-blur-sm border-brand-oxford/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brand-oxford mb-4">Why Your Support Matters</h3>
              <p className="text-brand-jet mb-6 leading-relaxed">
                Every donation and sponsorship directly funds our free educational programs, allowing us to provide 
                high-quality skills training to students who cannot afford traditional education. Together, we're 
                building a more equitable future where learning opportunities are accessible to all.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-brand-jet">Students Impacted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-brand-jet">Skill Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-brand-jet">Free Access</div>
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
