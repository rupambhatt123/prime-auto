"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, MotionConfig, useInView } from "framer-motion";
import { HardHat, ShieldCheck, ClipboardList, Trophy } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF6A13";

const aboutData =
  websiteData.categories.Automotive.sections.About.variants.PrimeAboutStats1;

const STAT_ICONS: Record<
  string,
  React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    style?: React.CSSProperties;
  }>
> = {
  hardhat: HardHat,
  shieldCheck: ShieldCheck,
  clipboardList: ClipboardList,
  trophy: Trophy,
};

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      <span style={{ color: ORANGE }}>{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id={aboutData.sectionId}
        className={`${montserrat.className} relative scroll-mt-16 overflow-x-clip bg-[#f8f8fa]`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[360px] overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(#d3d8e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          />
          <motion.div
            className="absolute -left-32 -top-24 h-[280px] w-[280px] rounded-full blur-3xl"
            style={{ backgroundColor: `${ORANGE}1F` }}
            animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 top-10 h-[280px] w-[280px] rounded-full blur-3xl"
            style={{ backgroundColor: `${NAVY}14` }}
            animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-10 text-center sm:px-6 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-16">
          <motion.div
            {...reveal()}
            className="flex items-center justify-center gap-2.5 sm:gap-4"
          >
            <motion.span
              className="h-[2px] w-8 origin-right sm:w-16"
              style={{ backgroundColor: NAVY }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />
            <span
              className="text-sm font-extrabold uppercase tracking-[0.25em] sm:text-2xl sm:tracking-[0.3em]"
              style={{ color: ORANGE }}
            >
              {aboutData.badge}
            </span>
            <motion.span
              className="h-[2px] w-8 origin-left sm:w-16"
              style={{ backgroundColor: NAVY }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl lg:text-[3rem]"
            style={{ color: "#0A1128" }}
          >
            {aboutData.titleLead}{" "}
            <span style={{ color: ORANGE }}>{aboutData.titleHighlight}</span>
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-4 max-w-5xl px-1 text-sm font-medium leading-[1.7] text-slate-700 sm:mt-6 sm:px-0 sm:text-lg sm:leading-[1.8]"
          >
            {aboutData.description}
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <motion.img
            aria-hidden
            src={aboutData.statsBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover blur-[6px]"
            style={{ backgroundColor: NAVY }}
            animate={{ scale: [1.08, 1.18, 1.08] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[#16161c]/80" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${NAVY}66 0%, transparent 60%)`,
            }}
          />
          <motion.div
            aria-hidden
            className="absolute -top-1/2 left-0 h-[200%] w-1/3 rotate-12 blur-3xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${ORANGE}22, transparent)`,
            }}
            animate={{ x: ["-40%", "340%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 3,
            }}
          />

          <div className="relative mx-auto grid max-w-7xl grid-cols-2 min-h-[190px] content-center gap-x-4 gap-y-6 px-4 py-8 sm:min-h-[230px] sm:px-6 sm:py-10 md:min-h-[260px] md:grid-cols-4 md:py-12">
            {aboutData.stats.map((stat, i) => {
              const Icon = STAT_ICONS[stat.icon] ?? HardHat;
              return (
                <motion.div
                  key={stat.label}
                  {...reveal(0.1 * i)}
                  className="relative flex items-center justify-center gap-3 px-2 sm:gap-3.5"
                >
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/15 md:block"
                    />
                  )}
                  <Icon
                    className="h-9 w-9 shrink-0 sm:h-12 sm:w-12"
                    style={{ color: ORANGE }}
                    strokeWidth={1.5}
                  />
                  <div className="leading-tight">
                    <p className="text-2xl font-bold tabular-nums text-white sm:text-[2.6rem]">
                      <CountUp to={stat.to} suffix={stat.suffix} />
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}