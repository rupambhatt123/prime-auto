"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Calendar, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import websiteData from "@/data/websiteData.json";

const { common, categories } = websiteData;
const headerData =
  categories.Automotive.sections.Header.variants.PrimeHeader1;

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

const ALL_SECTIONS = [
  ...headerData.navLinks.map((item) => item.href),
  headerData.ctaButton.href,
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(
    headerData.navLinks[0]?.href ?? "#home"
  );
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = ALL_SECTIONS.length - 1; i >= 0; i--) {
        const href = ALL_SECTIONS[i];
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHref(href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setMobileOpen(false);
  };

  const isBookingActive = activeHref === headerData.ctaButton.href;
  const logoSrc = headerData.logo || common.logo;

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      <div className="bg-[#051B38] text-white text-[11px] sm:text-xs lg:text-sm py-2 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3">
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-5 gap-y-1">
            <a
              href={common.emailHref}
              className="flex items-center gap-1.5 hover:text-[#FF6B00] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B00] shrink-0" />
              <span className="truncate">{common.email}</span>
            </a>
            <span className="text-white/30 hidden xs:inline sm:inline">|</span>
            <a
              href={common.phoneHref}
              className="flex items-center gap-1.5 hover:text-[#FF6B00] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B00] shrink-0" />
              <span>{common.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-white/90 hidden md:inline">
              {common.followUsLabel}
            </span>
            <div className="flex items-center gap-2.5 sm:gap-3">
              {common.socialLinks.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:text-[#FF6B00] transition-colors"
                  >
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-slate-100 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-20 sm:h-24 flex items-center justify-between gap-2">
          <Link
            href={headerData.homeHref}
            onClick={() => handleNavClick(headerData.homeHref)}
            className="flex items-center gap-2 shrink-0"
          >
            {!logoError ? (
              <div className="relative h-14 w-44 sm:h-16 sm:w-56">
                <Image
                  src={logoSrc}
                  alt={headerData.homeAriaLabel}
                  fill
                  priority
                  onError={() => setLogoError(true)}
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-2xl sm:text-[32px] font-black italic tracking-tight text-[#051B38]">
                    {common.siteNamePrimary}
                  </span>
                  <span className="text-2xl sm:text-[32px] font-black italic tracking-tight text-[#FF6B00]">
                    {common.siteNameAccent}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#051B38] uppercase mt-0.5">
                  {common.tagline}
                </span>
              </div>
            )}
          </Link>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
            {headerData.navLinks.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`inline-block text-[14px] xl:text-[15px] font-semibold py-2 border-b-2 transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#FF6B00] border-[#FF6B00]"
                        : "text-[#051B38] border-transparent hover:text-[#FF6B00]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={headerData.ctaButton.href}
              onClick={() => handleNavClick(headerData.ctaButton.href)}
              className={`inline-flex items-center gap-1.5 sm:gap-2 font-semibold text-xs sm:text-sm px-3.5 sm:px-6 py-2 sm:py-3 rounded-full transition-all whitespace-nowrap ${
                isBookingActive
                  ? "bg-[#051B38] text-white ring-2 ring-[#FF6B00] ring-offset-2 shadow-lg scale-[1.02]"
                  : "bg-[#FF6B00] hover:bg-[#e55f00] text-white shadow-md"
              }`}
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{headerData.ctaButton.label}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={headerData.menuAriaLabel}
              className="lg:hidden p-1.5 sm:p-2 text-[#051B38] hover:text-[#FF6B00] transition-colors"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-3 px-1 space-y-1">
            {headerData.navLinks.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-3 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-orange-50 text-[#FF6B00]"
                      : "text-[#051B38] hover:bg-slate-50 hover:text-[#FF6B00]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}