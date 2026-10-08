import type { ReactNode } from "react";

// Oversized headline on the left, amber label + supporting copy on the right.
export function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24">
      <h2 className="text-heading-lg font-normal text-bone">{title}</h2>
      <div className="lg:pt-4">
        <p className="text-nav font-semibold uppercase text-saffron mb-5">{kicker}</p>
        {children}
      </div>
    </div>
  );
}

export function Bullet() {
  return (
    <svg viewBox="0 0 10 10" className="mt-2 h-2.5 w-2.5 shrink-0 text-iris" aria-hidden="true">
      <path d="M5 1 9 8.5H1Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
