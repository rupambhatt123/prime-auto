"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { Phone, MapPin, Mail, Play } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF6A13";
const SQ = 24;

const { common, categories } = websiteData;
const footerData =
  categories.Automotive.sections.Footer.variants.PrimeFooter1;

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

const footerContacts = [
  { icon: Phone, lines: [common.phone], href: common.phoneHref },
  {
    icon: MapPin,
    lines: footerData.addressLines,
    href: common.addressHref,
  },
  { icon: Mail, lines: [common.email], href: common.emailHref },
];

const footerSocials = common.socialLinks.filter((s) => s.id !== "instagram");

const row = (a: string, b: string) =>
  `repeating-linear-gradient(90deg, ${a} 0 ${SQ}px, ${b} ${SQ}px ${SQ * 2}px)`;

function CheckeredStrip() {
  const h = SQ - 4;
  const anim = { backgroundPositionX: ["0px", `${SQ * 2}px`] };
  const tr = { duration: 16, repeat: Infinity, ease: "linear" as const };
  return (
    <div aria-hidden className="flex w-full flex-col overflow-hidden">
      <motion.div
        style={{
          height: h,
          backgroundImage: row(ORANGE, NAVY),
          backgroundSize: `${SQ * 2}px ${h}px`,
        }}
        animate={anim}
        transition={tr}
      />
      <motion.div
        style={{
          height: h,
          backgroundImage: row(NAVY, ORANGE),
          backgroundSize: `${SQ * 2}px ${h}px`,
        }}
        animate={anim}
        transition={tr}
      />
    </div>
  );
}

function Gear({ className }: { className?: string }) {
  const teeth = Array.from({ length: 10 });
  return (
    <svg viewBox="-30 -30 60 60" className={className} aria-hidden>
      <defs>
        <linearGradient id="gear-g" x1="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFB020" />
          <stop offset="1" stopColor={ORANGE} />
        </linearGradient>
      </defs>
      {teeth.map((_, i) => (
        <rect
          key={i}
          x="-4.5"
          y="-28"
          width="9"
          height="12"
          rx="2"
          fill="url(#gear-g)"
          transform={`rotate(${i * 36})`}
        />
      ))}
      <circle r="21" fill="url(#gear-g)" />
      <circle r="10" fill={NAVY} />
    </svg>
  );
}

function Logo() {
  const [logoError, setLogoError] = useState(false);

  if (!logoError && footerData.logo) {
    return (
      <div className="relative h-20 w-52 sm:h-24 sm:w-64">
        <Image
          src={footerData.logo}
          alt={`${common.siteNamePrimary} ${common.siteNameAccent}`}
          fill
          onError={() => setLogoError(true)}
          className="object-contain object-left"
        />
      </div>
    );
  }

  return (
    <div className="inline-block">
      <div className="relative h-14 w-52 sm:h-[4.25rem] sm:w-[15rem]">
        <motion.div
          className="absolute left-[7.2rem] top-0 h-12 w-12 sm:left-[8.4rem] sm:h-14 sm:w-14"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <Gear className="h-full w-full" />
        </motion.div>
        <svg viewBox="0 0 240 68" className="absolute inset-0 h-full w-full" aria-hidden>
          <path
            d="M10 62 C 30 40, 86 30, 128 40 C 172 46, 208 52, 228 62 C 190 54, 140 52, 96 58 C 60 62, 30 66, 10 62 Z"
            fill="#fff"
          />
          <path
            d="M70 56 C 100 48, 150 48, 196 58 C 150 56, 100 56, 70 56 Z"
            fill={ORANGE}
          />
        </svg>
      </div>
      <p className="-mt-1 text-3xl font-black italic leading-none tracking-tight sm:text-[2.4rem]">
        <span className="text-white">{common.siteNamePrimary}</span>{" "}
        <span style={{ color: ORANGE }}>{common.siteNameAccent}</span>
      </p>
      <div className="mt-2 flex items-center gap-2 sm:gap-2.5">
        <span className="h-[2px] w-6 sm:w-8" style={{ backgroundColor: "#FFB020" }} />
        <span className="text-[9px] font-bold uppercase italic tracking-[0.18em] text-white sm:text-xs sm:tracking-[0.22em]">
          {common.tagline}
        </span>
        <span className="h-[2px] w-6 sm:w-8" style={{ backgroundColor: "#FFB020" }} />
      </div>
    </div>
  );
}

function Heading({ lead, tail }: { lead: string; tail: string }) {
  return (
    <>
      <h3 className="text-xl font-extrabold sm:text-[1.9rem]">
        {lead} <span style={{ color: ORANGE }}>{tail}</span>
      </h3>
      <div className="mb-4 mt-2 flex items-center sm:mb-6 sm:mt-3">
        <motion.span
          className="h-1.5 w-12 origin-left rounded-full sm:w-14"
          style={{ backgroundColor: "#FFB020" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.span
          className="-ml-1 h-1.5 w-16 origin-left rounded-full bg-white/30 sm:w-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        />
      </div>
    </>
  );
}

const col = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
});

export default function Footer() {
  const brandTitle = `${common.siteNamePrimary.charAt(0)}${common.siteNamePrimary
    .slice(1)
    .toLowerCase()} ${common.siteNameAccent.charAt(0)}${common.siteNameAccent
    .slice(1)
    .toLowerCase()}`;

  return (
    <MotionConfig reducedMotion="user">
      <footer
        className={`${montserrat.className} relative w-full overflow-hidden text-white`}
        style={{ backgroundColor: NAVY }}
      >
        <CheckeredStrip />

        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, transparent 85%)",
            }}
          />
          <motion.div
            className="absolute -left-24 top-1/3 h-[320px] w-[320px] rounded-full blur-3xl"
            style={{ backgroundColor: `${ORANGE}2E` }}
            animate={{ x: [0, 60, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 top-10 h-[300px] w-[300px] rounded-full blur-3xl"
            style={{ backgroundColor: "#3b6cff1f" }}
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-1/2 left-0 h-[200%] w-1/4 rotate-12 blur-2xl"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
            animate={{ x: ["-40%", "500%"] }}
            transition={{ duration: 11, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-7 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.05fr_1fr_1.1fr] lg:gap-0">
            <motion.div {...col(0)} className="lg:pr-10">
              <a href="#home" aria-label="Prime Auto home" className="inline-block">
                <Logo />
              </a>
              <p className="mt-3.5 max-w-xs text-xs font-medium leading-relaxed text-white/90 sm:mt-5 sm:text-base">
                {footerData.about}
              </p>
            </motion.div>

            <motion.div {...col(1)} className="lg:border-l lg:border-white/70 lg:px-10">
              <Heading
                lead={footerData.contactHeadingLead}
                tail={footerData.contactHeadingTail}
              />
              <ul className="space-y-3 sm:space-y-4">
                {footerContacts.map((c, i) => {
                  const Icon = c.icon;
                  const body = c.lines.map((l, k) => (
                    <span key={k} className="block">
                      {l}
                    </span>
                  ));
                  const isExternal = c.href?.startsWith("http");
                  return (
                    <li key={i} className="group flex items-center gap-3 sm:gap-4">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-md shadow-black/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-12 sm:w-12"
                        style={{ color: ORANGE }}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                      </span>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-xs font-medium leading-snug transition-colors hover:text-[#FF6A13] sm:text-lg"
                        >
                          {body}
                        </a>
                      ) : (
                        <p className="text-xs font-medium leading-snug sm:text-lg">{body}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              {...col(2)}
              className="md:col-span-2 lg:col-span-1 lg:border-l lg:border-white/70 lg:pl-10"
            >
              <Heading
                lead={footerData.linksHeadingLead}
                tail={footerData.linksHeadingTail}
              />
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[footerData.linksCol1, footerData.linksCol2].map((list, ci) => (
                  <ul key={ci} className="space-y-2.5 sm:space-y-3.5">
                    {list.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="group flex items-center gap-2.5 text-xs font-medium transition-colors hover:text-[#FF6A13] sm:gap-3 sm:text-base"
                        >
                          <Play
                            className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5"
                            style={{ color: ORANGE, fill: ORANGE }}
                          />
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            {l.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative border-t border-white/30">
          <div
            aria-hidden
            style={{
              clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
              backgroundColor: ORANGE,
            }}
            className="absolute bottom-0 right-0 top-0 hidden w-[44%] overflow-hidden sm:block"
          >
            <motion.span
              className="absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-white/25 blur-md"
              animate={{ x: ["0%", "700%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-4 sm:px-6 sm:py-5 lg:px-8">
            <p className="text-center text-xs font-medium text-white sm:text-left sm:text-base">
              © Copyright {footerData.copyrightYear}{" "}
              <span style={{ color: ORANGE }}>{brandTitle}</span>
              {footerData.copyrightSuffix}
            </p>

            <div className="flex items-center gap-2.5 sm:gap-4">
              {footerSocials.map((s, i) => {
                const Icon = SOCIAL_ICONS[s.icon];
                if (!Icon) return null;
                return (
                  <motion.a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + i * 0.08,
                      ease: "backOut",
                    }}
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg shadow-black/30 sm:h-12 sm:w-12"
                    style={{ backgroundColor: NAVY }}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}