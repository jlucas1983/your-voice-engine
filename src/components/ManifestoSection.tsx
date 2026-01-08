import { Github } from "lucide-react";

const ManifestoSection = () => {
  return (
    <section className="bg-accent py-32 px-6 text-center text-accent-foreground selection:bg-ink-white selection:text-accent">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-sans tracking-tighter leading-none mb-8">
          IF IT SOUNDS LIKE AI,<br />IT'S NOT CREDIBLE.
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-bold opacity-90 mb-12">
          I'm building the best LinkedIn content development software—slowly, openly, and with taste.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://app.credibly.ink/login"
            className="bg-ink-white text-accent border-2 border-ink-white px-8 py-4 font-bold uppercase hover:bg-transparent hover:text-ink-white transition-all flex items-center justify-center"
          >
            Give it a try
          </a>
          <a
            href="https://github.com/jlucas1983/linkedin-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-foreground/20 hover:bg-foreground/20 bg-foreground/10 text-ink-white font-bold uppercase transition-all flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
