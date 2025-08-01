import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, GraduationCap, Building2 } from "lucide-react";
import heroImage from "@/assets/campus.jpg";

const Hero = () => {
  const highlights = [
    {
      icon: Award,
      title: "NAAC A+ Grade",
      description: "Accredited by NAAC"
    },
    {
      icon: Building2,
      title: "AICTE Approved",
      description: "Government Recognized"
    },
    {
      icon: Users,
      title: "500+ Alumni",
      description: "Successful Graduates"
    },
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "PhD Qualified"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                🎓 Excellence in Pharmaceutical Education
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Shape Your Future in
                <span className="block text-accent-light">Pharmaceutical Sciences</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Join India's premier pharmacy college with world-class infrastructure, 
                expert faculty, and industry-aligned curriculum. Your journey to becoming 
                a healthcare professional starts here.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                Virtual Campus Tour
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4 text-center">
                    <item.icon className="h-8 w-8 text-accent-light mx-auto mb-2" />
                    <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-white/80">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Elements */}
          <div className="hidden lg:block relative">
            <div className="absolute top-10 right-10 animate-float">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm">Placement Rate</div>
                </div>
              </Card>
            </div>
            
            <div className="absolute bottom-20 right-0 animate-float" style={{ animationDelay: '1s' }}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">₹8L</div>
                  <div className="text-sm">Avg. Package</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;