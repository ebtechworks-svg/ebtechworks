"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Kurucularımız", href: "#kurucularimiz" },
  { label: "Vizyon & Misyon", href: "#vizyon-misyon" },
  { label: "Amaç & Hedefler", href: "#hedefler" },
  { label: "Projelerimiz", href: "#projeler" },
  { label: "Sosyal Medya", href: "#sosyal-medya" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label={siteConfig.company.name}
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-slate-200/80 bg-white p-0.5 shadow-xs transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo.jpg"
              alt="EB Techworks Logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight leading-none">
              <span className="text-[#00a3e0]">EB</span>{" "}
              <span className="text-[#071324]">Techworks</span>
            </span>
            <span className="mt-1 text-[11px] font-medium tracking-wide text-slate-500 uppercase">
              Teknoloji &amp; Yazılım
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100/80 hover:text-[#071324]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#071324] px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#0f2442] active:scale-[0.99]"
          >
            <span>Bize Ulaşın</span>
            <svg
              className="h-4 w-4 text-[#00a3e0]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pt-2 pb-5 shadow-lg md:hidden">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-[#071324]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#071324] px-4 py-3 text-sm font-semibold text-white"
              >
                <span>Bize Ulaşın</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
