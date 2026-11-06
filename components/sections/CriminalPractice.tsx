import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";

export default function CriminalPractice() {
  const { index, title, subtitle, cards } = siteContent.criminalPractice;

  return (
    <section id="practice" className="border-b border-gold-500/15 bg-maroon-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading index={index} title={title} subtitle={subtitle} />

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-gold-500/15 bg-gold-500/15 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col bg-maroon-950">
              <div className="relative h-28 w-full">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="260px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 to-maroon-950/10" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-serif text-lg text-cream">{card.title}</h3>
                <p className="text-sm text-cream-dim">{card.description}</p>
                <span className="mt-auto pt-2 text-gold-400" aria-hidden>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
