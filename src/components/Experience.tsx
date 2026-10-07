import { EXPERIENCE, type Lang } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Experience({ lang }: { lang: Lang }) {
  const roles = EXPERIENCE[lang];

  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading kicker="03 · experience" title={lang === "pt" ? "Experiência profissional" : "Professional experience"} />
      <div className="relative border-l border-border ml-2 md:ml-4">
        {roles.map((role) => (
          <div key={role.title + role.org} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
            <p className="font-mono text-xs text-text-faint mb-1">{role.period}</p>
            <h3 className="text-lg font-semibold text-white">
              {role.title} <span className="text-text-dim font-normal">— {role.org}</span>
            </h3>
            <ul className="mt-3 space-y-2">
              {role.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-[14px] text-text-dim leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
