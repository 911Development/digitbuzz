import React from "react";
import { Spotlight } from "./Spotlight";
import { motion } from "framer-motion";
import Button from "./Button";

export function SpotlightPreview({ children }) {
  return (
    <div className="h-[70svh] w-full bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {children}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 h-[50svh] flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10 w-full">
        {/* <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          DigitBuzz <br /> is the new trend.
        </h1> */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
            letterSpacing: "2px",
          }}
          animate={{
            opacity: [0, 1],
            y: [20, 0],
            letterSpacing: ["2px", "2px", "2px", "10px"],
          }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="text-white font-bold text-center text-4xl lg:text-5xl"
        >
          DIGIT BUZZ
        </motion.h1>
        <p className="mt-4 font-normal text-lg lg:text-xl text-neutral-300 max-w-lg text-center mx-auto">
          The Future of Shopping is Here: Bringing Your Style and Needs Together
          in the Digital World!
        </p>
        <br />
        <Button type={"button"} variant={"dark-outline"} className={""}>
          Explore more
        </Button>
      </div>
    </div>
  );
}
