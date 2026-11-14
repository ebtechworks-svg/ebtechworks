import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { siteConfig, SocialItem } from "@/data/siteConfig";

function SocialIcon({ platform }: { platform: SocialItem["platform"] }) {
  switch (platform) {
    case "linkedin":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      );
    case "x":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
        </svg>
      );
    case "github":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z" />
        </svg>
      );
  }
}

function getSocialBadgeStyle(platform: SocialItem["platform"]) {
  switch (platform) {
    case "instagram":
      return "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-sm shadow-pink-500/20";
    case "youtube":
      return "bg-[#FF0000] text-white shadow-sm shadow-red-500/20";
    case "facebook":
      return "bg-[#1877F2] text-white shadow-sm shadow-blue-500/20";
    case "linkedin":
      return "bg-[#0A66C2] text-white shadow-sm shadow-blue-600/20";
    case "x":
      return "bg-black text-white shadow-sm shadow-slate-900/20";
    case "github":
      return "bg-[#24292F] text-white shadow-sm shadow-slate-900/20";
  }
}

function getSocialHandleColor(platform: SocialItem["platform"]) {
  switch (platform) {
    case "instagram":
      return "text-[#d62976]";
    case "youtube":
      return "text-[#FF0000]";
    case "facebook":
      return "text-[#1877F2]";
    case "linkedin":
      return "text-[#0A66C2]";
    case "x":
      return "text-slate-900";
    case "github":
      return "text-slate-700";
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white bg-grid-slate pt-14 pb-24 lg:pt-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Corporate Headline & CTAs */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#00a3e0]" />
                  {siteConfig.company.badge}
                </div>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#071324] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
                  Geleceğin Dijital Ürünlerini{" "}
                  <span className="text-[#00a3e0]">Yenilikçi Teknolojilerle</span>{" "}
                  İnşa Ediyoruz.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                  {siteConfig.company.heroSubtitle}
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#projeler"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#071324] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0f2442]"
                  >
                    <span>Projelerimizi Keşfedin</span>
                    <svg
                      className="h-4 w-4 text-[#00a3e0]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>

                  <a
                    href="#vizyon-misyon"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#071324] transition-colors hover:border-[#071324] hover:bg-slate-50"
                  >
                    <span>Vizyon, Misyon & Hedeflerimiz</span>
                  </a>
                </div>

                {/* Stats Row */}
                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200/80 pt-8 sm:grid-cols-4">
                  {siteConfig.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-extrabold tracking-tight text-[#071324] sm:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-medium text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Brand Showcase & Umbrella Architecture Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl border border-slate-200/90 bg-[#fafafa] p-6 sm:p-8 shadow-xl shadow-slate-900/[0.04]">
                  {/* Brand Identity Card */}
                  <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-2xs">
                    <div className="relative h-44 w-56">
                      <Image
                        src="/logo.jpg"
                        alt="EB Techworks Resmi Logosu"
                        fill
                        sizes="(max-width: 768px) 220px, 240px"
                        className="object-contain"
                        priority
                      />
                    </div>
                    <p className="mt-2 text-xs font-medium tracking-wider text-slate-400 uppercase">
                      Teknoloji &amp; Dijital Ürün Ekosistemi
                    </p>
                  </div>

                  {/* Ventures Quick List */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center justify-between px-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      <span>Geliştirdiğimiz Ürünler</span>
                      <span className="text-[#0082b3]">Aktif Portföy</span>
                    </div>

                    {siteConfig.projects.items.map((proj) => (
                      <a
                        key={proj.id}
                        href="#projeler"
                        className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-all hover:border-[#00a3e0] hover:shadow-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-3">
                          {proj.logo && (
                            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-white">
                              <Image
                                src={proj.logo}
                                alt={proj.name}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="truncate text-sm font-bold text-[#071324]">
                              {proj.name}
                            </div>
                            <div className="truncate text-xs text-slate-500">
                              {proj.category}
                            </div>
                          </div>
                        </div>
                        <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                          {proj.status}
                        </span>
                      </a>
                    ))}

                    <a
                      href="#projeler"
                      className="flex items-center justify-between rounded-xl border border-dashed border-slate-300 bg-white/60 px-4 py-3 text-xs font-medium text-slate-500 transition-colors hover:border-[#00a3e0] hover:text-slate-700"
                    >
                      <span>Yeni projelerimiz yakında duyurulacaktır</span>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                        Yakında
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / UMBRELLA STRUCTURE SECTION */}
        <section
          id="hakkimizda"
          className="scroll-mt-20 border-t border-slate-200/80 bg-[#fafafa] py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                {siteConfig.about.sectionLabel}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071324] sm:text-4xl">
                {siteConfig.about.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {siteConfig.about.description}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {siteConfig.about.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-2xs transition-all hover:border-[#00a3e0]/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071324] text-sm font-bold text-[#00a3e0]">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#071324]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDERS SECTION */}
        <section
          id="kurucularimiz"
          className="scroll-mt-20 border-t border-slate-200/80 bg-white py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header & Founding Story */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                  {siteConfig.founders.sectionLabel}
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071324] sm:text-4xl">
                  {siteConfig.founders.title}
                </h2>
                <div className="mt-6 h-1 w-16 rounded-full bg-[#00a3e0]" />
              </div>

              <div className="lg:col-span-7 space-y-4 rounded-3xl border border-slate-200/80 bg-[#fafafa] p-7 sm:p-9">
                {siteConfig.founders.introParagraphs.map((para, index) => (
                  <p
                    key={index}
                    className={`leading-relaxed ${
                      index === 0
                        ? "text-base font-semibold text-[#071324]"
                        : "text-sm sm:text-base text-slate-600"
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Founder Profile Cards */}
            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {siteConfig.founders.items.map((founder) => (
                <article
                  key={founder.id}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fafafa] p-7 sm:p-9 shadow-2xs transition-all hover:border-[#00a3e0]/50 hover:bg-white hover:shadow-xl hover:shadow-slate-900/[0.04]"
                >
                  <div>
                    {/* Founder Portrait & Name Header */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center border-b border-slate-200/80 pb-6">
                      <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-slate-100 shadow-md ring-1 ring-slate-200/90">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          sizes="128px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-50 px-3 py-1 text-xs font-bold text-[#0082b3]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                          {founder.role}
                        </span>
                        <h3 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#071324] sm:text-3xl">
                          {founder.name}
                        </h3>
                      </div>
                    </div>

                    {/* Biography Paragraphs */}
                    <div className="mt-6 space-y-4">
                      {founder.paragraphs.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm leading-relaxed text-slate-600 sm:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Ortak Vizyonumuz Callout Box */}
            <div className="mt-12 rounded-3xl border border-slate-200/90 bg-[#071324] p-8 sm:p-11 text-white shadow-lg">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#00a3e0]/30 bg-[#00a3e0]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#00a3e0] uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                    Kurucu Yaklaşımımız
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {siteConfig.founders.sharedVision.title}
                  </h3>
                  <div className="mt-4 h-1 w-12 rounded-full bg-[#00a3e0]" />
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {siteConfig.founders.sharedVision.paragraphs.map(
                    (vPara, vIdx) => (
                      <p
                        key={vIdx}
                        className={`leading-relaxed ${
                          vIdx === 0
                            ? "text-base font-medium text-white"
                            : "text-sm sm:text-base text-slate-300"
                        }`}
                      >
                        {vPara}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section
          id="vizyon-misyon"
          className="scroll-mt-20 border-t border-slate-200/80 bg-white py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                Kurumsal Değerlerimiz
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071324] sm:text-4xl">
                Vizyonumuz ve Misyonumuz
              </h2>
              <p className="mt-3 text-base text-slate-600">
                EB Techworks bünyesinde geliştirdiğimiz her projede bize yön
                veren temel vizyon ve misyon ilkelerimiz.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Vision Card */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fafafa] p-8 sm:p-10">
                <div>
                  <div className="inline-flex items-center gap-2.5 rounded-xl bg-[#071324] px-4 py-2 text-xs font-bold tracking-wider text-[#00a3e0] uppercase">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    {siteConfig.visionMission.vision.label}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#071324]">
                    {siteConfig.visionMission.vision.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {siteConfig.visionMission.vision.description}
                  </p>
                </div>

                <ul className="mt-8 space-y-3 border-t border-slate-200/80 pt-6">
                  {siteConfig.visionMission.vision.bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm font-medium text-slate-700"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00a3e0]/15 text-[#0082b3]">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mission Card */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fafafa] p-8 sm:p-10">
                <div>
                  <div className="inline-flex items-center gap-2.5 rounded-xl bg-[#00a3e0] px-4 py-2 text-xs font-bold tracking-wider text-white uppercase">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                    {siteConfig.visionMission.mission.label}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#071324]">
                    {siteConfig.visionMission.mission.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {siteConfig.visionMission.mission.description}
                  </p>
                </div>

                <ul className="mt-8 space-y-3 border-t border-slate-200/80 pt-6">
                  {siteConfig.visionMission.mission.bulletPoints.map(
                    (point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium text-slate-700"
                      >
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#071324]/10 text-[#071324]">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GOALS & OBJECTIVES SECTION */}
        <section
          id="hedefler"
          className="scroll-mt-20 border-t border-slate-200/80 bg-[#fafafa] py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                {siteConfig.goals.sectionLabel}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071324] sm:text-4xl">
                {siteConfig.goals.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {siteConfig.goals.subtitle}
              </p>
            </div>

            {/* Strategic Horizon Cards (Short / Mid / Long term goals) */}
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {siteConfig.goals.items.map((goal, idx) => (
                <div
                  key={goal.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-lg bg-sky-50 px-3 py-1 text-xs font-bold text-[#0082b3]">
                        {goal.horizon}
                      </span>
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        FAZ 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-[#071324]">
                      {goal.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {goal.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      Hedef Çıktılarımız
                    </div>
                    <ul className="mt-3 space-y-2">
                      {goal.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-start gap-2 text-xs font-medium text-slate-700"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00a3e0]" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Purposes Grid */}
            <div className="mt-12 rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-[#071324]">
                  Temel Kuruluş Amaçlarımız ve İlkelerimiz
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  EB Techworks bünyesindeki tüm ekiplerin ve projelerin
                  benimsediği ortak değerler.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {siteConfig.goals.corePurposes.map((purpose) => (
                  <div
                    key={purpose.title}
                    className="rounded-2xl border border-slate-200/70 bg-[#fafafa] p-5"
                  >
                    <div className="h-1 w-8 rounded-full bg-[#00a3e0]" />
                    <h4 className="mt-4 text-sm font-bold text-[#071324]">
                      {purpose.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {purpose.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS PORTFOLIO SECTION */}
        <ProjectsSection />

        {/* SOCIAL MEDIA SECTION */}
        <section
          id="sosyal-medya"
          className="scroll-mt-20 border-t border-slate-200/80 bg-[#fafafa] py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                {siteConfig.socials.sectionLabel}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071324] sm:text-4xl">
                {siteConfig.socials.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {siteConfig.socials.subtitle}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.socials.items.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/[0.05]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${getSocialBadgeStyle(
                          social.platform
                        )}`}
                      >
                        <SocialIcon platform={social.platform} />
                      </span>
                      <svg
                        className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#071324]">
                      {social.name}
                    </h3>
                    <p
                      className={`mt-0.5 text-xs font-semibold ${getSocialHandleColor(
                        social.platform
                      )}`}
                    >
                      {social.handle}
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                      {social.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-700 group-hover:text-[#071324]">
                    Hesaba Git →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* CORPORATE FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-slate-200 bg-white p-0.5">
                  <Image
                    src="/logo.jpg"
                    alt="EB Techworks Logo"
                    fill
                    sizes="44px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold tracking-tight">
                    <span className="text-[#00a3e0]">EB</span>{" "}
                    <span className="text-[#071324]">Techworks</span>
                  </span>
                  <p className="text-xs text-slate-500">
                    {siteConfig.company.legalName}
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-600">
                {siteConfig.company.heroSubtitle}
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="md:col-span-3">
              <div className="text-xs font-bold tracking-wider text-[#071324] uppercase">
                Kurumsal Menü
              </div>
              <ul className="mt-4 space-y-2.5 text-xs font-medium text-slate-600">
                <li>
                  <a href="#hakkimizda" className="hover:text-[#0082b3]">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#kurucularimiz" className="hover:text-[#0082b3]">
                    Kurucularımız
                  </a>
                </li>
                <li>
                  <a href="#vizyon-misyon" className="hover:text-[#0082b3]">
                    Vizyonumuz & Misyonumuz
                  </a>
                </li>
                <li>
                  <a href="#hedefler" className="hover:text-[#0082b3]">
                    Amaç ve Hedeflerimiz
                  </a>
                </li>
                <li>
                  <a href="#projeler" className="hover:text-[#0082b3]">
                    Projelerimiz
                  </a>
                </li>
                <li>
                  <a href="#sosyal-medya" className="hover:text-[#0082b3]">
                    Sosyal Medya
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="hover:text-[#0082b3]">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Ventures List */}
            <div className="md:col-span-4">
              <div className="text-xs font-bold tracking-wider text-[#071324] uppercase">
                Ürünlerimiz &amp; Projelerimiz
              </div>
              <ul className="mt-4 space-y-2.5 text-xs font-medium text-slate-600">
                {siteConfig.projects.items.map((proj) => (
                  <li key={proj.id}>
                    <a
                      href="#projeler"
                      className="flex items-center justify-between hover:text-[#0082b3]"
                    >
                      <span className="font-semibold text-[#071324]">
                        {proj.name}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                        {proj.status}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center justify-between text-slate-400 pt-1">
                  <span>Yeni projelerimiz yakında duyurulacaktır</span>
                  <span className="text-[11px]">Yakında</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 sm:flex-row">
            <p>
              © {siteConfig.company.foundedYear} {siteConfig.company.name}. Tüm
              hakları saklıdır.
            </p>
            <div className="flex items-center gap-4">
              {siteConfig.socials.items.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition-colors hover:text-[#00a3e0]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
