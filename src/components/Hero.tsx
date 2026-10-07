import { HERO, SITE, type Lang } from "../content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Hero({ lang }: { lang: Lang }) {
  const t = HERO[lang];

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #5eead4, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-text-dim mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          {t.eyebrow}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-accent font-medium mb-6">{t.subtitle}</p>
        <p className="max-w-2xl mx-auto text-text-dim text-base md:text-lg leading-relaxed mb-10">
          {t.blurb}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={t.ctaPrimary.href}
            className="rounded-lg bg-accent text-bg font-semibold px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
          >
            {t.ctaPrimary.label}
          </a>
          <a
            href={t.ctaSecondary.href}
            className="rounded-lg border border-border px-5 py-2.5 text-sm text-text hover:border-accent/50 hover:text-white transition-colors"
          >
            {t.ctaSecondary.label}
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 text-text-dim">
          <a href={SITE.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
