import Image from "next/image";
import PhotoSlot from "@/components/PhotoSlot";
import { siteContent } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  const { index, title, subtitle, ctaLabel, ctaHref, highlights, backgroundImage, photo } =
    siteContent.hero;

  return (
    <section className="relative overflow-hidden border-b border-gold-500/15">
      <Image
        src={withBasePath(backgroundImage)}
        alt=""
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/85 to-maroon-950/40" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr_0.6fr] lg:items-center lg:px-10 lg:py-28">
        <div>
          <div className="flex items-center gap-3 text-sm tracking-[0.3em] text-gold-400">
            <span>{index}</span>
            <span className="h-px w-10 bg-gold-500/60" />
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-md text-base text-cream-dim">{subtitle}</p>
          <a
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-noir transition-colors hover:bg-gold-400"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm border border-gold-500/20 lg:justify-self-center">
          <PhotoSlot photo={photo} className="absolute inset-0" sizes="400px" priority />
        </div>

        <ul className="space-y-2 font-serif text-xl text-cream lg:text-right">
          {highlights.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
