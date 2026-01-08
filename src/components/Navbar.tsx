import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center border-b-2 border-foreground/10 bg-ink-white">
      <div className="text-2xl md:text-3xl font-bold tracking-tighter font-sans">
        Credibly<span className="text-muted-foreground">.ink</span>
      </div>
      <div className="flex gap-4 sm:gap-6 items-center">
        <a 
          href="https://github.com/jlucas1983/linkedin-agent" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm hover:line-through decoration-2 decoration-accent transition-all hidden md:block opacity-60"
        >
          GitHub ↗
        </a>
        <div className="h-6 w-px bg-foreground/10 hidden md:block" />
        <a 
          href="https://app.credibly.ink/login" 
          className="text-sm font-bold hover:text-accent transition-colors"
        >
          Login
        </a>
        <a 
          href="https://app.credibly.ink/login" 
          className="text-sm font-bold bg-primary text-primary-foreground px-4 py-2 sm:px-5 sm:py-2.5 border-2 border-primary hover:bg-background hover:text-foreground transition-colors uppercase tracking-wide text-center whitespace-nowrap"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
