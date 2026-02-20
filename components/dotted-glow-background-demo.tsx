import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function DottedGlowBackgroundDemo() {
  return (
    <div className="relative flex h-full w-full items-end justify-end overflow-hidden rounded-lg border border-transparent px-4 shadow ring-1 shadow-black/10 ring-black/5 dark:shadow-white/10 dark:ring-white/5">
      
      {/* Center Title */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h2 className="text-center text-lg font-semibold md:text-2xl dark:text-white">
          Full Stack Developer
          <br />
          <span className="text-sm font-normal md:text-base text-neutral-500 dark:text-neutral-400">
            Roadmap
          </span>
        </h2>
      </div>

      {/* Bottom Text */}
      <div className="relative z-20 flex w-full justify-between px-2 py-3 backdrop-blur-[2px] md:px-4">
        <p className="text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">
          Learn frontend, backend & DevOps
        </p>
        <p className="text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">
          →
        </p>
      </div>

      <DottedGlowBackground
        className="absolute inset-0 pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
}