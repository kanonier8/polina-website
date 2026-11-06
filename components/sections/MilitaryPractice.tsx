import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";

export default function MilitaryPractice() {
  const { index, title, subtitle, items, image } = siteContent.militaryPractice;

  return (
    <section className="border-b border-gold-500/15 bg-noir">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1.1fr] lg:px-10">
        <div className="relative min-h-[260px] w-full overflow-hidden rounded-sm border border-gold-500/20">
          <Image
            src={image}
            alt=""
            fill
            sizes="500px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
        </div>

        <div>
          <SectionHeading index={index} title={title} subtitle={subtitle} />

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-cream-dim">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
