import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div
        className="rounded-2xl px-8 py-16 text-center md:px-16"
        style={{ background: "var(--gradient-cta)" }}
      >
        <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
          Start organizing your study routine with intelligent planning.
        </h2>
        <div className="mt-8">
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold shadow-lg"
            asChild
          >
            <Link to="/planner">Create Your Study Plan</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
