import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EB Techworks | Teknoloji ve Yazılım Şirketi",
  description:
    "EB Techworks; yenilikçi yazılım projeleri, mobil uygulamalar ve ölçeklenebilir dijital ürünler geliştiren teknoloji şirketidir.",
  keywords: [
    "EB Techworks",
    "Ebtechworks",
    "Teknoloji",
    "Yazılım",
    "Dijital Ürünler",
    "Mobil Uygulama",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fafafa] text-slate-900 selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
