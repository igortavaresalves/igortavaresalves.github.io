import { EXPERIENCE, type Lang } from "../content";
import { Bullet, SectionHeading } from "./SectionHeading";

export function Experience({ lang }: { lang: Lang }) {
  const roles = EXPERIENCE[lang];

  return (
    <section id="experiencia" className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
      <SectionHeading
        kicker={lang === "pt" ? "Experiência" : "Experience"}
        title={lang === "pt" ? "Mais de uma década em TI." : "Over a decade in IT."}
      />

      <div className="space-y-20">
        {roles.map((role) => (
          <div key={role.title + role.org} className="grid lg:grid-cols-2 gap-6 lg:gap-16">
            <div>
              <p className="text-caption uppercase tracking-[0.025em] text-iris mb-3">{role.period}</p>
              <h3 className="text-heading-xs font-normal text-bone">{role.org}</h3>
              <p className="text-body font-extralight text-ash mt-1">{role.title}</p>
            </div>
            <ul className="space-y-4">
              {role.points.map((pt, i) => (
                <li key={i} className="flex gap-4 text-[16px] leading-relaxed font-light text-mist">
                  <Bullet />
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
