import { SKILLS, LEARNING, type Lang } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Skills({ lang }: { lang: Lang }) {
  const groups = SKILLS[lang];
  const learning = LEARNING[lang];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading kicker="05 · stack" title={lang === "pt" ? "Skills técnicas" : "Technical skills"} />
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {groups.map((g) => (
          <div key={g.category} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-3">{g.category}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="text-sm rounded-lg bg-bg-soft border border-border px-2.5 py-1 text-text">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-border px-6 py-5">
        <h3 className="text-sm font-semibold text-white mb-1.5">{learning.title}</h3>
        <p className="text-sm text-text-dim leading-relaxed">{learning.body}</p>
      </div>
    </section>
  );
}
