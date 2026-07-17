import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 font-semibold tracking-tight text-foreground",
        className
      )}
      aria-label="CopyBrain home"
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={28}
        height={28}
        priority
        className="h-7 w-7 shrink-0 rounded-[7px] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
      />
      <span className="text-[15px]">CopyBrain</span>
    </Link>
  );
}
