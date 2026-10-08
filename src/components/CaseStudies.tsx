import { CASE_STUDIES, type Lang } from "../content";
import { Bullet, SectionHeading } from "./SectionHeading";

export function CaseStudies({ lang }: { lang: Lang }) {
  const cases = CASE_STUDIES[lang];

  return (
    <section id="destaques" className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
      <SectionHeading
        kicker={lang === "pt" ? "Entregas em destaque" : "Featured work"}
        title={lang === "pt" ? "Do zero à produção." : "From zero to production."}
      />

      <div className="space-y-24 md:space-y-32">
        {cases.map((c, i) => (
          // Zigzag rhythm: alternate which side carries the headline.
          <article key={c.title} className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-caption uppercase tracking-[0.025em] text-iris mb-4">{c.tag}</p>
              <h3 className="text-heading font-normal text-bone mb-6">{c.title}</h3>
              <p className="text-body font-extralight text-mist">{c.context}</p>
            </div>
            <div>
              <ul className="space-y-5 mb-8">
                {c.points.map((pt, j) => (
                  <li key={j} className="flex gap-4 text-[16px] leading-relaxed font-light text-bone">
                    <Bullet />
                    {pt}
                  </li>
                ))}
              </ul>
              <p className="text-caption uppercase tracking-[0.025em] text-ash">{c.stack.join("  ·  ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
