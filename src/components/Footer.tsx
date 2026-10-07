import { FOOTER, SITE, type Lang } from "../content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer({ lang }: { lang: Lang }) {
  const t = FOOTER[lang];

  return (
    <footer id="contato" className="border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">{t.heading}</h2>
        <p className="text-text-dim mb-10 max-w-md mx-auto">{t.body}</p>

        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-accent text-bg font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity mb-10"
        >
          <MailIcon className="w-4 h-4" />
          {SITE.email}
        </a>

        <div className="flex items-center justify-center gap-6 text-text-dim">
          <a href={SITE.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2 text-sm">
            <GitHubIcon className="w-4 h-4" /> GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2 text-sm">
            <LinkedInIcon className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-16 font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} {SITE.name} · {SITE.location[lang]}
        </p>
      </div>
    </footer>
  );
}
