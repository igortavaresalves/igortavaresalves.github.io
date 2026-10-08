import { NAV, type Lang } from "../content";
import { LogoMark } from "./icons";

export function Header({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  // "Contato" becomes the pill CTA, so it is left out of the text links.
  const nav = NAV[lang].filter((item) => item.href !== "#contato");
  const contact = NAV[lang].find((item) => item.href === "#contato");

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 text-nav text-bone whitespace-nowrap">
          <LogoMark className="w-5 h-5" />
          Igor Tavares
        </a>

        <nav className="hidden xl:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-nav font-semibold uppercase whitespace-nowrap text-ash hover:text-bone transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-nav font-semibold uppercase">
            <LangButton active={lang === "pt"} onClick={() => setLang("pt")}>PT</LangButton>
            <span className="text-ash/50">/</span>
            <LangButton active={lang === "en"} onClick={() => setLang("en")}>EN</LangButton>
          </div>
          {contact && (
            <a
              href={contact.href}
              className="hidden sm:inline-flex rounded-3xl bg-iris px-4 py-3 text-nav font-semibold uppercase text-bone hover:brightness-110 transition"
            >
              {contact.label}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

function LangButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer transition-colors ${active ? "text-bone" : "text-ash hover:text-bone"}`}
    >
      {children}
    </button>
  );
}
