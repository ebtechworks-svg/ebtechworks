"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Proje & İş Birliği");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.company.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "Ad Soyad / Kurum": name,
            "E-Posta": email,
            "İletişim Konusu": topic,
            Mesaj: message,
            _subject: `[EB Techworks Web] ${topic} - ${name}`,
            _replyto: email,
            _template: "table",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success !== "false") {
        setSubmitted(true);
        setName("");
        setEmail("");
        setTopic("Proje & İş Birliği");
        setMessage("");
      } else {
        setErrorMsg(
          "Mesaj gönderilirken bir sorun oluştu. Lütfen doğrudan e-posta adresimiz üzerinden bize ulaşın."
        );
      }
    } catch {
      setErrorMsg(
        "Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="iletisim"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0082b3] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
                Kurumsal İletişim
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071324] sm:text-4xl">
                Projelerimiz ve İş Birlikleri İçin Bize Ulaşın
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Geliştirdiğimiz dijital ürünler ve projelerimiz hakkında bilgi
                almak, ortaklık fırsatlarını değerlendirmek veya bizimle
                tanışmak için formu doldurabilir ya da doğrudan e-posta
                gönderebilirsiniz.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-[#fafafa] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071324] text-[#00a3e0]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Kurumsal E-Posta
                    </div>
                    <a
                      href={`mailto:${siteConfig.company.email}`}
                      className="mt-1 block text-sm font-semibold text-[#071324] hover:text-[#0082b3]"
                    >
                      {siteConfig.company.email}
                    </a>
                    <div className="mt-0.5 text-xs text-slate-500">
                      Resmi İletişim &amp; Destek Hattı
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-[#fafafa] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071324] text-[#00a3e0]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Merkez &amp; Operasyon
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-[#071324]">
                      {siteConfig.company.location}
                    </div>
                    <div className="text-xs text-slate-500">
                      Uzaktan &amp; Hibrit Teknoloji Geliştirme Merkezi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50 p-5">
              <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Hızlı Yanıt Politikası
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Gönderdiğiniz tüm kurumsal iletişim ve proje talepleri ilgili
                ekip liderlerimiz tarafından incelenerek en geç 24–48 saat
                içerisinde yanıtlanmaktadır.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-[#fafafa] p-7 sm:p-10 shadow-xs">
              <h3 className="text-xl font-bold text-[#071324]">
                İletişim Formu
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Aşağıdaki bilgileri doldurarak doğrudan ekibimize mesaj
                iletebilirsiniz.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-7 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-base font-bold text-emerald-950">
                    Mesajınız Başarıyla Gönderildi!
                  </h4>
                  <p className="mt-1.5 text-sm text-emerald-800">
                    Mesajınız doğrudan{" "}
                    <span className="font-semibold">
                      {siteConfig.company.email}
                    </span>{" "}
                    adresimize iletilmiştir. En kısa sürede size dönüş
                    yapacağız.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 rounded-xl bg-emerald-800 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-900 cursor-pointer"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {errorMsg && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold tracking-wide text-slate-700 uppercase"
                      >
                        Adınız Soyadınız / Kurum
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/20 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold tracking-wide text-slate-700 uppercase"
                      >
                        E-Posta Adresiniz
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ornek@firma.com"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/20 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="topic"
                      className="block text-xs font-semibold tracking-wide text-slate-700 uppercase"
                    >
                      İletişim Konusu
                    </label>
                    <select
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/20 focus:outline-none"
                    >
                      <option value="Proje & İş Birliği">
                        Proje &amp; İş Birliği
                      </option>
                      <option value="Yatırım & Ortaklık">
                        Yatırım &amp; Ortaklık
                      </option>
                      <option value="Kurumsal Bilgi Talebi">
                        Kurumsal Bilgi Talebi
                      </option>
                      <option value="Kariyer & Ekip">Kariyer &amp; Ekip</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold tracking-wide text-slate-700 uppercase"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Projelerimiz, iş birliği fikirleriniz veya sorularınız hakkında detayları yazabilirsiniz..."
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/20 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#071324] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#0f2442] disabled:opacity-60 cursor-pointer"
                  >
                    <span>
                      {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                    </span>
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
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
