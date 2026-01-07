const features = [
  {
    title: "Premium Selection",
    description: "Choose the exact model you want (Gemini 3 Pro, Claude 4.5 Opus). We don't hide the engine.",
  },
  {
    title: "Full Control",
    description: "Full control over prompts, templates, and tone. You are the editor-in-chief.",
  },
  {
    title: "Anti-Template",
    description: "No forced \"one-size-fits-all\" workflow. Build your own structures.",
  },
  {
    title: "Human First",
    description: "Your voice first. The model second. It amplifies, it doesn't replace.",
  },
];

const DifferenceSection = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute right-0 top-0 text-[20rem] leading-none font-sans font-black text-ink-white opacity-[0.03] pointer-events-none select-none translate-x-1/3 -translate-y-1/4">
        INK
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-black font-sans tracking-tight mb-16 text-center">
          Use serious models.<br />Keep absolute control.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-primary-foreground/20 p-8 hover:border-accent transition-colors group"
            >
              <div className="text-accent font-bold mb-4 font-sans text-xl group-hover:translate-x-2 transition-transform">
                → {feature.title}
              </div>
              <p className="text-lg opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
