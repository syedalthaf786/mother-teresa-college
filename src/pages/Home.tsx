import Hero from "@/components/Hero";
import NoticeBoard from "@/components/NoticeBoard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Building2, ArrowRight, Star, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
// import brochure from "@/assets/brochures/brochure.pdf";

const Home = () => {
  const courses = [
    {
      title: "Bachelor of Pharmacy (B.Pharm)",
      duration: "4 Years",
      intake: "60 Students",
      description: "Comprehensive undergraduate program in pharmaceutical sciences",
      highlights: ["AICTE Approved", "Industry Internships", "Research Projects"]
    },
    {
      title: "Master of Pharmacy (M.Pharm)",
      duration: "2 Years",
      intake: "18 Students",
      description: "Advanced specialization in pharmaceutical research and development",
      highlights: ["Research Focus", "PhD Pathway", "Industry Collaboration"]
    },
    {
      title: "Doctor of Pharmacy (Pharm.D)",
      duration: "6 Years",
      intake: "30 Students",
      description: "Clinical pharmacy program with hospital training",
      highlights: ["Clinical Training", "Hospital Rotations", "Patient Care"]
    }
  ];

  const events = [
    {
      title: "National Pharmacy Week",
      date: "Feb 15-21, 2024",
      location: "Main Campus",
      type: "Academic",
      description: "Celebrating pharmaceutical excellence with workshops and competitions"
    },
    {
      title: "Industry Connect Summit",
      date: "Mar 10, 2024",
      location: "Auditorium",
      type: "Industry",
      description: "Leading pharma companies sharing insights and opportunities"
    },
    {
      title: "Research Symposium",
      date: "Mar 25, 2024",
      location: "Conference Hall",
      type: "Research",
      description: "Student and faculty research presentations"
    }
  ];

  const quickLinks = [
    { title: "Academic Calendar", icon: Calendar, href: "#" },
    { title: "Fee Structure", icon: BookOpen, href: "#" },
    { title: "Library Portal", icon: Building2, href: "#" },
    { title: "Student Portal", icon: Users, href: "#" }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="hidden md:block">
        <NoticeBoard />
      </div>
      {/* About Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Our Institution
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Mother Teresa College of Pharmacy, established in 2001, is a premier institution dedicated to excellence in pharmaceutical education, research, and professional development. Located in a serene 2-acre campus at NFC Nagar, Ghatkesar, Hyderabad, the college provides a pollution-free and student-friendly environment. With affiliations and approvals from AICTE, PCI, and Osmania University, the college offers undergraduate and postgraduate programs in pharmacy that combine academic rigor with practical exposure. Over the years, the institution has become a hub for aspiring pharmacists, driven by experienced faculty, modern infrastructure, and a strong focus on industry collaboration and research innovation. Our mission is to empower students with the knowledge, skills, and values needed to make meaningful contributions to healthcare and society      </p>

            <div className="mt-6 flex justify-start">
              <Link to="/about">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white transition">
                  Read More
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards */}
          </div>
        </div>
      </section>
      <hr className="my-8 border-t-2 border-primary" />

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of pharmaceutical programs designed to meet industry demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.duration}</Badge>
                    <span className="text-sm text-muted-foreground">{course.intake}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {course.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <hr className="my-8 border-t-2 border-primary" />
      {/* Events Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay connected with our vibrant campus community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-medical-green text-white">{event.type}</Badge>
                    <Star className="h-4 w-4 text-medical-orange" />
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <hr className="my-8 border-t-2 border-primary" />
      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Access
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <link.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold">{link.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Pharmaceutical Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of successful pharmacy professionals who started their careers with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply Now
            </Button>
            <a href="#" download target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white text-primary">
                Download Brochure
              </Button>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;