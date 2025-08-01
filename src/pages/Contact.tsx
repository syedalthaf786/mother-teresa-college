import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "PharmCollege Campus",
        "Survey No. 123, Pharmaceutical Lane",
        "HITEC City, Hyderabad - 500081",
        "Telangana, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Admissions: +91 40 1234 5678",
        "General Inquiry: +91 40 8765 4321",
        "Principal Office: +91 40 1111 2222",
        "Emergency: +91 40 9999 8888"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@pharmcollege.edu.in",
        "admissions@pharmcollege.edu.in",
        "principal@pharmcollege.edu.in",
        "support@pharmcollege.edu.in"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
        "Emergency Contact: 24/7"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            We're here to help you with any questions about admissions, courses, or campus life. 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
                <CardHeader>
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admissions">Admissions</SelectItem>
                        <SelectItem value="courses">Course Information</SelectItem>
                        <SelectItem value="fees">Fee Structure</SelectItem>
                        <SelectItem value="campus">Campus Life</SelectItem>
                        <SelectItem value="placements">Placements</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message here..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" variant="hero">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Embedded Map */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Campus Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-muted h-64 flex items-center justify-center text-muted-foreground">
                    {/* Google Maps Embed would go here */}
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Campus Map</p>
                      <p className="text-sm">Google Maps Integration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="shadow-card bg-medical-green text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-6 w-6" />
                    Quick WhatsApp Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Get instant answers to your questions through our WhatsApp support.
                  </p>
                  <Button variant="outline" className="bg-white text-medical-green hover:bg-white/90 w-full">
                    Chat with us on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Visit Our Campus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Admission Office</span>
                      <span className="text-sm text-muted-foreground">Mon-Sat: 9AM-5PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Library</span>
                      <span className="text-sm text-muted-foreground">Mon-Sun: 8AM-8PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Labs</span>
                      <span className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Campus Tours</span>
                      <span className="text-sm text-muted-foreground">Daily: 10AM & 2PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our college and programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Requirements vary by program. Generally, you need 10+2 with PCB/PCM and valid entrance exam scores."
              },
              {
                question: "Is hostel accommodation available?",
                answer: "Yes, we provide separate hostel facilities for boys and girls with modern amenities."
              },
              {
                question: "What is the placement record?",
                answer: "We maintain a 95% placement rate with an average package of ₹8 LPA across all programs."
              },
              {
                question: "Are scholarships available?",
                answer: "Yes, we offer merit-based and need-based scholarships for deserving students."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;