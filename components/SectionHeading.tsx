export default function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
}: {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-sm tracking-[0.3em] text-gold-400 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span>{index}</span>
        <span className="h-px w-10 bg-gold-500/60" />
      </div>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gold-300/90">{subtitle}</p>
      )}
    </div>
  );
}
