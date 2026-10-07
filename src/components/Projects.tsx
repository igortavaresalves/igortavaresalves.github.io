import { PROJECTS, type Lang } from "../content";
import { SectionHeading } from "./SectionHeading";
import { ExternalLinkIcon } from "./icons";

export function Projects({ lang }: { lang: Lang }) {
  const projects = PROJECTS[lang];

  return (
    <section id="projetos" className="border-y border-border bg-bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading kicker="04 · personal projects" title={lang === "pt" ? "Projetos" : "Projects"} />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <ExternalLinkIcon className="w-4 h-4 text-text-faint group-hover:text-accent transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-sm text-text-dim mb-4">{p.description}</p>
              <ul className="space-y-2 mb-5 grow">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-text leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] rounded-md border border-border px-2 py-1 text-text-dim">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
