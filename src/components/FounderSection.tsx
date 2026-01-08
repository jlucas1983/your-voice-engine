const FounderSection = () => {
  return (
    <section className="py-24 px-6 bg-ink-white border-b border-foreground/10">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 relative">
            {/* Founder Photo */}
            <div className="aspect-square bg-primary relative group">
              <div className="absolute inset-0 border-2 border-foreground translate-x-3 translate-y-3 bg-ink-white" />
              <div className="absolute inset-0 border-2 border-foreground overflow-hidden hover:-translate-y-1 hover:-translate-x-1 transition-transform">
                <img 
                  src="/founder.jpg" 
                  alt="Josemaría Lucas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="inline-block border border-foreground px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-4">
              The Human Behind The Ink
            </div>
            <h2 className="text-4xl font-black font-sans tracking-tight mb-6">
              Josemaría Lucas
            </h2>
            <div className="font-mono text-foreground/80 space-y-4 text-lg">
              <p>
                I'm the co-founder of{" "}
                <a
                  href="https://tuio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-accent decoration-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  tuio.com
                </a>
                . I built this engine to solve my own problem: I wanted to execute a{" "}
                <strong>founder-led marketing</strong> strategy without sounding like a robot.
              </p>
              <p>
                <span className="bg-yellow-200 px-1 text-foreground font-bold">
                  I don't do this to pay rent.
                </span>{" "}
                I do it to have fun and create impact.
              </p>
              <p>
                People started approaching me, asking:{" "}
                <em>"How are you doing this?"</em> so I thought it made sense to share the tool openly.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/josemar%C3%ADa-lucas-cfa-30220a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold hover:text-accent transition-colors border-b-2 border-foreground hover:border-accent pb-1"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
