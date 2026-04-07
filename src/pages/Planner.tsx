import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, X } from "lucide-react";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const timeSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

const Planner = () => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [subjectInput, setSubjectInput] = useState("");
  const [examDate, setExamDate] = useState<Date>();

  const addSubject = () => {
    if (subjectInput.trim() && !subjects.includes(subjectInput.trim())) {
      setSubjects([...subjects, subjectInput.trim()]);
      setSubjectInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-2">
            Study Planner Dashboard
          </h1>
          <p className="text-muted-foreground mb-8">
            Organize your subjects, set exam dates, and plan your week.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* Add Subjects */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="e.g. Mathematics"
                    value={subjectInput}
                    onChange={(e) => setSubjectInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addSubject()}
                  />
                  <Button size="icon" onClick={addSubject}><Plus className="h-4 w-4" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {subjects.length === 0 && (
                    <p className="text-sm text-muted-foreground">No subjects added yet.</p>
                  )}
                  {subjects.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                      {s}
                      <button onClick={() => setSubjects(subjects.filter((x) => x !== s))}>
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Set Exam Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Set Exam Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !examDate && "text-muted-foreground")}>
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {examDate ? format(examDate, "PPP") : "Pick an exam date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={examDate} onSelect={setExamDate} initialFocus className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
                {examDate && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Exam scheduled for <span className="font-medium text-foreground">{format(examDate, "PPPP")}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Weekly Planner Grid */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weekly Planner</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr>
                    <th className="p-2 text-left text-muted-foreground font-medium">Time</th>
                    {weekdays.map((d) => (
                      <th key={d} className="p-2 text-center font-medium text-foreground">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((t) => (
                    <tr key={t} className="border-t">
                      <td className="p-2 text-muted-foreground">{t}</td>
                      {weekdays.map((d) => (
                        <td key={d} className="p-2 text-center">
                          <div className="h-8 rounded border border-dashed border-border hover:bg-accent/50 transition-colors cursor-pointer" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-lg border bg-accent/50 p-4 text-center text-sm text-muted-foreground">
            🤖 AI features will be integrated soon — smart scheduling, auto-prioritization, and more!
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Planner;
