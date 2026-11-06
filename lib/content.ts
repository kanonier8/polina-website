import siteJson from "@/content/site.json";

export interface Photo {
  src: string | null;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderContent {
  name: string;
  role: string;
  nav: NavLink[];
  phone: string;
  phoneNote: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface HeroContent {
  index: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  highlights: string[];
  backgroundImage: string;
  photo: Photo;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  index: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  stats: Stat[];
  photo: Photo;
}

export interface EducationContent {
  index: string;
  title: string;
  subtitle: string;
  text: string;
  items: string[];
  backgroundImage: string;
}

export interface PracticeCard {
  title: string;
  description: string;
  image: string;
}

export interface CriminalPracticeContent {
  index: string;
  title: string;
  subtitle: string;
  cards: PracticeCard[];
}

export interface MilitaryPracticeContent {
  index: string;
  title: string;
  subtitle: string;
  items: string[];
  image: string;
}

export interface ApproachStep {
  index: string;
  title: string;
  description: string;
}

export interface ApproachContent {
  index: string;
  title: string;
  subtitle: string;
  steps: ApproachStep[];
  quote: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: Photo;
}

export interface ContactsContent {
  index: string;
  title: string;
  subtitle: string;
  phones: string[];
  email: string;
  city: string;
  cityNote: string;
  ctaLabel: string;
  confidentialityNote: string;
  backgroundImage: string;
  testimonial: Testimonial;
}

export interface FooterContent {
  text: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  education: EducationContent;
  criminalPractice: CriminalPracticeContent;
  militaryPractice: MilitaryPracticeContent;
  approach: ApproachContent;
  contacts: ContactsContent;
  footer: FooterContent;
}

export const siteContent = siteJson as SiteContent;
