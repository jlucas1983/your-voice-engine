const ProblemSection = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 md:sticky md:top-24">
            <span className="block text-9xl leading-none font-sans font-black opacity-5 select-none absolute -left-10 -top-10">
              ?
            </span>
            <h3 className="text-3xl font-bold font-sans tracking-tight border-b-4 border-foreground pb-4 mb-4">
              The Sludge Problem
            </h3>
          </div>
          <div className="md:w-2/3 space-y-8">
            <h2 className="text-4xl font-black font-sans tracking-tight leading-none">
              Most "AI post generators" optimize for margins. Not quality.
            </h2>
            <p className="text-lg">
              Cheap models → generic posts → your voice disappears.
            </p>
            <p className="text-lg text-foreground/70">
              Most companies rely on cheaper, faster models (like GPT-3.5 Turbo or minimal Llama wraps) to keep their server costs low. They prioritize{" "}
              <span className="line-through decoration-2 decoration-accent">more content</span> over{" "}
              <strong>more credibility</strong>.
            </p>
            <p className="text-lg text-foreground/70">
              The result? That robotic, overly-enthusiastic "LinkedIn Voice" that everyone ignores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
