"use client";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF6A13";
const PER_PAGE = 2;
const AUTOPLAY_MS = 6000;

const testimonialsData =
  websiteData.categories.Automotive.sections.Testimonials.variants
    .PrimeTestimonials1;

type ReviewItem = (typeof testimonialsData.reviews)[number];

const pages = Math.ceil(testimonialsData.reviews.length / PER_PAGE);

function ReviewCard({
  r,
  index,
  compact = false,
}: {
  r: ReviewItem;
  index: number;
  compact?: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white bg-white/95 shadow-lg shadow-slate-300/40 transition-transform duration-500 hover:-translate-y-1 sm:rounded-3xl ${
        compact ? "px-4 pb-5 pt-4" : "px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6"
      }`}
    >
      <div>
        <motion.span
          aria-hidden
          className={`inline-block select-none font-black leading-[1.15] pt-1 ${
            compact ? "text-3xl" : "text-4xl sm:text-5xl"
          }`}
          style={{ color: ORANGE }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.6,
          }}
        >
          “
        </motion.span>

        <p
          className={`line-clamp-3 ${
            compact
              ? "mt-1 min-h-[3.6rem] text-xs font-medium leading-[1.55] text-[#0A1128]"
              : "mt-1.5 min-h-[4.8rem] text-sm font-medium leading-[1.6] text-[#0A1128] sm:min-h-[5.25rem] sm:text-base sm:leading-[1.65]"
          }`}
        >
          {r.quote}
        </p>
      </div>

      <div
        className={`flex items-center justify-between gap-2.5 ${
          compact ? "mt-4" : "mt-5 sm:mt-6 sm:gap-3.5"
        }`}
      >
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src={r.avatar}
            alt={r.name}
            className={`shrink-0 rounded-full border-2 bg-slate-200 object-cover object-top p-[2px] ${
              compact ? "h-10 w-10" : "h-12 w-12 sm:h-14 sm:w-14"
            }`}
            style={{ borderColor: ORANGE }}
          />
          <span
            aria-hidden
            className={`w-[2px] shrink-0 ${compact ? "h-7" : "h-9"}`}
            style={{ backgroundColor: ORANGE }}
          />
          <div className="min-w-0 leading-tight">
            <p
              className={`truncate font-extrabold ${
                compact ? "text-sm" : "text-base sm:text-lg"
              }`}
              style={{ color: NAVY }}
            >
              {r.name}
            </p>
            <p
              className={`truncate font-medium text-slate-600 ${
                compact ? "text-[11px]" : "text-xs sm:text-sm"
              }`}
            >
              {r.role}
            </p>
          </div>
        </div>

        <div
          className={`relative z-10 flex shrink-0 gap-0.5 ${
            compact ? "pr-6" : "sm:mr-8"
          }`}
          aria-label={`${r.rating} out of 5 stars`}
        >
          {Array.from({ length: r.rating }).map((_, s) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.35,
                delay: 0.25 + s * 0.06,
                ease: "backOut",
              }}
            >
              <Star
                className={compact ? "h-3.5 w-3.5" : "h-4 w-4 sm:h-5 sm:w-5"}
                style={{ color: ORANGE }}
                fill="currentColor"
                strokeWidth={1}
              />
            </motion.span>
          ))}
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 160 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 right-0 h-7 w-20 sm:h-9 sm:w-28"
      >
        <path
          d="M160 0 C 152 36, 110 58, 36 60 L160 60 Z"
          fill={ORANGE}
        />
      </svg>
    </article>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [page, setPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalReviews = testimonialsData.reviews.length;

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pages);
      setMobileIndex((idx) => (idx + 1) % totalReviews);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduce, paused, totalReviews]);

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % totalReviews);
  };

  const visible = testimonialsData.reviews.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE
  );
  const currentMobileReview = testimonialsData.reviews[mobileIndex];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id={testimonialsData.sectionId}
        className={`${montserrat.className} relative scroll-mt-20 overflow-hidden bg-[#fafafb] py-6 sm:scroll-mt-24 sm:py-9 lg:py-11`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.img
            src={testimonialsData.bgImage}
            alt=""
            className="absolute right-0 top-0 h-full w-3/5 object-cover opacity-[0.14]"
            style={{
              maskImage: "linear-gradient(to left, black 0%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, transparent 85%)",
            }}
            animate={{ scale: [1.05, 1.12, 1.05] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "radial-gradient(#d3d8e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 55%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 55%)",
            }}
          />
          <motion.div
            className="absolute -left-32 top-0 h-[300px] w-[300px] rounded-full blur-3xl"
            style={{ backgroundColor: `${ORANGE}1A` }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 left-1/3 h-[240px] w-[240px] rounded-full blur-3xl"
            style={{ backgroundColor: `${NAVY}0F` }}
            animate={{ x: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-3.5 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 sm:gap-4"
            >
              <motion.span
                className="h-[2px] w-7 origin-right sm:w-16"
                style={{ backgroundColor: ORANGE }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.18em] sm:text-lg sm:tracking-[0.22em]"
                style={{ color: ORANGE }}
              >
                {testimonialsData.badge}
              </span>
              <motion.span
                className="h-[2px] w-7 origin-left sm:w-16"
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
              className="mt-2 text-xl font-extrabold leading-tight tracking-tight sm:mt-2.5 sm:text-3xl lg:text-[2.4rem]"
              style={{ color: "#0A1128" }}
            >
              {testimonialsData.titleLead}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, #FF4A12, ${ORANGE} 60%, #FF9A2E)`,
                }}
              >
                {testimonialsData.titleHighlight}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mx-auto mt-2 max-w-2xl text-xs font-medium sm:mt-2.5 sm:text-sm"
              style={{ color: NAVY }}
            >
              {testimonialsData.subtitle}
            </motion.p>
          </div>

          <div
            className="mt-4 md:hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMobileReview.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ReviewCard r={currentMobileReview} index={mobileIndex} compact />
              </motion.div>
            </AnimatePresence>

            <div className="mt-3 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleMobilePrev}
                aria-label={testimonialsData.prevAriaLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0B1F4B] shadow-sm transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {testimonialsData.reviews.map((item, idx) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setMobileIndex(idx)}
                    aria-label={`Show testimonial from ${item.name}`}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: idx === mobileIndex ? "1.35rem" : "0.45rem",
                      backgroundColor: idx === mobileIndex ? ORANGE : "#cbd5e1",
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleMobileNext}
                aria-label={testimonialsData.nextAriaLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0B1F4B] shadow-sm transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="mt-6 hidden md:block lg:mt-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:gap-6"
              >
                {visible.map((r, i) => (
                  <ReviewCard key={r.name} r={r} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex items-center justify-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Show testimonials ${i + 1} of ${pages}`}
                  aria-current={i === page}
                  className="h-2.5 rounded-full border-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    width: i === page ? "1.6rem" : "0.65rem",
                    borderColor: i === page ? ORANGE : "#9aa3b2",
                    backgroundColor: i === page ? ORANGE : "transparent",
                    outlineColor: ORANGE,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}