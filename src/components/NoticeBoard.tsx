import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  FileText,
  ClipboardList,
  BookOpenCheck,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

const notices = [
  {
    title: "B.Pharm Semester Results - Oct 2024 declared",
    type: "Result",
    icon: <ClipboardList className="w-4 h-4 text-medical-green" />,
    url: "/notices/sem-results-oct-2024",
  },
  {
    title: "Annual Sports Day Registration Open till 15th Feb",
    type: "Event",
    icon: <Calendar className="w-4 h-4 text-primary" />,
    url: "/events/sports-day-2025",
  },
  {
    title: "Industry Visit to Sun Pharma - Form Submission Required",
    type: "Academic",
    icon: <BookOpenCheck className="w-4 h-4 text-accent" />,
    url: "/academic/industry-visit-sunpharma",
  },
  {
    title: "Guest Lecture on Drug Discovery by Dr. Ramesh Kumar - 28th Jan",
    type: "Event",
    icon: <Calendar className="w-4 h-4 text-primary" />,
    url: "/events/guest-lecture-drug-discovery",
  },
  {
    title: "Hostel Fee Payment Deadline Extended to 5th Feb",
    type: "Administrative",
    icon: <AlertCircle className="w-4 h-4 text-medical-orange" />,
    url: "/admin/hostel-fee-deadline",
  },
  {
    title: "Library Extended Hours During Examination Period",
    type: "Academic",
    icon: <BookOpenCheck className="w-4 h-4 text-accent" />,
    url: "/library/extended-hours",
  },
  {
    title: "New Research Lab Inauguration Ceremony - 20th Feb",
    type: "Event",
    icon: <Calendar className="w-4 h-4 text-primary" />,
    url: "/events/lab-inauguration",
  },
  {
    title: "National Pharmacy Quiz Competition Registration Open",
    type: "Academic",
    icon: <BookOpenCheck className="w-4 h-4 text-accent" />,
    url: "/academic/pharma-quiz-2025",
  },
  {
    title: "Campus Placement Drive by Leading Pharma Companies",
    type: "Event",
    icon: <Calendar className="w-4 h-4 text-primary" />,
    url: "/placements/drive-2025",
  },
  {
    title: "Cultural Fest 2024 - Participation Forms Available",
    type: "Event",
    icon: <Calendar className="w-4 h-4 text-primary" />,
    url: "/events/cultural-fest-2024",
  },
];

const typeColor = {
  Result: "bg-medical-green",
  Event: "bg-primary",
  Academic: "bg-accent",
  Administrative: "bg-medical-orange",
};

const NoticeBoard = () => {
  return (
    <div className="hidden md:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40 w-80">
      <Card className="shadow-lg bg-background/95 backdrop-blur border border-border">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-t-md">
          <CardTitle className="flex items-center gap-2 text-sm">
            <FileText className="h-4 w-4" />
            Announcements & Circulars
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-64 overflow-hidden relative group">
            <div className="animate-scroll-vertical group-hover:[animation-play-state:paused] space-y-1 py-2">
              {[...notices, ...notices].map((notice, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 px-4 py-2 text-sm hover:bg-muted/50 transition-colors border-b border-border/50"
                >
                  {notice.icon}
                  <div className="flex-1 text-foreground">
                    <a
                      href={notice.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium hover:underline"
                    >
                      {notice.title}
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                    <div className="mt-1">
                      <Badge
                        className={`text-xs ${typeColor[notice.type] || "bg-muted"}`}
                      >
                        {notice.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoticeBoard;
