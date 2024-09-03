import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Sportlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:legt-60 md:-top-20" fill="blue" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-800">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and ransform your musical
          journey today. Whether oui re albeginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Chai aur Code
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
