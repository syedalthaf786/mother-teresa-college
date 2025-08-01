import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";


const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "Faculty", href: "/faculty" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" }
  ];

  const academicLinks = [
    { name: "B.Pharm", href: "/courses" },
    { name: "M.Pharm", href: "/courses" },
    { name: "Pharm.D", href: "/courses" },
    { name: "Student Zone", href: "/student-zone" },
    { name: "Time Table", href: "/student-zone" },
    { name: "Results", href: "/student-zone" }
  ];

  const importantLinks = [
    { name: "AICTE", href: "#" },
    { name: "NAAC", href: "#" },
    { name: "PCI", href: "#" },
    { name: "Grievance", href: "/student-zone" },
    { name: "Alumni", href: "/alumni" },
    { name: "Placements", href: "/placements" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl"> */}
                <div className="h-20 w-20 flex items-center justify-center">
                  <img src={logo} alt="College Logo" className="h-40 w-auto object-contain" />
                </div>
              {/* </div> */}
              <div>
                <h3 className="text-xl font-bold text-white">
                  Mother Teresa College of Pharmacy
                </h3>
                <p className="text-sm text-white">Excellence in Pharmaceutical Education</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              A premier institution dedicated to pharmaceutical education and research,
              committed to developing skilled professionals for the healthcare industry.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Academics</h4>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <div className="text-sm">
                  <p>123 Pharmaceutical Street</p>
                  <p>Hyderabad, Telangana 500001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 40 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@pharmcollege.edu.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                <div className="text-sm">
                  <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Links Section */}
        <Separator className="my-8" />
        <div>
          <h4 className="text-lg font-semibold mb-4 text-primary">Important Links</h4>
          <div className="flex flex-wrap gap-4">
            {importantLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm hover:text-primary transition-colors duration-200 px-3 py-1 rounded-md hover:bg-muted/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-secondary/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>&copy; 2024 PharmCollege. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;