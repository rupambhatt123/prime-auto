"use client";
import { motion, MotionConfig } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF6A13";
const SQ = 22;

const { common, categories } = websiteData;
const contactData =
  categories.Automotive.sections.ContactBanner.variants.PrimeContactBanner1;

const CONTACT_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
};

const row = (a: string, b: string) =>
  `repeating-linear-gradient(90deg, ${a} 0 ${SQ}px, ${b} ${SQ}px ${SQ * 2}px)`;

function CheckeredStrip({
  top,
  bottom,
}: {
  top: [string, string];
  bottom: [string, string];
}) {
  const h = Math.max(10, SQ - 6);
  return (
    <div aria-hidden className="flex w-full flex-col overflow-hidden bg-white">
      <motion.div
        className="w-full"
        style={{
          height: h,
          backgroundImage: row(...top),
          backgroundSize: `${SQ * 2}px ${h}px`,
        }}
        animate={{ backgroundPositionX: ["0px", `${SQ * 2}px`] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="w-full"
        style={{
          height: h,
          backgroundImage: row(...bottom),
          backgroundSize: `${SQ * 2}px ${h}px`,
        }}
        animate={{ backgroundPositionX: [`${SQ * 2}px`, "0px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function ContactBanner() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id={contactData.sectionId}
        className={`${montserrat.className} scroll-mt-20 w-full bg-white text-white sm:scroll-mt-24`}
      >
        <CheckeredStrip top={[NAVY, "#ffffff"]} bottom={[ORANGE, NAVY]} />

        <div className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                maskImage:
                  "linear-gradient(to right, black 0%, transparent 60%)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 0%, transparent 60%)",
              }}
            />
            <motion.div
              className="absolute -left-24 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: `${ORANGE}33` }}
              animate={{ x: [0, 60, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full blur-3xl"
              style={{ backgroundColor: "#3b6cff22" }}
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-1/2 left-0 h-[200%] w-1/4 rotate-12 blur-2xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
              }}
              animate={{ x: ["-40%", "500%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 4,
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-3.5 py-7 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-0">
              <div className="lg:pr-10">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-xl font-extrabold leading-[1.2] tracking-tight sm:text-3xl lg:text-[2.45rem]"
                >
                  {contactData.titleLine1}
                  <br />
                  {contactData.titleLead}{" "}
                  <span style={{ color: ORANGE }}>
                    {contactData.titleHighlight}
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  className="mt-2.5 max-w-2xl text-xs font-medium leading-relaxed text-white/90 sm:mt-3.5 sm:text-base"
                >
                  {contactData.description}
                </motion.p>
              </div>

              <div className="relative lg:py-1 lg:pl-10">
                <motion.span
                  aria-hidden
                  className="absolute left-0 top-0 hidden h-full w-[2px] origin-top bg-white/80 lg:block"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                />
                <motion.span
                  aria-hidden
                  style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                    backgroundColor: ORANGE,
                  }}
                  className="absolute left-0 top-1/2 hidden h-5 w-3.5 -translate-y-1/2 lg:block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />

                <ul className="space-y-0.5">
                  {contactData.contacts.map((c, i) => {
                    const Icon = CONTACT_ICONS[c.icon] ?? Mail;
                    const value =
                      common[c.valueKey as keyof typeof common] as string;
                    const href = c.hrefKey
                      ? (common[c.hrefKey as keyof typeof common] as string)
                      : undefined;
                    const last = i === contactData.contacts.length - 1;
                    return (
                      <motion.li
                        key={c.label}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + i * 0.12,
                          ease: "easeOut",
                        }}
                        className="group flex items-center gap-3 sm:gap-4"
                      >
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl"
                          style={{ color: ORANGE }}
                        >
                          <Icon
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            strokeWidth={1.8}
                          />
                        </div>
                        <div
                          className={`min-w-0 flex-1 py-2.5 sm:py-3 ${
                            last ? "" : "border-b border-white/50"
                          }`}
                        >
                          <p className="text-sm font-bold leading-tight sm:text-lg">
                            {c.label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="mt-0.5 inline-block truncate text-xs font-medium text-white/90 transition-colors hover:text-[#FF6A13] sm:text-base"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-xs font-medium leading-snug text-white/90 sm:text-base">
                              {value}
                            </p>
                          )}
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CheckeredStrip top={[ORANGE, NAVY]} bottom={[NAVY, "#ffffff"]} />
      </section>
    </MotionConfig>
  );
}