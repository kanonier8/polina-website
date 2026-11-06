import { siteContent } from "@/lib/content";

export default function Header() {
  const { name, role, nav, phone, phoneNote, ctaLabel, ctaHref } =
    siteContent.header;

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/15 bg-noir/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <div>
          <p className="font-serif text-lg font-semibold tracking-wide text-cream">
            {name.toUpperCase()}
          </p>
          <p className="text-xs tracking-[0.3em] text-gold-400 uppercase">
            {role}
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-cream-dim lg:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="hidden text-right text-sm sm:block"
          >
            <span className="block text-cream">{phone}</span>
            <span className="block text-xs text-cream-dim">{phoneNote}</span>
          </a>
          <a
            href={ctaHref}
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-noir transition-colors hover:bg-gold-400"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
