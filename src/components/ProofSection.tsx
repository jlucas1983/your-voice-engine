const ProofSection = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-ink-white border-y border-foreground/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-black font-sans tracking-tight mb-12">
          Built in the wild. <br /> Measurable results.
        </h2>

        {/* Main Analytics Card */}
        <div className="bg-background border-2 border-foreground p-6 md:p-10 brutalist-shadow text-left relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          {/* Decorative scan line */}
          <div className="absolute inset-0 scan-lines pointer-events-none z-10" />

          <div className="flex flex-col md:flex-row justify-between items-end md:items-start mb-2 gap-4 relative z-20">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-foreground/50 mb-1">
                Total Impressions (90 Days)
              </div>
              <div className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-foreground leading-none">
                1,021,118
              </div>
            </div>
            <div className="bg-green-100 text-green-800 border border-green-800 px-3 py-1 font-mono text-sm font-bold flex items-center gap-2">
              <span>▲</span> 490.2% vs prior 90 days
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-48 w-full mt-6 border-l border-b border-foreground/20 bg-ink-white/50">
            {/* Grid background */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border-r border-t border-foreground/5" />
              ))}
            </div>

            {/* Chart Line SVG */}
            <svg 
              viewBox="0 0 100 50" 
              className="w-full h-full overflow-visible absolute inset-0 z-10" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--ink-accent))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="hsl(var(--ink-accent))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,50 L0,45 L10,42 L20,38 L30,30 L40,28 L50,20 L60,18 L70,12 L80,10 L90,5 L100,2 L100,50 Z" 
                fill="url(#chartGradient)" 
              />
              <path 
                d="M0,45 L10,42 L20,38 L30,30 L40,28 L50,20 L60,18 L70,12 L80,10 L90,5 L100,2" 
                fill="none" 
                stroke="hsl(var(--ink-accent))" 
                strokeWidth="0.75" 
                vectorEffect="non-scaling-stroke" 
              />
            </svg>

            {/* End point dot */}
            <div className="absolute right-0 top-[4%] w-2 h-2 bg-accent rounded-full translate-x-1/2 -translate-y-1/2 z-20 shadow-sm border border-ink-white" />

            {/* Axis Labels */}
            <div className="absolute -left-8 top-0 text-[10px] font-mono text-foreground/40">1M</div>
            <div className="absolute -left-8 bottom-0 text-[10px] font-mono text-foreground/40">0</div>
            <div className="absolute left-0 -bottom-5 text-[10px] font-mono text-foreground/40">Aug</div>
          </div>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t-2 border-dashed border-foreground/20">
            <div>
              <div className="text-3xl font-black font-sans">+204%</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-60">Followers</div>
            </div>
            <div className="md:border-x-2 md:border-dashed md:border-foreground/10 md:px-6">
              <div className="text-3xl font-black font-sans">3 Month</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-60">Duration</div>
            </div>
            <div>
              <div className="text-3xl font-black font-sans">Founder</div>
              <div className="text-xs uppercase tracking-widest mt-1 opacity-60">Led Marketing</div>
            </div>
          </div>
        </div>

        <p className="mt-8 font-mono text-sm opacity-60 max-w-lg mx-auto">
          *Actual data from my personal LinkedIn analytics. No paid ads. Just consistent, quality content generated with this engine.
        </p>
      </div>
    </section>
  );
};

export default ProofSection;
