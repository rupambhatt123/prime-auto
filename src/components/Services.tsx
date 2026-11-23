"use client";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  Disc3,
  Zap,
  Droplets,
  Cog,
  Wind,
  Snowflake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF6A13";

const servicesData =
  websiteData.categories.Automotive.sections.Services.variants.PrimeServices1;

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    style?: React.CSSProperties;
  }>
> = {
  disc: Disc3,
  zap: Zap,
  droplets: Droplets,
  cog: Cog,
  wind: Wind,
  snowflake: Snowflake,
};

type ServiceItem = (typeof servicesData.items)[number];

const HEX = "M25 3 L75 3 L97 47 L75 91 L25 91 L3 47 Z";

function Hex({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 100 94" className={className} fill="none">
      <path d={HEX} stroke={ORANGE} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceCard({
  s,
  index,
  animateHex = true,
}: {
  s: ServiceItem;
  index: number;
  animateHex?: boolean;
}) {
  const Icon = SERVICE_ICONS[s.icon] ?? Cog;

  return (
    <article className="group flex items-start gap-3.5 sm:gap-5">
      <div className="relative h-20 w-[5.3rem] shrink-0 sm:h-24 sm:w-[6.4rem]">
        <svg
          aria-hidden
          viewBox="0 0 100 94"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <path d={HEX} fill="#fff3ea" />
          {animateHex ? (
            <motion.path
              d={HEX}
              stroke={ORANGE}
              strokeWidth="2"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: 0.2 + (index % 3) * 0.1,
                ease: "easeOut",
              }}
            />
          ) : (
            <path
              d={HEX}
              stroke={ORANGE}
              strokeWidth="2"
              strokeLinejoin="round"
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110">
          <Icon
            className="h-8 w-8 sm:h-10 sm:w-10"
            style={{ color: NAVY }}
            strokeWidth={1.6}
          />
        </div>
      </div>

      <div className="min-w-0 pt-0.5">
        <h3
          className="text-base font-extrabold uppercase leading-tight sm:text-xl"
          style={{ color: NAVY }}
        >
          {s.title}
        </h3>
        <span
          className="mt-1.5 block h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-16 sm:mt-2 sm:w-12"
          style={{ backgroundColor: ORANGE }}
        />
        <p className="mt-2 text-xs font-medium leading-relaxed text-slate-700 sm:mt-2.5 sm:text-sm">
          {s.description}
        </p>
      </div>
    </article>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = servicesData.items.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const currentService = servicesData.items[activeIndex];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id={servicesData.sectionId}
        className={`${montserrat.className} relative scroll-mt-20 overflow-hidden bg-[#fafafb] py-8 sm:scroll-mt-24 sm:py-12 lg:py-14`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(#d3d8e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage: "linear-gradient(to bottom, black 0%, transparent 45%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 45%)",
            }}
          />
          <motion.div
            className="absolute left-1/2 top-0 h-[320px] w-[560px] -translate-x-1/2 rounded-full blur-3xl"
            style={{ backgroundColor: `${ORANGE}1A` }}
            animate={{ x: [-40, 40, -40] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -right-24 h-[320px] w-[320px] rounded-full blur-3xl"
            style={{ backgroundColor: `${NAVY}0F` }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-10 bottom-16 hidden opacity-25 lg:block"
            animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Hex className="h-32 w-32" />
          </motion.div>
          <motion.div
            className="absolute right-6 top-24 hidden opacity-20 lg:block"
            animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            <Hex className="h-20 w-20" />
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-2.5 sm:gap-5"
            >
              <motion.span
                className="h-[2px] w-8 origin-right sm:w-24"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
              <span
                className="text-sm font-extrabold uppercase tracking-[0.2em] sm:text-2xl lg:text-3xl"
                style={{ color: ORANGE }}
              >
                {servicesData.badge}
              </span>
              <motion.span
                className="h-[2px] w-8 origin-left sm:w-24"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-2.5 text-2xl font-extrabold leading-tight tracking-tight sm:mt-3 sm:text-4xl lg:text-[2.75rem]"
              style={{ color: NAVY }}
            >
              {servicesData.titleLead}{" "}
              <span style={{ color: ORANGE }}>{servicesData.titleHighlight}</span>{" "}
              {servicesData.titleTail}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mx-auto mt-2.5 max-w-2xl text-xs font-medium text-slate-700 sm:mt-3.5 sm:text-base"
            >
              {servicesData.subtitle}
            </motion.p>
          </div>

          <div className="mt-6 md:hidden">
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ServiceCard
                    s={currentService}
                    index={activeIndex}
                    animateHex={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={servicesData.prevAriaLabel}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0B1F4B] shadow-sm transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {servicesData.items.map((item, idx) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`${servicesData.goToAriaPrefix} ${item.title}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-6 bg-[#FF6A13]"
                        : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label={servicesData.nextAriaLabel}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0B1F4B] shadow-sm transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 hidden gap-x-7 gap-y-8 md:grid md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-y-9">
            {servicesData.items.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                  ease: "easeOut",
                }}
              >
                <ServiceCard s={s} index={i} animateHex />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}