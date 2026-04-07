import { Brain } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card py-8">
    <div className="container flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
      <div className="flex items-center gap-2 font-heading font-semibold text-foreground">
        <Brain className="h-4 w-4 text-primary" />
        AI Study Planner
      </div>
      <p>© {new Date().getFullYear()} AI Study Planner. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
