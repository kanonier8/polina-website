import PhotoSlot from "@/components/PhotoSlot";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";

export default function About() {
  const { index, title, subtitle, paragraphs, stats, photo } = siteContent.about;

  return (
    <section id="about" className="border-b border-gold-500/15 bg-maroon-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.7fr] lg:items-start lg:px-10">
        <div>
          <SectionHeading index={index} title={title} subtitle={subtitle} />

          <div className="mt-6 space-y-4 text-cream-dim">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "font-serif text-lg text-cream" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-gold-500/30 pt-4">
                <p className="font-serif text-3xl text-gold-400">{stat.value}</p>
                <p className="mt-1 text-sm text-cream-dim">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-gold-500/20">
          <PhotoSlot photo={photo} className="absolute inset-0" sizes="500px" />
        </div>
      </div>
    </section>
  );
}
