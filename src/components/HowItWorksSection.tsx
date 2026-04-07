const steps = [
  { number: "01", title: "Add Your Subjects", desc: "Enter the subjects you're studying and your syllabus topics." },
  { number: "02", title: "Set Exam Dates", desc: "Tell us when your exams are so we can plan around deadlines." },
  { number: "03", title: "Get Your Smart Plan", desc: "Receive an AI-optimized study schedule tailored to your needs." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-28">
    <div className="container">
      <div className="mb-14 text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
        <p className="mt-3 text-muted-foreground">Three simple steps to a smarter study routine.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="relative rounded-lg border bg-card p-8 text-center transition-shadow hover:shadow-[var(--shadow-card-hover)] animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s`, boxShadow: "var(--shadow-card)" }}
          >
            <span className="mb-4 inline-block font-heading text-4xl font-bold text-primary/20">{step.number}</span>
            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
