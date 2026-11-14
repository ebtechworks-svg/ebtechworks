"use client";

import Image from "next/image";
import { siteConfig, ProjectItem, ProjectSocialLink } from "@/data/siteConfig";

function getStatusBadgeStyle(status: ProjectItem["status"]) {
  switch (status) {
    case "Canlıda":
      return "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20";
    case "Geliştirme Aşamasında":
      return "bg-sky-50 text-[#0082b3] border-sky-200 ring-sky-500/20";
    case "Yakında":
      return "bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20";
  }
}

function getStatusDotColor(status: ProjectItem["status"]) {
  switch (status) {
    case "Canlıda":
      return "bg-emerald-500";
    case "Geliştirme Aşamasında":
      return "bg-[#00a3e0]";
    case "Yakında":
      return "bg-amber-500";
  }
}

function ProjectSocialIcon({
  platform,
}: {
  platform: ProjectSocialLink["platform"];
}) {
  switch (platform) {
    case "instagram":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
        </svg>
      );
    case "x":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      );
  }
}

function getProjectSocialStyle(platform: ProjectSocialLink["platform"]) {
  switch (platform) {
    case "instagram":
      return "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-xs shadow-pink-500/20 hover:opacity-90";
    case "x":
      return "bg-black text-white shadow-xs shadow-slate-900/20 hover:bg-neutral-800";
    case "linkedin":
      return "bg-[#0A66C2] text-white shadow-xs shadow-blue-600/20 hover:bg-[#084e96]";
  }
}

export default function ProjectsSection() {
  return (
    <section
      id="projeler"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
            {siteConfig.projects.sectionLabel}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071324] sm:text-4xl">
            {siteConfig.projects.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {siteConfig.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid: 1st Box = İşiCepte, 2nd Box = Yeni Projelerimiz Yakında Duyurulacaktır */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {siteConfig.projects.items.map((project, index) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#fafafa] p-7 transition-all duration-200 hover:border-[#00a3e0]/50 hover:bg-white hover:shadow-xl hover:shadow-slate-900/[0.04]"
            >
              <div>
                {/* Top Meta: Category & Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    0{index + 1} — {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      %0 Komisyon • Ücretsiz
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${getStatusBadgeStyle(
                        project.status
                      )}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${getStatusDotColor(
                          project.status
                        )}`}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* App Logo + Project Title & Tagline */}
                <div className="mt-6 flex items-start gap-4">
                  {project.logo && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                      <Image
                        src={project.logo}
                        alt={`${project.name} Logo`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-bold tracking-tight text-[#071324] group-hover:text-[#0082b3] transition-colors">
                        {project.name}
                      </h3>
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-[#0082b3] transition-colors hover:border-[#00a3e0] hover:bg-sky-50"
                        >
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>
                          <span>isicepte.com</span>
                        </a>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#0082b3]">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-5 rounded-xl border border-slate-200/70 bg-white p-4">
                  <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Öne Çıkan Özellikler
                  </div>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#00a3e0]"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* App Store / Play Store / Website Action Buttons */}
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 rounded-xl bg-black px-3.5 py-2.5 text-white shadow-2xs transition-all hover:bg-neutral-800"
                    >
                      <svg
                        className="h-5 w-5 shrink-0 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.33c.67-.81 1.12-1.94 1-3.08-.96.04-2.13.64-2.82 1.45-.61.7-.115 1.86-1.01 2.97 1.08.08 2.16-.53 2.83-1.34Z" />
                      </svg>
                      <div className="text-left leading-tight">
                        <div className="text-[10px] font-medium text-neutral-300">
                          Ücretsiz İndir
                        </div>
                        <div className="text-xs font-bold">App Store</div>
                      </div>
                    </a>
                  )}

                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 rounded-xl bg-black px-3.5 py-2.5 text-white shadow-2xs transition-all hover:bg-neutral-800"
                    >
                      <svg
                        className="h-5 w-5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3.61 1.814L13.793 12 3.61 22.186a1.47 1.47 0 0 1-.61-1.196V3.01c0-.49.236-.93.61-1.196Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M17.228 8.565L13.793 12l3.435 3.435 3.876-2.204c.845-.48.845-1.982 0-2.462l-3.876-2.204Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M3.61 1.814c.38-.27.89-.31 1.326-.063l12.292 6.814L13.793 12 3.61 1.814Z"
                          fill="#34A853"
                        />
                        <path
                          d="M13.793 12l3.435 3.435L4.936 22.25a1.39 1.39 0 0 1-1.326-.064L13.793 12Z"
                          fill="#EA4335"
                        />
                      </svg>
                      <div className="text-left leading-tight">
                        <div className="text-[10px] font-medium text-neutral-300">
                          Ücretsiz İndir
                        </div>
                        <div className="text-xs font-bold">Google Play</div>
                      </div>
                    </a>
                  )}

                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-[#071324] shadow-2xs transition-all hover:border-[#00a3e0] hover:text-[#0082b3]"
                    >
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
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      <span>Web Sitesine Git</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Footer: Project Social Media Links & Tags */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.socials && project.socials.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-500">
                      İşiCepte Sosyal:
                    </span>
                    {project.socials.map((soc) => (
                      <a
                        key={soc.platform}
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`İşiCepte ${soc.label}`}
                        aria-label={`İşiCepte ${soc.label}`}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-150 hover:scale-105 ${getProjectSocialStyle(
                          soc.platform
                        )}`}
                      >
                        <ProjectSocialIcon platform={soc.platform} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* Second Box: Upcoming Projects Announcement Card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300/90 bg-[#fafafa]/70 p-8 text-center transition-colors hover:border-[#00a3e0]/60 hover:bg-slate-50/80">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071324] text-[#00a3e0] shadow-sm">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>

            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-[#0082b3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
              Ar-Ge & Kuluçka
            </span>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#071324]">
              Yeni Projelerimiz Yakında Duyurulacaktır
            </h3>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              EB Techworks bünyesinde geliştirmekte olduğumuz yeni dijital
              ürünlerimiz ve teknoloji çözümlerimiz hazırlık aşamasındadır.
              Lansman duyuruları için bizi takip etmeye devam edin.
            </p>

            <a
              href="#sosyal-medya"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-[#071324] shadow-2xs transition-colors hover:border-[#071324] hover:bg-slate-50"
            >
              <span>Duyurular İçin Takip Edin</span>
              <svg
                className="h-3.5 w-3.5 text-[#00a3e0]"
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
        </div>
      </div>
    </section>
  );
}
