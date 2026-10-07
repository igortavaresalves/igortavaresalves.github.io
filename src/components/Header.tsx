import { NAV, type Lang } from "../content";

export function Header({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const nav = NAV[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold text-white tracking-tight">
          Igor<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-dim hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-0.5 font-mono text-xs border border-border rounded-full p-0.5">
          <button
            type="button"
            onClick={() => setLang("pt")}
            className={`rounded-full px-2.5 py-1 transition-colors cursor-pointer ${
              lang === "pt" ? "bg-accent-soft text-accent" : "text-text-dim hover:text-white"
            }`}
          >
            PT
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`rounded-full px-2.5 py-1 transition-colors cursor-pointer ${
              lang === "en" ? "bg-accent-soft text-accent" : "text-text-dim hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
