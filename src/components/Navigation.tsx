import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronRight
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    {
      label: "About",
      dropdown: [
        { to: "/about#history", label: "History" },
        { to: "/about#mission-vision", label: "Mission & Vision" },
        { to: "/about#principal-message", label: "Principal's Message" },
        { to: "/about#management-team", label: "Management Team" },
        { to: "/about#governing-body", label: "Governing Body" },
        { to: "/about#awards", label: "Awards & Recognition" }
      ]
    },
      {
      label: "Programs",
      dropdown: [
        { to: "/bpharm", label: "B.Pharm" },
        { to: "/mpharm", label: "M.Pharm" },
        { to: "/pharmd", label: "Pharm.D" }
      ]
    },
    {
  label: "Departments",
  dropdown: [
    {
      label: "B.Pharm Department",
      to: "/bpharmd",
      subDropdown: [
        { to: "/bpharm/HOD", label: "HOD" },
        { to: "/bpharm/faculty", label: "B pharmacy faculty List" },
        { to: "/bpharm/Labs", label: "B pharmacy Labs" },
        { to: "/bpharm/Class", label: "B pharmacy Class" }
      ]
    },
    { to: "/mpharmd", label: "M.Pharm Department" 
      ,subDropdown: [
        { to: "/mpharm/HOD", label: "HOD" },
        { to: "/mpharm/faculty", label: "M pharmacy faculty List" },
        { to: "/mpharm/Labs", label: "M pharmacy Labs" },
        { to: "/mpharm/Class", label: "M pharmacy Class" }
      ]
    },
    { to: "/pharmdd", label: "Pharm.D Department",
      subDropdown: [
        { to: "/pharm/HOD", label: "HOD" },
        { to: "/pharmd/faculty", label: "pharm D faculty List" },
        { to: "/pharmd/Labs", label: "pharm D Labs" },
        { to: "/pharmd/Class", label: "pharm D Class" }
      ]
     }
  ]
}
,
{to:"/examcell", label:"Examination Branch"},
    {
      label: "Alumni",
      dropdown: [
        { to: "/alumni/gallery", label: "Notable Alumni Gallery" },
        { to: "/alumni/registration", label: "Registration Form" },
        { to: "/alumni/linkedin", label: "Connect on LinkedIn" },
        { to: "/alumni/meets", label: "Alumni Meets & Newsletter" }
      ]
    },
    {
      label: "Campus Life",
      dropdown: [
        { to: "/campus-life/gallery", label: "Photo & Video Gallery" },
        { to: "/campus-life/clubs", label: "Clubs (NSS, Cultural, Sports)" },
        { to: "/campus-life/events", label: "Events Calendar" },
        { to: "/campus-life/tour", label: "Campus Tour Video" }
      ]
    },
    {
      label: "Placement Cell",
      dropdown: [
        { to: "/placements/recruiters", label: "Recruiters List" },
        { to: "/placements/brochure", label: "Placement Brochure Download" },
        { to: "/placements/jobs", label: "Job Notification Board" },
        { to: "/placements/records", label: "Student Placement Records" }
      ]
    },
    { to: "/faculty", label: "faculty" },
    { to: "/contact", label: "Contact" }
  ];

const NavItems = ({ mobile = false, setIsOpen }) => (
  <>
    {navItems.map((item, index) => {
      if (item.dropdown) {
        if (mobile) {
          return (
            <div key={index} className="space-y-2">
              <div className="font-semibold text-primary py-2 px-2">
                {item.label}
              </div>
              {item.dropdown.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <NavLink
                    to={subItem.to}
                    className="block py-2 px-3 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.label}
                  </NavLink>
                  {subItem.subDropdown && (
                    <div className="ml-4">
                      {subItem.subDropdown.map((subSubItem, sIndex) => (
                        <NavLink
                          key={sIndex}
                          to={subSubItem.to}
                          className="block py-1 px-4 text-sm text-muted-foreground hover:bg-muted rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {subSubItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }

        // Desktop dropdown with sub-dropdown
        return (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
              >
                {item.label}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border shadow-card">
              {item.dropdown.map((subItem, subIndex) => {
                if (subItem.subDropdown) {
                  return (
                    <DropdownMenu key={subIndex}>
                      <DropdownMenuTrigger asChild>
                        <DropdownMenuItem className="justify-between cursor-pointer hover:bg-muted">
                          {subItem.label}
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side="right"
                        align="start"
                        className="w-56 bg-background border shadow-card"
                      >
                        {subItem.subDropdown.map((subSubItem, sIndex) => (
                          <DropdownMenuItem key={sIndex} asChild>
                            <NavLink
                              to={subSubItem.to}
                              className="w-full hover:bg-muted block px-2 py-1 text-sm"
                            >
                              {subSubItem.label}
                            </NavLink>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                return (
                  <DropdownMenuItem key={subIndex} asChild>
                    <NavLink
                      to={subItem.to}
                      className="w-full cursor-pointer hover:bg-muted focus:bg-muted transition-colors px-2 py-1 text-sm"
                    >
                      {subItem.label}
                    </NavLink>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }

      // Non-dropdown items
      return (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `transition-all duration-300 ${mobile
              ? `block py-3 px-4 rounded-lg ${isActive
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-foreground hover:bg-muted"}`
              : `px-4 py-2 rounded-md text-sm font-medium ${isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-foreground hover:text-primary hover:bg-muted/50"}`
            }`
          }
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.label}
        </NavLink>
      );
    })}
  </>
);


  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-white text-primary-black py-1 px-2 text-sm hidden md:block">
  <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
    <div className="flex items-center space-x-6">
      <span className="flex items-center space-x-2">
        <Phone className="h-3 w-3" />
        <span>+91 40 1234 5678</span>
      </span>
      <span className="flex items-center space-x-2">
        <Mail className="h-3 w-3" />
        <span>info@pharmcollege.edu.in</span>
      </span>
    </div>

    <div className="flex items-center space-x-6">
      <span className="flex items-center space-x-2">
        <MapPin className="h-3 w-3" />
        <span>Hyderabad, Telangana</span>
      </span>

      <span className="font-bold text-red-300 border border-red-300 px-2 py-0.5 rounded-md">
        Admission 2025
      </span>
    </div>
  </div>
</div>


      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-soft">
        <div className="container mx-auto px-2">
  <div className="flex h-16 items-center justify-between">
    {/* Logo + College Name */}
    <div className="flex items-center space-x-3">
      {/* Logo Box */}
      <div className="h-12 w-12 flex items-center justify-center">
        <img src={logo} alt="College Logo" className="h-10 w-auto object-contain" />
      </div>

      {/* College Name */}
      <div className="leading-tight">
        <span  className="text-primary font-bold">
          Mother Teresa College of Pharmacy
        </span>
      </div>
    </div>
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              <NavItems setIsOpen={undefined} />
            </nav>

            {/* CTA */}
            
            {/* Mobile Nav */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[90vw] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Logo */}
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                      PC
                    </div>
                    <div>
                      <h2 className="font-bold text-primary">PharmCollege</h2>
                      <p className="text-xs text-muted-foreground">Excellence in Education</p>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col space-y-2">
                    <NavItems mobile setIsOpen={undefined} />
                  </nav>

                  {/* Mobile CTA */}
                  
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
