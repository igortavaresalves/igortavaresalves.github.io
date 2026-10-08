import { useState } from "react";
import { ABOUT, SITE, type Lang } from "../content";
import { SectionHeading } from "./SectionHeading";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function About({ lang }: { lang: Lang }) {
  const [lead, ...rest] = ABOUT[lang];
  const [hasPhoto, setHasPhoto] = useState(true);

  const stats = [
    { value: "10+", label: lang === "pt" ? "anos em TI" : "years in IT" },
    { value: "184", label: lang === "pt" ? "testes em 1 entrega" : "tests in one delivery" },
    { value: "4", label: lang === "pt" ? "projetos de IA próprios" : "self-directed AI projects" },
  ];

  return (
    <section id="sobre" className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
      <SectionHeading kicker={lang === "pt" ? "Sobre" : "About"} title={lang === "pt" ? "Backend sólido, IA em produção." : "Solid backend, AI in production."}>
        <p className="text-body font-extralight text-bone">{lead}</p>
      </SectionHeading>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="self-start">
          {hasPhoto && (
            // Profile card: portrait and name, no frame or background.
            <figure className="max-w-[420px] mb-16">
              <img
                src={SITE.photo}
                alt={SITE.name}
                onError={() => setHasPhoto(false)}
                className="w-full aspect-[4/5] object-cover rounded-3xl mb-6"
              />
              <figcaption>
                <p className="text-heading-xs font-normal text-bone">{SITE.name}</p>
                <p className="text-nav text-ash mt-1 mb-3">{SITE.location[lang]}</p>
                <div className="flex items-center gap-4 text-ash">
                  <a href={SITE.github} target="_blank" rel="noreferrer" className="hover:text-bone transition-colors" aria-label="GitHub">
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone transition-colors" aria-label="LinkedIn">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>
              </figcaption>
            </figure>
          )}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-heading-lg font-normal text-bone">{s.value}</p>
                <p className="text-caption uppercase tracking-[0.025em] text-ash mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {rest.map((p, i) => (
            <p key={i} className="text-body font-extralight text-mist">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
