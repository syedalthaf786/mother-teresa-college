import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BPharm from "./pages/programs/BPharm";
import MPharm from "./pages/programs/MPharm";
import PharmD from "./pages/programs/PharmD";
import BPharmDe from "./pages/departments/BPharm";
import MPharmDe from "./pages/departments/MPharm";
import PharmDDe from "./pages/departments/PharmD";
import ExamNotifications from "./pages/exambranch/ExamNotifications";
import HODProfiles from "./pages/Hods/HODProfiles.jsx";
import FacultyList from "./pages/Hods/FacultyList";
// import Department from "./pages/Department";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/courses" element={<Courses />} /> */}
            <Route path="/bpharm" element={<BPharm />} />
            <Route path="/mpharm" element={<MPharm />} />
            <Route path="/pharmd" element={<PharmD />} />
            <Route path="/bpharmD" element={<BPharmDe />} />
            <Route path="/mpharmD" element={<MPharmDe />} />
            <Route path="/pharmdD" element={<PharmDDe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/examcell" element={<ExamNotifications />} />
            <Route path="/:dept/HOD" element={<HODProfiles />} />
            <Route path="/:dept/faculty" element={<FacultyList />} />

            {/* <Route path="/department" element={<Department />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
