export function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-sm text-accent mb-2">{kicker}</p>
      <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}
