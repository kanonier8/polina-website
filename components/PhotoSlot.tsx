import Image from "next/image";
import type { Photo } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";

export default function PhotoSlot({
  photo,
  className,
  sizes,
  priority,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (photo.src) {
    return (
      <Image
        src={withBasePath(photo.src)}
        alt={photo.alt}
        fill
        sizes={sizes ?? "400px"}
        priority={priority}
        className={`object-cover ${className ?? ""}`}
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-maroon-800 to-maroon-950 text-gold-300/70 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-14 w-14 opacity-60"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
      <span className="text-xs tracking-wide uppercase opacity-70">Фото</span>
    </div>
  );
}
