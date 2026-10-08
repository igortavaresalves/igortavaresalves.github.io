import { SKILLS, LEARNING, type Lang } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Skills({ lang }: { lang: Lang }) {
  const groups = SKILLS[lang];
  const learning = LEARNING[lang];

  return (
    <section id="skills" className="mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-32">
      <SectionHeading kicker="Stack" title={lang === "pt" ? "Ferramentas do ofício." : "Tools of the trade."}>
        <p className="text-heading-xs font-normal text-bone mb-4">{learning.title}</p>
        <p className="text-body font-extralight text-mist">{learning.body}</p>
      </SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
        {groups.map((g) => (
          <div key={g.category}>
            <h3 className="text-caption uppercase tracking-[0.025em] text-iris mb-5">{g.category}</h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="text-body font-extralight text-bone">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
