"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function YoutubeEmbed({
  videoId,
  poster,
  title,
  aspectRatio = "16 / 9",
  className,
}: {
  videoId: string;
  poster: string;
  title: string;
  aspectRatio?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]",
        className
      )}
      style={{ aspectRatio }}
    >
      {loaded ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Play: ${title}`}
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            priority={false}
          />
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-white/95 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] transition-transform group-hover:scale-105">
              <Play className="ml-1 size-6 fill-[#09090b] text-[#09090b]" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
