import Image from "next/image";
import PhotoSlot from "@/components/PhotoSlot";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/content";

export default function Contacts() {
  const {
    index,
    title,
    subtitle,
    phones,
    email,
    city,
    cityNote,
    ctaLabel,
    confidentialityNote,
    backgroundImage,
    testimonial,
  } = siteContent.contacts;

  return (
    <section id="contacts" className="bg-noir">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden border-b border-gold-500/15 px-6 py-20 lg:border-r lg:border-b-0 lg:px-10">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="700px"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/90 to-noir/60" />

          <div className="relative">
            <SectionHeading index={index} title={title} subtitle={subtitle} />

            <div className="mt-8 space-y-3 text-cream-dim">
              {phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 hover:text-gold-400"
                >
                  <span aria-hidden>☎</span> {phone}
                </a>
              ))}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-gold-400"
              >
                <span aria-hidden>✉</span> {email}
              </a>
              <p className="flex items-center gap-3">
                <span aria-hidden>⚲</span> {city}{" "}
                <span className="text-sm text-cream-dim/70">({cityNote})</span>
              </p>
            </div>

            <a
              href="#contacts"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-noir transition-colors hover:bg-gold-400"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </a>

            <p className="mt-4 text-xs text-cream-dim/70">{confidentialityNote}</p>
          </div>
        </div>

        <div className="relative px-6 py-20 lg:px-10">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-sm border border-gold-500/20 lg:float-right lg:ml-8">
            <PhotoSlot photo={testimonial.photo} className="absolute inset-0" sizes="320px" />
          </div>

          <span className="font-serif text-3xl text-gold-400" aria-hidden>
            “
          </span>
          <p className="mt-2 max-w-md text-cream-dim">{testimonial.quote}</p>
          <p className="mt-6 font-serif text-cream">{testimonial.name}</p>
          <p className="text-sm text-gold-400">{testimonial.role}</p>
        </div>
      </div>
    </section>
  );
}
