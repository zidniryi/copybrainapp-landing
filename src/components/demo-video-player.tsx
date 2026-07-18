"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function DemoVideoPlayer({
  src,
  poster,
  aspectRatio = "1920 / 1258",
  className,
}: {
  src: string;
  poster: string;
  aspectRatio?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handlePlay = () => {
    setLoaded(true);
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]",
        className
      )}
      style={{ aspectRatio }}
    >
      {loaded ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          controls={playing}
          playsInline
          preload="none"
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play demo video"
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={poster}
            alt="CopyBrain product demo preview"
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
