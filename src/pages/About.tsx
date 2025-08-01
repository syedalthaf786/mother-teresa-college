import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Eye, Heart, Users, Building } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const achievements = [
    { title: "NAAC A+ Grade", description: "Accredited by National Assessment and Accreditation Council" },
    { title: "AICTE Approved", description: "All India Council for Technical Education Recognition" },
    { title: "95% Placement Rate", description: "Excellent industry connections and career support" },
    { title: "Expert Faculty", description: "PhD qualified professors with industry experience" }
  ];

  const managementTeam = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualifications: "M.Pharm, PhD in Pharmaceutics",
      experience: "20+ years in academia and research",
      specialization: "Drug Delivery Systems, Nanotechnology"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Vice Principal",
      qualifications: "M.Pharm, PhD in Pharmacology",
      experience: "18+ years in pharmaceutical education",
      specialization: "Clinical Pharmacology, Drug Safety"
    },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About PharmCollege</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Pioneering pharmaceutical education since 1995, we have been shaping the future of healthcare 
            professionals with cutting-edge curriculum and world-class infrastructure.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Established in 1995, PharmCollege has been at the forefront of pharmaceutical education 
                  in India. What started as a vision to provide quality education in pharmaceutical sciences 
                  has grown into one of the most respected institutions in the country.
                </p>
                <p>
                  Over the past three decades, we have graduated more than 2,000 pharmacy professionals 
                  who are now working in leading pharmaceutical companies, hospitals, research institutions, 
                  and regulatory bodies across the globe.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition from various accreditation bodies 
                  and industry partners, making us the preferred choice for aspiring pharmacists.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="pb-2">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-primary mb-1">{achievement.title}</h3>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  To provide world-class pharmaceutical education that combines theoretical knowledge 
                  with practical skills, fostering innovation and research to address global healthcare 
                  challenges while maintaining the highest standards of professional ethics.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  To be a globally recognized center of excellence in pharmaceutical education and research, 
                  producing competent healthcare professionals who contribute significantly to society's 
                  health and well-being through innovation and dedicated service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to education and research
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Excellence",
                description: "Striving for the highest standards in everything we do"
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Maintaining ethical practices and transparent communication"
              },
              {
                icon: Building,
                title: "Innovation",
                description: "Encouraging creative thinking and breakthrough research"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  {/* Chairman's Message */}
<section id="chairman-message" className="py-16 bg-muted/30">
  <div className="container mx-auto px-4 max-w-5xl">
    <h2 className="text-3xl font-bold text-primary mb-10 text-left">Chairman's Message</h2>
    
    <div className="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-card p-8">
      {/* Image */}
      <img
        src="/images/chairman.jpg" // <-- Change to your actual path
        alt="Chairman"
        className="w-40 h-40 rounded-full object-cover border-4 border-primary"
      />
      
      {/* Message Content */}
      <div className="flex-1">
        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          "PharmCollege stands as a beacon of quality education and innovation in the pharmaceutical field. 
          Our vision is to empower students with the knowledge, skills, and values needed to excel in their careers 
          and contribute meaningfully to society. We are dedicated to providing an environment that fosters growth, 
          curiosity, and integrity."
        </p>
        <div className="mt-4 text-primary font-semibold">
          Mr. Suresh Mehta<br />
          <span className="text-sm text-muted-foreground">Chairman</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Secretary's Message */}
<section id="secretary-message" className="py-16">
  <div className="container mx-auto px-4 max-w-5xl">
    <h2 className="text-3xl font-bold text-primary mb-10 text-right">Secretary's Message</h2>

    <div className="flex flex-col md:flex-row-reverse items-start gap-8 bg-white rounded-lg shadow-card p-8">
      {/* Image */}
      <img
        src="/images/secretary.jpg" // <-- Update with actual path
        alt="Secretary"
        className="w-40 h-40 rounded-full object-cover border-4 border-primary"
      />

      {/* Message Content */}
      <div className="flex-1 text-right">
        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          "Our commitment at PharmCollege is to ensure every student receives holistic support and guidance throughout their academic journey. 
          We believe in nurturing not just competent professionals, but also responsible citizens who uphold the highest ethical standards."
        </p>
        <div className="mt-4 text-primary font-semibold">
          Ms. Anita Desai<br />
          <span className="text-sm text-muted-foreground">Secretary</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Principal's Message */}
{/* Principal's Message */}
<section id="principal-message" className="py-16">
  <div className="container mx-auto px-4 max-w-5xl">
    <h2 className="text-3xl font-bold text-primary mb-10 text-left">Principal's Message</h2>

    <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-card p-8">
      {/* Image Left */}
      <img
        src="/images/principal.jpg" // Replace with your image path
        alt="Principal"
        className="w-40 h-40 rounded-full object-cover border-4 border-primary"
      />

      {/* Text Right */}
      <div className="flex-1 text-left">
        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          "At PharmCollege, we are committed to nurturing the next generation of pharmacy professionals. 
          Our focus on academic excellence, research, and holistic development ensures our students are 
          well-equipped to meet the evolving challenges of the healthcare sector. Join us in our journey 
          towards innovation and service to society."
        </p>
        <div className="mt-4 text-primary font-semibold">
          Dr. Rajesh Kumar<br />
          <span className="text-sm text-muted-foreground">Principal</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Governing Body */}
      <section id="governing-body" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Governing Body</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="font-semibold text-primary mb-2">Mr. Suresh Mehta</h3>
              <p className="text-muted-foreground text-sm mb-1">Chairman</p>
              <p className="text-xs">Visionary leader with 30+ years in education management.</p>
            </div>
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="font-semibold text-primary mb-2">Ms. Anita Desai</h3>
              <p className="text-muted-foreground text-sm mb-1">Secretary</p>
              <p className="text-xs">Dedicated to institutional growth and student welfare.</p>
            </div>
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="font-semibold text-primary mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-muted-foreground text-sm mb-1">Principal & Member Secretary</p>
              <p className="text-xs">Academic leader and research mentor.</p>
            </div>
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="font-semibold text-primary mb-2">Dr. Sunil Gupta</h3>
              <p className="text-muted-foreground text-sm mb-1">Industry Expert</p>
              <p className="text-xs">Brings real-world insights from the pharmaceutical sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-card p-6 flex items-center">
              <Award className="h-10 w-10 text-accent-light mr-4" />
              <div>
                <h4 className="font-semibold text-primary mb-1">Best Pharmacy College 2023</h4>
                <p className="text-xs text-muted-foreground">Awarded by Indian Pharmaceutical Association for academic excellence.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-card p-6 flex items-center">
              <Award className="h-10 w-10 text-accent-light mr-4" />
              <div>
                <h4 className="font-semibold text-primary mb-1">Innovation in Research Award</h4>
                <p className="text-xs text-muted-foreground">Recognized for outstanding contributions to pharmaceutical research.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-card p-6 flex items-center">
              <Award className="h-10 w-10 text-accent-light mr-4" />
              <div>
                <h4 className="font-semibold text-primary mb-1">NAAC A+ Accreditation</h4>
                <p className="text-xs text-muted-foreground">For maintaining the highest standards in education and infrastructure.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-card p-6 flex items-center">
              <Award className="h-10 w-10 text-accent-light mr-4" />
              <div>
                <h4 className="font-semibold text-primary mb-1">Top Placement College</h4>
                <p className="text-xs text-muted-foreground">Consistently high placement rates for graduates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;