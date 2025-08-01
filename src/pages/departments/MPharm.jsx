import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, GraduationCap, FileText, Download, BookOpen } from "lucide-react";

const mpharm = {
  title: "Master of Pharmacy (M.Pharm)",
  duration: "2 Years",
  intake: "18 Students",
  fees: "₹2,00,000/Year",
  overview: "Advanced postgraduate program focusing on specialized areas of pharmaceutical sciences with emphasis on research and development.",
  eligibility: [
    "B.Pharm degree with minimum 55% marks",
    "Valid GPAT/GATE score",
    "Entrance test and interview"
  ],
  highlights: [
    "Research-Oriented Curriculum",
    "Specialization Options",
    "PhD Pathway",
    "Industry Collaboration",
    "Publication Opportunities"
  ],
  specializations: [
    "Pharmaceutics",
    "Pharmaceutical Chemistry",
    "Pharmacology",
    "Pharmacognosy",
    "Quality Assurance"
  ],
  syllabus: [
    { batch: "R21", title: "M.Pharm R21 Syllabus", size: "1.8 MB" }
  ],
  careerOptions: [
    "Research Scientist",
    "Senior Pharmacist",
    "Regulatory Manager",
    "Academic Professor",
    "Drug Safety Associate"
  ]
};

const MPharm = () => (
  <div className="min-h-screen">
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{mpharm.title}</h1>
        <p className="text-xl max-w-3xl mx-auto text-white/90">
          Advanced postgraduate program focusing on specialized areas of pharmaceutical sciences with emphasis on research and development.
        </p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-card">
          <CardHeader className="bg-gradient-primary text-white">
            <CardTitle className="text-2xl">{mpharm.title}</CardTitle>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Duration: {mpharm.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Intake: {mpharm.intake}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Fees: {mpharm.fees}
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="career">Career</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{mpharm.overview}</p>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Program Highlights</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {mpharm.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-medical-green rounded-full"></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="eligibility" className="mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Eligibility Criteria</h4>
                  <ul className="space-y-2">
                    {mpharm.eligibility.map((criteria, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-medical-green rounded-full mt-2"></div>
                        <span className="text-sm">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="syllabus" className="mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Syllabus Downloads</h4>
                  <div className="grid gap-3">
                    {mpharm.syllabus.map((item, idx) => (
                      <Card key={idx} className="p-4 hover:shadow-card transition-all cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-muted-foreground">Size: {item.size}</div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="career" className="mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Career Opportunities</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {mpharm.careerOptions.map((option, idx) => (
                      <Card key={idx} className="p-3 hover:shadow-card transition-all">
                        <div className="font-medium text-center">{option}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specializations" className="mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Available Specializations</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {mpharm.specializations.map((spec, idx) => (
                      <Card key={idx} className="p-3 hover:shadow-card transition-all">
                        <div className="font-medium text-center">{spec}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default MPharm;