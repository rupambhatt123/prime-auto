"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import {
  Calendar,
  UserCog,
  ShieldCheck,
  User,
  Phone,
  Mail,
  Car,
  Clock,
  Pencil,
  ArrowRight,
  Wrench,
  ChevronDown,
  Check,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "@/data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const NAVY = "#0B1F4B";
const ORANGE = "#FF6A13";

const bookingData =
  websiteData.categories.Automotive.sections.Booking.variants.PrimeBooking1;

const FEATURE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  calendar: Calendar,
  userCog: UserCog,
  shieldCheck: ShieldCheck,
};

type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  carModel: string;
  preferredDate: string;
  preferredTime: string;
  serviceDetails: string;
};

const emptyForm: BookingFormData = {
  name: "",
  phone: "",
  email: "",
  carModel: "",
  preferredDate: "",
  preferredTime: "",
  serviceDetails: "",
};

const field =
  "w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-sm font-medium text-slate-800 shadow-sm shadow-slate-200/70 outline-none transition placeholder:text-slate-600 focus:border-[#FF6A13] focus:ring-4 focus:ring-[#FF6A13]/15 sm:py-3 sm:pl-11 sm:pr-4";
const fieldIcon =
  "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1F4B] transition-colors peer-focus:text-[#FF6A13] sm:left-3.5 sm:h-5 sm:w-5";

export default function BookingSection() {
  const [formData, setFormData] = useState<BookingFormData>(emptyForm);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 3500);
    return () => clearTimeout(t);
  }, [sent]);

  const set =
    (key: keyof BookingFormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setFormData({ ...formData, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData(emptyForm);
  };

  const item = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-30px" },
    transition: {
      duration: 0.45,
      delay: 0.25 + i * 0.07,
      ease: "easeOut" as const,
    },
  });

  return (
    <MotionConfig reducedMotion="user">
      <section
        id={bookingData.sectionId}
        className={`${montserrat.className} relative scroll-mt-20 w-full overflow-hidden bg-[#fafafb] py-7 sm:scroll-mt-24 sm:py-10 lg:py-12`}
      >
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
            className="absolute -left-32 top-10 h-[320px] w-[320px] rounded-full blur-3xl"
            style={{ backgroundColor: `${ORANGE}1A` }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 bottom-0 h-[340px] w-[340px] rounded-full blur-3xl"
            style={{ backgroundColor: `${NAVY}14` }}
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-20 bottom-10 hidden h-56 w-56 rounded-full border-2 border-dashed opacity-25 lg:block"
            style={{ borderColor: ORANGE }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <motion.span
                  className="h-[2.5px] w-9 origin-left sm:h-[3px] sm:w-14"
                  style={{ backgroundColor: ORANGE }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <span
                  className="text-base font-extrabold uppercase sm:text-2xl"
                  style={{ color: NAVY }}
                >
                  {bookingData.badge}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mt-2.5 text-2xl font-extrabold leading-[1.15] tracking-tight sm:mt-3 sm:text-4xl lg:text-[2.85rem]"
                style={{ color: NAVY }}
              >
                {bookingData.titleLine1}
                <br />
                {bookingData.titleLead}{" "}
                <span style={{ color: ORANGE }}>
                  {bookingData.titleHighlight}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-3 max-w-md text-xs font-medium leading-[1.7] text-slate-600 sm:mt-3.5 sm:text-base"
              >
                {bookingData.description}
              </motion.p>

              <div className="mt-5 grid grid-cols-1 items-end gap-4 sm:mt-6 sm:grid-cols-[auto_1fr] sm:gap-5">
                <ul className="space-y-2.5 sm:space-y-3">
                  {bookingData.features.map((f, i) => {
                    const Icon = FEATURE_ICONS[f.icon] ?? Calendar;
                    return (
                      <motion.li
                        key={f.label}
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: 0.3 + i * 0.1,
                          ease: "easeOut",
                        }}
                        className="group flex items-center gap-3"
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md shadow-[#0B1F4B]/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-12 sm:w-12"
                          style={{ backgroundColor: NAVY }}
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.7} />
                        </span>
                        <span
                          className="text-xs font-bold sm:text-base"
                          style={{ color: NAVY }}
                        >
                          {f.label}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="relative h-36 sm:h-48 lg:-mr-8 lg:h-56">
                  <svg
                    aria-hidden
                    viewBox="0 0 200 200"
                    className="absolute right-2 top-0 h-36 w-36 -rotate-[150deg] sm:right-4 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                    fill="none"
                  >
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="86"
                      stroke={ORANGE}
                      strokeWidth="7"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.55 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
                    />
                  </svg>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                    className="absolute inset-x-0 bottom-0 top-4 sm:top-6"
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={bookingData.carImage}
                        alt={bookingData.carAlt}
                        fill
                        sizes="(min-width: 1024px) 380px, 85vw"
                        className="object-contain drop-shadow-[0_14px_14px_rgba(11,31,75,0.22)]"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-400/25 sm:rounded-[1.5rem]"
            >
              <div
                className="relative text-center text-white"
                style={{ backgroundColor: NAVY }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(ellipse at 20% 0%, #1b3f8f 0%, transparent 60%)",
                  }}
                />
                <div className="relative px-4 pb-8 pt-4 sm:px-6 sm:pb-11 sm:pt-5">
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <motion.span
                      className="h-[2px] w-10 origin-right sm:w-20"
                      style={{ backgroundColor: ORANGE }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />
                    <motion.div
                      className="relative"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Car
                        className="h-9 w-9 text-white sm:h-11 sm:w-11"
                        strokeWidth={1.8}
                      />
                      <motion.span
                        className="absolute -bottom-1 -right-1 rounded-full p-[2px]"
                        style={{ backgroundColor: NAVY }}
                        animate={{ rotate: [0, 18, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Wrench
                          className="h-4 w-4"
                          style={{ color: ORANGE }}
                          strokeWidth={2.4}
                        />
                      </motion.span>
                    </motion.div>
                    <motion.span
                      className="h-[2px] w-10 origin-left sm:w-20"
                      style={{ backgroundColor: ORANGE }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />
                  </div>
                  <h3 className="mt-1 text-2xl font-extrabold sm:text-[2.1rem]">
                    {bookingData.formTitleLead}{" "}
                    <span style={{ color: ORANGE }}>
                      {bookingData.formTitleHighlight}
                    </span>
                  </h3>
                  <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">
                    {bookingData.formSubtitle}
                  </p>
                </div>
                <svg
                  aria-hidden
                  viewBox="0 0 400 40"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 -bottom-px h-6 w-full sm:h-8"
                >
                  <path
                    d="M0 0 H400 V12 C 340 36 270 38 200 38 C 130 38 60 36 0 18 Z"
                    fill={ORANGE}
                  />
                  <path
                    d="M0 0 H400 V3 C 340 26 270 30 200 30 C 130 30 60 26 0 8 Z"
                    fill={NAVY}
                  />
                  <path
                    d="M0 40 V18 C 60 36 130 38 200 38 C 270 38 340 36 400 12 V40 Z"
                    fill="#fff"
                  />
                </svg>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-3 p-4 sm:space-y-3.5 sm:p-6"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                  <motion.div {...item(0)} className="relative">
                    <input
                      type="text"
                      required
                      placeholder={bookingData.placeholders.name}
                      value={formData.name}
                      onChange={set("name")}
                      className={`peer ${field}`}
                    />
                    <User className={fieldIcon} strokeWidth={1.8} />
                  </motion.div>

                  <motion.div {...item(1)} className="relative">
                    <input
                      type="tel"
                      required
                      placeholder={bookingData.placeholders.phone}
                      value={formData.phone}
                      onChange={set("phone")}
                      className={`peer ${field}`}
                    />
                    <Phone className={fieldIcon} strokeWidth={1.8} />
                  </motion.div>

                  <motion.div {...item(2)} className="relative">
                    <input
                      type="email"
                      required
                      placeholder={bookingData.placeholders.email}
                      value={formData.email}
                      onChange={set("email")}
                      className={`peer ${field}`}
                    />
                    <Mail className={fieldIcon} strokeWidth={1.8} />
                  </motion.div>

                  <motion.div {...item(3)} className="relative">
                    <input
                      type="text"
                      required
                      placeholder={bookingData.placeholders.carModel}
                      value={formData.carModel}
                      onChange={set("carModel")}
                      className={`peer ${field}`}
                    />
                    <Car className={fieldIcon} strokeWidth={1.8} />
                  </motion.div>

                  <motion.div {...item(4)} className="relative">
                    <input
                      type="text"
                      required
                      placeholder={bookingData.placeholders.preferredDate}
                      value={formData.preferredDate}
                      onChange={set("preferredDate")}
                      onFocus={(e) => (e.currentTarget.type = "date")}
                      onBlur={(e) => {
                        if (!e.currentTarget.value)
                          e.currentTarget.type = "text";
                      }}
                      className={`peer ${field} pr-10`}
                    />
                    <Calendar className={fieldIcon} strokeWidth={1.8} />
                    <Calendar
                      aria-hidden
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1F4B] sm:right-3.5 sm:h-5 sm:w-5"
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <motion.div {...item(5)} className="relative">
                    <select
                      required
                      value={formData.preferredTime}
                      onChange={set("preferredTime")}
                      className={`peer ${field} appearance-none pr-10 ${
                        formData.preferredTime ? "" : "text-slate-600"
                      }`}
                    >
                      <option value="">
                        {bookingData.placeholders.preferredTime}
                      </option>
                      {bookingData.times.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <Clock className={fieldIcon} strokeWidth={1.8} />
                    <ChevronDown
                      aria-hidden
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1F4B] sm:right-3.5 sm:h-5 sm:w-5"
                      strokeWidth={2.2}
                    />
                  </motion.div>
                </div>

                <motion.div {...item(6)} className="relative">
                  <textarea
                    rows={3}
                    placeholder={bookingData.placeholders.serviceDetails}
                    value={formData.serviceDetails}
                    onChange={set("serviceDetails")}
                    className={`peer ${field} resize-none`}
                  />
                  <Pencil
                    className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#0B1F4B] transition-colors peer-focus:text-[#FF6A13] sm:left-3.5 sm:top-3.5 sm:h-5 sm:w-5"
                    strokeWidth={1.8}
                  />
                </motion.div>

                <motion.button
                  {...item(7)}
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full py-3 text-base font-bold text-white shadow-lg shadow-orange-400/40 transition-shadow hover:shadow-xl hover:shadow-orange-400/50 sm:py-3.5 sm:text-lg"
                  style={{
                    backgroundImage: `linear-gradient(90deg, #FF5A0A, ${ORANGE} 50%, #FF8A1F)`,
                  }}
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-white/30 blur-md"
                    animate={{ x: ["0%", "600%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                  {sent ? (
                    <>
                      <Check className="relative h-5 w-5" strokeWidth={3} />
                      <span className="relative">{bookingData.sentLabel}</span>
                    </>
                  ) : (
                    <>
                      <span className="relative">
                        {bookingData.submitLabel}
                      </span>
                      <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}