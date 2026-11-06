import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";

export default function Approach() {
  const { index, title, subtitle, steps, quote, text } = siteContent.approach;

  return (
    <section id="approach" className="border-b border-gold-500/15 bg-maroon-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading index={index} title={title} subtitle={subtitle} />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.index} className="border-t border-gold-500/30 pt-5">
              <span className="text-sm text-gold-400">{step.index}</span>
              <h3 className="mt-2 font-serif text-xl text-cream">{step.title}</h3>
              <p className="mt-2 text-sm text-cream-dim">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-gold-500/20 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <blockquote className="font-serif text-2xl leading-snug text-gold-300">
            «{quote}»
          </blockquote>
          <p className="text-cream-dim">{text}</p>
        </div>
      </div>
    </section>
  );
}
