"use client";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF4A12";

const content = {
  badge: "Our Brands",
  titleLead: "Trusted Car Brands We",
  titleHighlight: "Service",
  brands: [
    { name: "Nissan", logo: "/nissan.webp" },
    { name: "Land Rover", logo: "/landrover.webp" },
    { name: "BMW", logo: "/bmw.webp" },
    { name: "KIA", logo: "/kia.webp" },
    { name: "Lamborghini", logo: "/lamborghini.webp" },
    { name: "Toyota", logo: "/toyota.webp" },
    { name: "Porsche", logo: "/porsche.webp" },
    { name: "Rolls-Royce", logo: "/rolls.webp" },
    { name: "Ferrari", logo: "/ferrari.webp" },
    { name: "Tesla", logo: "/tesla.webp" },
  ],
};

export default function Brands() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="brands"
        className={`${montserrat.className} relative scroll-mt-20 w-full overflow-hidden bg-[#fafafb] py-7 sm:scroll-mt-24 sm:py-10 lg:py-12`}
      >
        {/* Theme background: dot grid, drifting glows, slow dashed ring */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(#d3d8e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
            }}
          />
          <motion.div
            className="absolute -left-32 top-0 h-[300px] w-[300px] rounded-full blur-3xl"
            style={{ backgroundColor: `${ORANGE}1A` }}
            animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full blur-3xl"
            style={{ backgroundColor: `${NAVY}12` }}
            animate={{ x: [0, -40, 0], y: [0, -24, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-20 -top-20 hidden h-56 w-56 rounded-full border-2 border-dashed opacity-25 lg:block"
            style={{ borderColor: ORANGE }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-5 text-center sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 sm:gap-4"
            >
              <motion.span
                className="h-[2px] w-7 origin-right sm:w-20"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] sm:text-xl sm:tracking-[0.25em]"
                style={{ color: ORANGE }}
              >
                {content.badge}
              </span>
              <motion.span
                className="h-[2px] w-7 origin-left sm:w-20"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mt-2 text-xl font-extrabold tracking-tight sm:mt-2.5 sm:text-3xl lg:text-[2.45rem]"
              style={{ color: NAVY }}
            >
              {content.titleLead}{" "}
              <span style={{ color: ORANGE }}>{content.titleHighlight}</span>
            </motion.h2>

            <div className="mt-2.5 flex items-center justify-center gap-2 sm:mt-3">
              <motion.span
                className="h-1 w-6 origin-right rounded-full sm:h-1.5 sm:w-8"
                style={{ backgroundColor: NAVY }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.span
                className="h-1 w-12 origin-left rounded-full sm:h-1.5 sm:w-16"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </div>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 border-l border-t border-slate-200 bg-white/80 shadow-lg shadow-slate-300/30 backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-5">
            {content.brands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: (i % 5) * 0.06 + Math.floor(i / 5) * 0.12,
                  ease: "easeOut",
                }}
                className="group relative flex h-24 items-center justify-center overflow-hidden border-b border-r border-slate-200 p-3 transition-colors duration-300 hover:bg-orange-50/60 sm:h-32 sm:p-4 lg:h-36"
              >
                <div className="relative h-14 w-24 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110 sm:h-20 sm:w-32 lg:h-24 lg:w-36">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    sizes="(min-width: 1024px) 144px, (min-width: 640px) 128px, 96px"
                    className="object-contain drop-shadow-sm"
                  />
                </div>
                {/* light sweep on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[130%] group-hover:opacity-100"
                />
                {/* orange underline */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ backgroundColor: ORANGE }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}