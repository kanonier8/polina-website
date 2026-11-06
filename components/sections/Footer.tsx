import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/15 bg-noir px-6 py-8 text-center text-sm text-cream-dim/70 lg:px-10">
      © {siteContent.footer.text}
    </footer>
  );
}
