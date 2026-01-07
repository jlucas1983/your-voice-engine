const Footer = () => {
  return (
    <footer className="py-12 px-6 text-center">
      <div className="mb-4">
        <span className="font-sans font-black text-2xl tracking-tight">
          Credible<span className="text-muted-foreground">.ink</span>
        </span>
      </div>
      <div className="flex justify-center gap-6 text-sm underline decoration-accent/50 mb-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          Privacy
        </a>
        <a href="#" className="hover:text-accent transition-colors">
          Contact
        </a>
      </div>
      <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
        Made by a human who hates AI sludge.
      </div>
    </footer>
  );
};

export default Footer;
