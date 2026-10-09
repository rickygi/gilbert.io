export default function Home() {
  return (
    <div className="outline-background flex flex-1 flex-col outline">
      {/* Hero */}
      <main className="outline-background flex flex-1 flex-col justify-center px-6 py-12 outline">
        <div className="outline-background mx-auto w-full max-w-2xl text-center outline">
          <h1 className="text-5xl font-bold">Ricky Gilbert</h1>
          <p className="text-foreground/60 mt-12 text-2xl">
            Bradenton, Florida
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="outline-background mt-auto outline">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="https://github.com/rickygi"
              className="text-foreground/60 hover:text-foreground transition"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/rickygilbe"
              className="text-foreground/60 hover:text-foreground transition"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/rickygi/"
              className="text-foreground/60 hover:text-foreground transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/rickygi/"
              className="text-foreground/60 hover:text-foreground transition"
            >
              Instagram
            </a>
          </nav>

          <p className="mt-4 text-center text-sm">
            <a
              href="mailto:ricky@gilbert.io"
              className="text-foreground/60 hover:text-foreground transition"
            >
              ricky@gilbert.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
