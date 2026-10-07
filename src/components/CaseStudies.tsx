import { CASE_STUDIES, type Lang } from "../content";
import { SectionHeading } from "./SectionHeading";

export function CaseStudies({ lang }: { lang: Lang }) {
  const cases = CASE_STUDIES[lang];

  return (
    <section id="destaques" className="border-y border-border bg-bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          kicker="02 · featured work"
          title={lang === "pt" ? "Entregas em destaque" : "Featured deliveries"}
        />
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-border bg-surface p-7 hover:border-accent/40 transition-colors"
            >
              <p className="font-mono text-xs text-accent mb-3">{c.tag}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-text-dim mb-5">{c.context}</p>
              <ul className="space-y-3 mb-6">
                {c.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-text leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] rounded-md border border-border px-2 py-1 text-text-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
