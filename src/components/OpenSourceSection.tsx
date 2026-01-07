const OpenSourceSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl border-2 border-foreground p-8 md:p-12 relative">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-foreground" />

        <h2 className="text-4xl font-black font-sans mb-8">
          Pay if you want.<br />Or don't.
        </h2>

        <div className="space-y-6 text-lg">
          <p>This is a side project. I don't depend on it to pay rent.</p>
          <p>
            If you want to join the adventure and support the hosted version, I'd love to have you.
          </p>
          <p>
            If you don't want to pay, that's fine—here's the GitHub repo. It's open source. You can run it yourself.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase hover:bg-accent transition-colors flex items-center justify-center"
          >
            Give it a try
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-foreground font-bold uppercase hover:bg-primary hover:text-primary-foreground transition-colors text-center flex items-center justify-center"
          >
            Open GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
