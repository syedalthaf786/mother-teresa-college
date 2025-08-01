import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function ExamNotifications() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Examination Branch</h1>
      <h2 className="text-2xl text-center font-semibold mb-6">EXAM NOTIFICATIONS</h2>

      <Accordion type="single" collapsible className="w-full space-y-2">

        {/* Fee Notifications */}
        <AccordionItem value="fee">
          <AccordionTrigger className="text-lg font-semibold text-primary-800">
            Fee Notifications
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  B.Pharm Exam Fee Notification - Aug 2025
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  M.Pharm Supplementary Fee Circular
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Time Table */}
        <AccordionItem value="timetable">
          <AccordionTrigger className="text-lg font-semibold text-primary-800">
            Examination Time Tables
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  Final Year Timetable - Aug 2025
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  Pharm.D Mid Schedule
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Other Notifications */}
        <AccordionItem value="other">
          <AccordionTrigger className="text-lg font-semibold text-primary-800">
            Other Notifications
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  Hall Ticket Instructions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  Lab Practical Schedule
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* JNTU */}
        <AccordionItem value="jntu">
          <AccordionTrigger className="text-lg font-semibold text-primary-800">
            JNTU
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              <li>
                <a
                  href="https://jntuh.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  JNTUH Official Website
                </a>
              </li>
              <li>
                <Link to="#" className="text-blue-600 hover:underline">
                  JNTUH B.Tech R22 Notification
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
