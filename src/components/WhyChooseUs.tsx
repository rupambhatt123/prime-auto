"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, MotionConfig, useInView } from "framer-motion";
import { Check, Wrench } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF6A13";

const whyChooseData =
  websiteData.categories.Automotive.sections.WhyChooseUs.variants
    .PrimeWhyChoose1;

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id={whyChooseData.sectionId}
        className={`${montserrat.className} relative scroll-mt-20 overflow-hidden bg-[#fafafb] py-8 sm:scroll-mt-24 sm:py-12 lg:py-14`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(#d3d8e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)",
            }}
          />
          <motion.div
            className="absolute -left-40 top-10 h-[360px] w-[360px] rounded-full blur-3xl"
            style={{ backgroundColor: `${ORANGE}1A` }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full blur-3xl"
            style={{ backgroundColor: `${NAVY}12` }}
            animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 -top-24 hidden h-64 w-64 rounded-full border-2 border-dashed opacity-25 lg:block"
            style={{ borderColor: ORANGE }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-7 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative pb-4 sm:pb-20 lg:pb-24"
          >
            <div className="group relative overflow-hidden rounded-lg shadow-xl shadow-slate-300/60">
              <img
                src={whyChooseData.image}
                alt={whyChooseData.imageAlt}
                className="h-[210px] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 sm:h-[340px] sm:w-[88%] lg:h-[380px]"
                style={{ backgroundColor: NAVY }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative z-10 mx-auto -mt-10 w-[86%] max-w-[19.5rem] sm:absolute sm:bottom-0 sm:right-0 sm:mx-0 sm:mt-0 sm:w-[54%] sm:max-w-[21rem]"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="overflow-hidden rounded-md shadow-2xl shadow-black/30"
              >
                <div
                  className="relative overflow-hidden px-3 pb-5 pt-3.5 text-center text-white sm:px-4 sm:pb-7 sm:pt-5"
                  style={{ backgroundColor: ORANGE }}
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-white/25 blur-md"
                    animate={{ x: ["0%", "600%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatDelay: 4.5,
                      ease: "easeInOut",
                    }}
                  />
                  <p className="relative text-xs font-semibold sm:text-base">
                    {whyChooseData.offer.pre}
                  </p>
                  <p className="relative my-0.5 text-2xl font-black leading-none tabular-nums sm:my-1 sm:text-4xl lg:text-[2.85rem]">
                    <CountUp
                      to={whyChooseData.offer.value}
                      suffix={whyChooseData.offer.valueSuffix}
                    />
                  </p>
                  <p className="relative text-xs font-semibold sm:text-base">
                    {whyChooseData.offer.post}
                  </p>
                </div>

                <div className="relative" style={{ backgroundColor: NAVY }}>
                  <motion.div
                    aria-hidden
                    className="h-[3px] w-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, #fff 0 12px, transparent 12px 20px)",
                      backgroundSize: "20px 3px",
                    }}
                    animate={{ backgroundPositionX: ["0px", "20px"] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <Wrench
                    className="absolute -top-3.5 left-3 h-6 w-6 text-white sm:-top-5 sm:h-8 sm:w-8"
                    strokeWidth={2.2}
                  />
                  <div className="px-3 pb-4 pt-4 text-center text-white sm:px-4 sm:pb-7 sm:pt-6">
                    <p className="text-xs font-extrabold leading-tight sm:text-lg">
                      {whyChooseData.offer.title}
                    </p>
                    <p className="mt-1 text-[11px] font-medium sm:mt-1.5 sm:text-sm">
                      {whyChooseData.offer.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2.5 sm:gap-3.5"
            >
              <motion.span
                className="h-[2px] w-6 origin-left sm:w-12"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span
                className="text-xs font-extrabold uppercase tracking-[0.2em] sm:text-lg sm:tracking-[0.25em]"
                style={{ color: ORANGE }}
              >
                {whyChooseData.badge}
              </span>
              <motion.span
                className="h-[2px] w-6 origin-left sm:w-12"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-2.5 text-xl font-extrabold leading-[1.2] tracking-tight sm:mt-3 sm:text-4xl lg:text-[2.65rem]"
              style={{ color: "#0A1128" }}
            >
              <span className="block">{whyChooseData.titleLine1}</span>
              <span className="block">
                {whyChooseData.titleLine2Lead}{" "}
                <span style={{ color: ORANGE }}>
                  {whyChooseData.titleHighlight}
                </span>
              </span>
            </motion.h2>

            <motion.span
              className="mt-3 block h-1 w-16 origin-left rounded-full sm:mt-3.5 sm:w-20"
              style={{ backgroundColor: ORANGE }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-3 max-w-xl text-xs font-medium leading-[1.7] text-slate-600 sm:mt-4 sm:text-base sm:leading-[1.75]"
            >
              {whyChooseData.description}
            </motion.p>

            <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
              {whyChooseData.reasons.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-slate-100 to-transparent py-1 pl-1.5 pr-3 transition-transform duration-300 hover:translate-x-1.5 sm:gap-3.5 sm:py-1.5 sm:pl-2 sm:pr-4"
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white shadow-md shadow-orange-300/50 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <Check
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      strokeWidth={3.5}
                    />
                  </span>
                  <span
                    className="text-xs font-bold leading-snug sm:text-base"
                    style={{ color: NAVY }}
                  >
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}