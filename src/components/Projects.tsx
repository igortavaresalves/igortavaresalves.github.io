import { PROJECTS, type Lang } from "../content";
import { Bullet, SectionHeading } from "./SectionHeading";
import { ExternalLinkIcon } from "./icons";

export function Projects({ lang }: { lang: Lang }) {
  const projects = PROJECTS[lang];

  return (
    <section id="projetos" className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
      <SectionHeading
        kicker={lang === "pt" ? "Projetos próprios" : "Personal projects"}
        title={lang === "pt" ? "Laboratório de IA." : "AI lab."}
      />

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
        {projects.map((p) => (
          <div key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-start gap-3 mb-4"
            >
              <h3 className="text-heading font-normal text-bone group-hover:text-saffron transition-colors">{p.name}</h3>
              <ExternalLinkIcon className="w-5 h-5 mt-3 text-ash group-hover:text-saffron transition-colors shrink-0" />
            </a>
            <p className="text-body font-extralight text-mist mb-6">{p.description}</p>
            <ul className="space-y-3 mb-6">
              {p.points.map((pt, i) => (
                <li key={i} className="flex gap-4 text-[15px] leading-relaxed font-light text-bone">
                  <Bullet />
                  {pt}
                </li>
              ))}
            </ul>
            <p className="text-caption uppercase tracking-[0.025em] text-ash">{p.stack.join("  ·  ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
