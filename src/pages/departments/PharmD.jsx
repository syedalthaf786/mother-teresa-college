import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, GraduationCap, FileText, Download, BookOpen } from "lucide-react";

const pharmd = {
  title: "Doctor of Pharmacy (Pharm.D)",
  duration: "6 Years",
  intake: "30 Students",
  fees: "₹1,80,000/Year",
  overview: "Clinical pharmacy program that combines pharmaceutical knowledge with patient care skills through extensive hospital training.",
  eligibility: [
    "10+2 with PCB/PCM with minimum 50%",
    "Valid entrance exam score",
    "Medical fitness certificate"
  ],
  highlights: [
    "Clinical Training",
    "Hospital Rotations",
    "Patient Care Focus",
    "International Recognition",
    "Direct Practice Rights"
  ],
  clinicalRotations: [
    "General Medicine",
    "Pediatrics",
    "Surgery",
    "Cardiology",
    "Oncology",
    "Critical Care"
  ],
  syllabus: [
    { batch: "R21", title: "Pharm.D R21 Syllabus", size: "3.2 MB" }
  ],
  careerOptions: [
    "Clinical Pharmacist",
    "Hospital Pharmacist",
    "Drug Information Specialist",
    "Pharmacovigilance Officer",
    "Community Pharmacist"
  ]
};

const PharmD = () => (
  <div className="min-h-screen">
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{pharmd.title}</h1>
        <p className="text-xl max-w-3xl mx-auto text-white/90">
          Clinical pharmacy program that combines pharmaceutical knowledge with patient care skills through extensive hospital training.
        </p>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-card">
          <CardHeader className="bg-gradient-primary text-white">
            <CardTitle className="text-2xl">{pharmd.title}</CardTitle>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Duration: {pharmd.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Intake: {pharmd.intake}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Fees: {pharmd.fees}
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
              </TabsList><TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{pharmd.overview}</p>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Program Highlights</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {pharmd.highlights.map((highlight, idx) => (
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
                    {pharmd.eligibility.map((criteria, idx) => (
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
                    {pharmd.syllabus.map((item, idx) => (
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
                    {pharmd.careerOptions.map((option, idx) => (
                      <Card key={idx} className="p-3 hover:shadow-card transition-all">
                        <div className="font-medium text-center">{option}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rotations" className="mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Clinical Rotations</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {pharmd.clinicalRotations.map((rotation, idx) => (
                      <Card key={idx} className="p-3 hover:shadow-card transition-all">
                        <div className="font-medium text-center">{rotation}</div>
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

export default PharmD;