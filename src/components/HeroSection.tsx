import { Github } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="relative z-10 pt-20 pb-32 px-4 container mx-auto max-w-4xl flex flex-col items-center text-center">
      {/* Visual Backdrop Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-20 z-[-1]">
        <div className="text-[12vw] leading-none font-black font-sans text-center text-outline tracking-tighter">
          CREDIBLE<br />CREDIBLE<br />CREDIBLE
        </div>
      </div>

      <div className="mb-6 inline-block border border-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest bg-ink-white animate-reveal">
        LinkedIn Content / Control / Quality
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-sans tracking-tighter leading-[0.9] mb-8 animate-reveal animation-delay-100">
        Write LinkedIn posts that sound like <span className="text-accent italic">you</span>.
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-foreground/80 animate-reveal animation-delay-200">
        Credible.ink is the content engine I built for myself—because most tools generate AI sludge.
      </p>

      {/* CTA Buttons */}
      <div className="w-full max-w-md animate-reveal animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#" 
          className="flex-1 bg-primary text-primary-foreground border-2 border-primary font-bold p-4 hover:bg-background hover:text-foreground transition-colors uppercase tracking-wide flex items-center justify-center text-center group"
        >
          Give it a try <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a 
          href="https://github.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none flex items-center justify-center px-6 border-2 border-foreground hover:bg-muted transition-colors"
          title="View on GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>

      <p className="mt-4 text-xs text-foreground/60 uppercase tracking-widest animate-reveal animation-delay-400">
        +204% followers in 3 months (my own account)
      </p>
    </header>
  );
};

export default HeroSection;
