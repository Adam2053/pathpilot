"use client";

import {
  ArrowUpRightIcon,
  BrainCircuit,
  CalendarDaysIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import DottedGlowBackgroundDemo from "@/components/dotted-glow-background-demo";
import { SparklesCore } from "@/components/ui/sparkles";

export type BlogData = {
  img: string;
  date: string;
  blogTitle: string;
  description: string;
  author: string;
  badge: string;
  authorLink: string;
  blogLink: string;
  categoryLink: string;
};

const HeroSection = ({ blogdata }: { blogdata: BlogData[] }) => {
  const { theme } = useTheme();

  return (
    <section className="bg-muted dark:bg-black pt-20 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">

        {/* ================= HERO HEADER ================= */}
        <div className="flex max-w-4xl flex-col items-center gap-4 self-center text-center">

          <Badge
            variant="outline"
            className="text-sm font-normal dark:bg-gray-400/10 dark:text-white dark:border-white/10"
          >
            🚀 Roadmap Builder powered by AI
          </Badge>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Build Better Roadmaps for your learning and growth journey.
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg md:text-xl">
            AI-powered roadmap builder that helps you create personalized
            learning paths, track your progress, and achieve your goals faster.
          </p>

          {/* ================= SPARKLES ================= */}
          <div className="w-full max-w-2xl h-32 sm:h-40 relative mx-auto">

            {/* Gradient lines */}
            <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-400 dark:via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-400 dark:via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 dark:via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 dark:via-sky-500 to-transparent h-px w-1/4" />

            {/* Sparkles */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor={theme === "dark" ? "#FFFFFF" : "#1f2937"}
            />

            {/* Theme-aware mask */}
            <div
              className="absolute inset-0 w-full h-full 
              bg-muted dark:bg-black 
              [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
            />
          </div>

          {/* ================= INPUT + BUTTON ================= */}
          <div className="z-10 flex w-full max-w-md flex-col sm:flex-row items-center gap-3 p-2">
            <Input
              type="text"
              placeholder="Your topic"
              required
              className="bg-background h-10 w-full"
            />

            <Button
              size="lg"
              className="w-full sm:w-auto relative overflow-hidden rounded-lg px-6 text-base"
              asChild
            >
              <a href="#">
                Generate for free <BrainCircuit className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogdata.map((item, index) => (
            <Card
              key={`${item.author}-${index}`}
              className="group py-0 shadow-none"
            >
              <CardContent className="grid grid-cols-1 px-0 xl:grid-cols-2">

                {/* Image Section */}
                <div className="p-6">
                  <div className="h-48 sm:h-60 w-full overflow-hidden relative rounded-lg">
                    <DottedGlowBackgroundDemo />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center gap-3 p-6">
                  <div className="flex items-center gap-1.5 py-1">
                    <div className="text-muted-foreground flex grow items-center gap-1.5">
                      <CalendarDaysIcon className="size-5" />
                      <p>{item.date}</p>
                    </div>
                    <a href={item.categoryLink}>
                      <Badge className="bg-primary/10 text-primary border-0 text-sm">
                        {item.badge}
                      </Badge>
                    </a>
                  </div>

                  <a href={item.blogLink}>
                    <h3 className="text-xl font-medium">
                      {item.blogTitle}
                    </h3>
                  </a>

                  <p className="text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="flex w-full items-center justify-between gap-1 py-1">
                    <a
                      href={item.authorLink}
                      className="text-sm font-medium"
                    >
                      {item.author}
                    </a>

                    <Button
                      size="icon"
                      variant="outline"
                      className="group-hover:bg-primary hover:bg-primary hover:text-primary-foreground group-hover:text-primary-foreground group-hover:border-transparent hover:border-transparent"
                      asChild
                    >
                      <a href={item.blogLink}>
                        <ArrowUpRightIcon />
                      </a>
                    </Button>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;