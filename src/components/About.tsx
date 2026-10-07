import { ABOUT, type Lang } from "../content";
import { SectionHeading } from "./SectionHeading";

export function About({ lang }: { lang: Lang }) {
  const paragraphs = ABOUT[lang];

  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading kicker="01 · about" title={lang === "pt" ? "Sobre mim" : "About me"} />
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-text-dim leading-relaxed text-[15px] md:text-base">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-4">
          <StatCard value="10+" label={lang === "pt" ? "anos em TI" : "years in IT"} />
          <StatCard value="184" label={lang === "pt" ? "testes em 1 entrega" : "tests in one delivery"} />
          <StatCard value="4" label={lang === "pt" ? "projetos de IA próprios" : "self-directed AI projects"} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-5 py-4">
      <p className="font-mono text-2xl font-semibold text-accent">{value}</p>
      <p className="text-sm text-text-dim mt-0.5">{label}</p>
    </div>
  );
}
