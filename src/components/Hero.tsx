import { HERO, SITE, type Lang } from "../content";
import { Constellation } from "./Constellation";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Hero({ lang }: { lang: Lang }) {
  const t = HERO[lang];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-36 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <div className="relative z-10">
          <p className="text-nav font-semibold uppercase text-saffron mb-8">{t.eyebrow}</p>
          <h1 className="text-display font-normal text-bone mb-8">{t.title}</h1>
          <p className="text-heading-xs font-normal text-bone mb-6 max-w-xl">{t.subtitle}</p>
          <p className="text-body font-extralight text-mist max-w-[480px] mb-12">{t.blurb}</p>

          <div className="flex flex-wrap items-center gap-8 mb-14">
            <a
              href={t.ctaPrimary.href}
              className="rounded-3xl bg-iris px-5 py-3.5 text-nav font-semibold uppercase text-bone hover:brightness-110 transition"
            >
              {t.ctaPrimary.label}
            </a>
            <a
              href={t.ctaSecondary.href}
              className="text-nav font-semibold uppercase text-ash hover:text-bone transition-colors"
            >
              {t.ctaSecondary.label} →
            </a>
          </div>

          <div className="flex items-center gap-6 text-ash">
            <a href={SITE.github} target="_blank" rel="noreferrer" className="hover:text-bone transition-colors" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone transition-colors" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-bone transition-colors" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <Constellation className="w-full h-[340px] sm:h-[460px] lg:h-[620px] lg:scale-110" />
      </div>
    </section>
  );
}
