import { FOOTER, SITE, type Lang } from "../content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer({ lang }: { lang: Lang }) {
  const t = FOOTER[lang];

  return (
    <footer id="contato" className="mx-auto max-w-[1280px] px-6 md:px-10 pt-24 md:pt-40 pb-12">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-32">
        <h2 className="text-display font-normal text-bone">{t.heading}</h2>
        <div className="lg:pt-6">
          <p className="text-nav font-semibold uppercase text-saffron mb-5">{lang === "pt" ? "Contato" : "Contact"}</p>
          <p className="text-body font-extralight text-mist max-w-md mb-10">{t.body}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2.5 rounded-3xl bg-iris px-5 py-3.5 text-nav font-semibold uppercase text-bone hover:brightness-110 transition mb-10"
          >
            <MailIcon className="w-4 h-4" />
            {lang === "pt" ? "Enviar e-mail" : "Send an email"}
          </a>
          <div className="flex flex-wrap items-center gap-8">
            <a href={SITE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-nav font-semibold uppercase text-ash hover:text-bone transition-colors">
              <GitHubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-nav font-semibold uppercase text-ash hover:text-bone transition-colors">
              <LinkedInIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href={`mailto:${SITE.email}`} className="text-nav text-ash hover:text-saffron transition-colors break-all">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <p className="text-caption uppercase tracking-[0.025em] text-ash">
        © {new Date().getFullYear()} {SITE.name} · {SITE.location[lang]}
      </p>
    </footer>
  );
}
