import { Brain, Target, Lightbulb, Users, Sparkles, BookOpen, Clock, BarChart3 } from "lucide-react";

const stats = [
  { value: "10K+", label: "Active Students" },
  { value: "95%", label: "Exam Pass Rate" },
  { value: "50K+", label: "Plans Generated" },
  { value: "4.9★", label: "User Rating" },
];

const values = [
  { icon: Target, title: "Smart Prioritization", desc: "Our AI analyzes subject difficulty and allocates more study time where you need it most — no more guessing what to study next." },
  { icon: Lightbulb, title: "Adaptive Learning", desc: "The planner evolves with your progress. As you complete topics, it reshuffles your schedule to keep you on the optimal path." },
  { icon: Clock, title: "Time Optimization", desc: "We break your available hours into focused study blocks with built-in breaks, matching proven techniques like Pomodoro and spaced repetition." },
  { icon: BarChart3, title: "Progress Insights", desc: "Visual dashboards show exactly where you stand — completed vs pending topics, subject-wise strength, and readiness scores." },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 overflow-hidden">
    <div className="container">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <Sparkles className="h-4 w-4" /> About AI Study Planner
        </span>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Studying shouldn't feel <br className="hidden md:block" />
          <span className="text-primary">overwhelming.</span>
        </h2>
        <p className="mt-5 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          We built AI Study Planner because we've been there — staring at a mountain of syllabus with no idea where to start.
          Our platform transforms chaos into a clear, personalized roadmap so every student can study with confidence.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="mb-16 rounded-2xl px-6 py-8 md:px-12" style={{ background: "var(--gradient-cta)" }}>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission + Story */}
      <div className="mb-16 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center text-primary">
              <Brain className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Our Mission</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We're on a mission to make quality study planning accessible to every student — whether you're preparing for board exams, university finals, or competitive tests.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By combining artificial intelligence with proven educational strategies, we create study schedules that adapt to <em>your</em> pace, <em>your</em> strengths, and <em>your</em> deadlines.
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">What We Offer</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              "AI-generated daily & weekly study timetables",
              "Difficulty-based subject prioritization",
              "Real-time progress tracking with visual insights",
              "Exam countdown with smart reminders",
              "Personalized study suggestions & tips",
              "Mobile-friendly design — plan on the go",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Core Values / Features Grid */}
      <div className="mb-6 text-center">
        <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">What Makes Us Different</h3>
        <p className="mt-3 text-muted-foreground">Intelligence meets simplicity — here's how we stand out.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <div
            key={v.title}
            className="group rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s`, boxShadow: "var(--shadow-card)" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <v.icon className="h-6 w-6" />
            </div>
            <h4 className="mb-2 font-heading text-base font-semibold text-foreground">{v.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Built for Students */}
      <div className="mt-16 rounded-2xl border bg-accent/30 p-8 md:p-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary mb-5">
          <Users className="h-7 w-7" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Built by Students, for Students</h3>
        <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
          Our team understands the pressure of exams firsthand. That's why every feature — from smart scheduling to progress tracking — is designed with real student challenges in mind. No fluff, just tools that actually help you succeed.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
