"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function AuroraBackgroundDemo() {
  const { t, lang } = useTranslation("common");
  const [currentLanguage, setCurrentLanguage] = useState(null);

  useEffect(
    function () {
      setCurrentLanguage(lang);
    },
    [lang]
  );

  console.log("lang: ", lang);
  console.log(currentLanguage === "en");

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="my-8">
          <Image
            src={"/logo.png"}
            width={114}
            height={120}
            className="w-32 mx-auto mb-4"
            alt="Logo"
            priority
          />
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
            className="text-dark font-bold text-center text-4xl lg:text-5xl"
          >
            DIGIT BUZZ
          </motion.h1>
        </div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          {currentLanguage === "en" ? "Coming Soon" : "Çok Yakında"}
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200">
          {currentLanguage === "en"
            ? "A New Era Begins Soon!"
            : "Yeni Bir Dönem Yakında Başlıyor!"}
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          <Link href={"/"}>
            {currentLanguage === "en" ? "Homepage" : "Anasayfa"}
          </Link>
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo;
