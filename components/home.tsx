"use client";

export function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: TEXT */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-5xl font-bold">
            Hi, I'm <span className="text-primary">Keila Tabagan</span>
          </h1>

          <p className="text-lg text-muted-foreground">
            UI/UX Designer passionate about creating clean and user-friendly interfaces.
          </p>

          {/* BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center">
          <img
            src="/keila.jpg"
            alt="Keila"
            className="w-64 h-64 object-cover rounded-full border"
          />
        </div>

      </div>
    </section>
  );
}