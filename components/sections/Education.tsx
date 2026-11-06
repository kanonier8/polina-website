import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";

export default function Education() {
  const { index, title, subtitle, text, items, backgroundImage } = siteContent.education;

  return (
    <section id="education" className="border-b border-gold-500/15 bg-noir">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.7fr] lg:px-10">
        <div>
          <SectionHeading index={index} title={title} subtitle={subtitle} />
          <p className="mt-6 max-w-2xl text-cream-dim">{text}</p>

          <ul className="mt-8 space-y-5">
            {items.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                <span className="text-cream-dim">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[260px] w-full overflow-hidden rounded-sm border border-gold-500/20">
          <Image
            src={withBasePath(backgroundImage)}
            alt=""
            fill
            sizes="500px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
