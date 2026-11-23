"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Wrench } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const heroData =
  websiteData.categories.Automotive.sections.Banner.variants.PrimeHero1;

export default function Hero() {
  return (
    <section
      id={heroData.sectionId}
      className={`${montserrat.className} relative flex min-h-[430px] w-full scroll-mt-20 flex-col justify-between overflow-hidden bg-[#051B38] sm:min-h-[500px] sm:scroll-mt-24 lg:block lg:min-h-0`}
    >
      <Image
        src={heroData.image}
        alt={heroData.imageAlt}
        width={1890}
        height={725}
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center lg:static lg:block lg:h-auto"
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[#071a45]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04152d]/75 via-[#04152d]/25 to-[#04152d]/5" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center px-3 pt-5 text-center sm:px-6 sm:pt-8 lg:absolute lg:inset-x-0 lg:top-0 lg:px-0 lg:pt-[4.2vw]">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-[2.2vw]"
        >
          <motion.span
            className="h-[2px] w-6 origin-right bg-[#FF6A13] sm:w-12 lg:h-[3px] lg:w-[3.5vw]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-[10px] font-bold uppercase leading-none tracking-[0.22em] text-white drop-shadow-xs sm:text-sm lg:text-[1.45vw] lg:tracking-[0.24em]">
            {heroData.eyebrow}
          </p>
          <motion.span
            className="h-[2px] w-6 origin-left bg-[#FF6A13] sm:w-12 lg:h-[3px] lg:w-[3.5vw]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-2.5 text-[1.75rem] font-extrabold uppercase italic leading-none tracking-[-0.03em] drop-shadow-sm sm:mt-3.5 sm:text-5xl lg:mt-[1.8vw] lg:text-[5.1vw]"
        >
          <span className="text-white">{heroData.titlePrefix}</span>
          <span className="text-[#FF6A13]">{heroData.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-1.5 text-xs font-extrabold uppercase leading-none tracking-[-0.02em] text-white drop-shadow-xs sm:mt-2 sm:text-2xl lg:mt-[0.55vw] lg:text-[2.95vw]"
        >
          {heroData.subtitle}
        </motion.p>
      </div>

      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        aria-label={heroData.board.ariaLabel}
        className="relative z-10 mt-6 flex w-full justify-end px-3 pb-3 sm:absolute sm:bottom-5 sm:right-5 sm:mt-0 sm:block sm:w-52 sm:px-0 sm:pb-0 lg:bottom-auto lg:right-[2.2vw] lg:top-[5.6vw] lg:w-[14.2vw]"
      >
        <div className="w-40 rounded-xl border-2 border-white/30 bg-[#071937]/95 px-3.5 pb-4 pt-3.5 text-white shadow-sm ring-1 ring-[#FF6A13]/35 [-transform:perspective(850px)_rotateY(-16deg)_skewY(-5deg)_rotate(-1.5deg)] sm:w-full sm:rounded-2xl sm:px-4 sm:pb-6 sm:pt-5 lg:rounded-[0.75vw] lg:px-[1.2vw] lg:pb-[2.2vw] lg:pt-[1.85vw] lg:[transform:perspective(950px)_rotateY(-17deg)_skewY(-6deg)_rotate(-1.5deg)]">
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-[0.65vw]">
            <Wrench
              className="h-7 w-7 shrink-0 text-[#FF6A13] sm:h-9 sm:w-9 lg:h-[2.6vw] lg:w-[2.6vw]"
              strokeWidth={2.2}
            />
            <span
              aria-hidden="true"
              className="h-7 w-[1.5px] shrink-0 bg-[#FF6A13] sm:h-9 lg:h-[2.6vw] lg:w-[0.12vw]"
            />
            <div className="leading-[1.08]">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-white sm:text-sm lg:text-[1.15vw]">
                {heroData.board.titleLine1}
              </p>
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-white sm:text-sm lg:text-[1.15vw]">
                {heroData.board.titleLine2}
              </p>
            </div>
          </div>

          <div className="my-2.5 h-[1px] w-full bg-white/35 sm:my-3 lg:my-[0.8vw]" />

          <ul className="space-y-1.5 sm:space-y-2.5 lg:space-y-[0.85vw]">
            {heroData.board.items.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                className="flex items-center gap-2 text-[11px] font-semibold leading-tight text-white sm:gap-2.5 sm:text-sm lg:gap-[0.75vw] lg:text-[1.05vw]"
              >
                <Check
                  className="h-3.5 w-3.5 shrink-0 text-[#FF6A13] sm:h-4 sm:w-4 lg:h-[1.2vw] lg:w-[1.2vw]"
                  strokeWidth={3.5}
                />
                <span className="truncate">{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </section>
  );
}