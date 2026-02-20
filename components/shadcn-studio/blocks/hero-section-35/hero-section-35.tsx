"use client"

import { ArrowUpRightIcon, BrainCircuit, CalendarDaysIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import DottedGlowBackgroundDemo from "@/components/dotted-glow-background-demo";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

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
    <section className="bg-muted pt-20 dark:bg-black pb-12 sm:pb-16 lg:pb-24">
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="flex max-w-4xl flex-col items-center gap-4 self-center text-center">
          <Badge
            variant="outline"
            className="text-sm font-normal dark:bg-gray-400/10 dask:text-white dark:border-white/10 drop-shadow-2xl"
          >
            🚀 Roadmap Builder powered by AI
          </Badge>
          <h1 className="text-3xl leading-[1.29167] font-semibold text-balance sm:text-4xl lg:text-5xl">
            Build Better Roadmaps for your learning and growth journey.
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Ai-powered roadmap builder that helps you create personalized
            learning paths, track your progress, and achieve your goals faster.
          </p>
          {theme === "dark" ? (
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          ) : (
            <div className="w-[40rem] h-40 relative">
              {/* Top Gradient Lines */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-400 dark:via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-400 dark:via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 dark:via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-400 dark:via-sky-500 to-transparent h-px w-1/4" />

              {/* Sparkles */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#1f2937" // neutral-800 (better than pure black for muted bg)
              />

              {/* Proper Theme Mask */}
              <div
                className="absolute inset-0 w-full h-full 
    bg-muted dark:bg-black 
    [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
              />
            </div>
          )}

          <div className="z-10 flex items-center gap-3 p-2">
            <Input
              type="text"
              placeholder="Your topic"
              required
              className="bg-background h-10 sm:w-70"
            />
            <Button
              size="lg"
              className="relative w-fit overflow-hidden rounded-lg px-6 text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              asChild
            >
              <a href="#">
                Generate for free <BrainCircuit />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogdata.map((item, index) => (
            <Card
              key={`${item.author}-${index}`}
              className="group py-0 shadow-none"
            >
              <CardContent className="grid grid-cols-1 px-0 xl:grid-cols-2">
                <div className="p-6">
                  <div className="h-59.5 w-full overflow-hidden position-relative rounded-lg">
                    <DottedGlowBackgroundDemo />
                    {/* <img
                      src={item.img}
                      alt={item.author}
                      className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    /> */}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-3 p-6">
                  <div className="flex items-center gap-1.5 py-1">
                    <div className="text-muted-foreground flex grow items-center gap-1.5">
                      <CalendarDaysIcon className="size-6" />
                      <p>{item.date}</p>
                    </div>
                    <a href={item.categoryLink}>
                      <Badge className="bg-primary/10 text-primary border-0 text-sm">
                        {item.badge}
                      </Badge>
                    </a>
                  </div>
                  <a href={item.blogLink}>
                    <h3 className="text-xl font-medium">{item.blogTitle}</h3>
                  </a>

                  <p className="text-muted-foreground">{item.blogTitle}</p>
                  <div className="flex w-full items-center justify-between gap-1 py-1">
                    <a href={item.authorLink} className="text-sm font-medium">
                      {item.author}
                    </a>
                    <Button
                      size="icon"
                      variant="outline"
                      className="group-hover:bg-primary! hover:bg-primary! hover:text-primary-foreground group-hover:text-primary-foreground group-hover:border-transparent hover:border-transparent"
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
