import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section
    className="relative overflow-hidden py-20 md:py-28"
    style={{ background: "var(--gradient-hero)" }}
  >
    <div className="container grid items-center gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-6 animate-fade-up">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          AI Study Planner
        </h1>
        <p className="text-lg font-medium text-primary md:text-xl">
          Plan smarter, study better with AI-powered scheduling.
        </p>
        <p className="max-w-lg text-muted-foreground">
          An intelligent study planning tool that helps students generate smart study timetables,
          prioritize difficult subjects, track learning progress, and stay prepared for exams.
        </p>
        <div>
          <Button size="lg" className="text-base font-semibold shadow-lg" asChild>
            <Link to="/planner">Start Planning</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <img
          src={heroIllustration}
          alt="Student studying with AI-powered tools"
          width={896}
          height={672}
          className="w-full max-w-md"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
