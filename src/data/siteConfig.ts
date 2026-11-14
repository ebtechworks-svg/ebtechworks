export interface ProjectSocialLink {
  platform: "instagram" | "x" | "linkedin";
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: "Canlıda" | "Geliştirme Aşamasında" | "Yakında";
  description: string;
  highlights: string[];
  tags: string[];
  logo?: string;
  url?: string;
  websiteUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  socials?: ProjectSocialLink[];
}

export interface GoalItem {
  id: string;
  horizon: string;
  title: string;
  description: string;
  metrics: string[];
}

export interface SocialItem {
  name: string;
  platform: "linkedin" | "x" | "instagram" | "github" | "youtube" | "facebook";
  handle: string;
  url: string;
  description: string;
}

export const siteConfig = {
  company: {
    name: "EB Techworks",
    legalName: "EB Techworks Teknoloji ve Yazılım A.Ş.",
    badge: "Teknoloji & Yazılım Çözümleri",
    heroTitle: "Geleceğin Dijital Ürünlerini ve Teknolojilerini İnşa Ediyoruz.",
    heroSubtitle:
      "EB Techworks; gerçek hayat problemlerine odaklanan yenilikçi yazılım çözümleri, mobil uygulamalar ve yüksek katma değerli dijital ürünler geliştiren teknoloji şirketidir.",
    foundedYear: "2026",
    location: "Türkiye",
    email: "ebtechworks@gmail.com",
    contactEmail: "ebtechworks@gmail.com",
    phone: "+90 (212) 000 00 00",
  },

  stats: [
    { label: "Canlıdaki Aktif Ürünümüz", value: "1" },
    { label: "Geliştirilen Yeni Projeler", value: "Ar-Ge" },
    { label: "Mühendislik & Ürün Standartları", value: "%100" },
    { label: "Hedef Pazar Kapsamı", value: "Global" },
  ],

  about: {
    sectionLabel: "Hakkımızda",
    title: "Fikirden Global Ürüne Uzanan Teknoloji Ekosistemi",
    description:
      "EB Techworks, farklı sektörlerdeki gerçek dünya problemlerine modern yazılım mimarileri ve kullanıcı odaklı çözümler üretmek amacıyla kurulmuş bir teknoloji şirketidir. Bünyemizde filizlenen fikirleri bağımsız birer dijital ürün haline getiriyor, güçlü mühendislik kültürümüz ve tasarım standartlarımızla büyütüyoruz.",
    pillars: [
      {
        title: "Ürün Odaklı Mühendislik",
        description:
          "Her projemizi yalnızca bir yazılım olarak değil, kullanıcı deneyimi ve ölçeklenebilirliği merkezine alan uçtan uca bir dijital ürün olarak tasarlıyoruz.",
      },
      {
        title: "Güçlü Teknoloji Altyapısı",
        description:
          "Yüksek güvenlik, modern bulut mimarisi ve veri standartlarımız sayesinde geliştirdiğimiz tüm ürünleri hızlı ve kesintisiz şekilde hayata geçiriyoruz.",
      },
      {
        title: "Sürdürülebilir Büyüme",
        description:
          "Kısa vadeli trendler yerine uzun vadeli değer üreten, kurumsal güvenilirliği yüksek ve küresel pazarda rekabet edebilen dijital platformlar inşa ediyoruz.",
      },
    ],
  },

  visionMission: {
    vision: {
      label: "Vizyonumuz",
      title: "Bölgesel Güçten Küresel Teknoloji Markasına",
      description:
        "Türkiye'den doğan ve geliştirdiği yenilikçi dijital ürünlerle küresel ölçekte referans gösterilen, teknoloji dünyasında standartları belirleyen öncü bir yazılım ve teknoloji şirketi olmak.",
      bulletPoints: [
        "Küresel pazarda rekabet eden özgün teknoloji ve yazılım ürünleri oluşturmak",
        "Yapay zeka, mobil uygulama ve modern web teknolojilerinde öncü çözümler sunmak",
        "Kullanıcıların ve kurumların dijital dönüşümüne yön veren güvenilir bir marka olmak",
      ],
    },
    mission: {
      label: "Misyonumuz",
      title: "Yüksek Katma Değerli ve İnsan Odaklı Teknoloji Üretmek",
      description:
        "Karmaşık iş süreçlerini ve günlük ihtiyaçları yalın, güvenli ve yüksek performanslı yazılım ürünleriyle kolaylaştırmak; yenilikçi fikirleri disiplinli mühendislik ile sürdürülebilir projelere dönüştürmek.",
      bulletPoints: [
        "Gerçek sorunlara odaklanan, ölçülebilir fayda sağlayan yazılımlar geliştirmek",
        "Projelerimiz arasında bilgi, teknoloji ve operasyonel sinerji yaratmak",
        "Etik değerlere, veri güvenliğine ve kalite standartlarına tavizsiz bağlı kalmak",
      ],
    },
  },

  goals: {
    sectionLabel: "Amaç ve Hedeflerimiz",
    title: "Stratejik Yol Haritamız ve Kurumsal Hedeflerimiz",
    subtitle:
      "EB Techworks olarak şirketimizin ve geliştirdiğimiz dijital ürünlerin geleceğini net, ölçülebilir ve aşamalı hedeflerle şekillendiriyoruz.",
    items: [
      {
        id: "goal-1",
        horizon: "Kısa Vadeli Hedefler",
        title: "Temel Ürün Ekosisteminin Büyütülmesi",
        description:
          "Canlıdaki ilk projemiz İşiCepte'nin kullanıcı ve usta ağını Türkiye genelinde yaygınlaştırmak ve Ar-Ge aşamasındaki yeni dijital ürünlerimizin geliştirme süreçlerini tamamlamak.",
        metrics: [
          "İşiCepte platformunun ülke genelinde ölçeklendirilmesi",
          "Ortak tasarım ve bulut mimarisinin standartlaştırılması",
          "Kullanıcı ve usta geri bildirim döngüsüyle sürekli ürün geliştirme",
        ],
      },
      {
        id: "goal-2",
        horizon: "Orta Vadeli Hedefler",
        title: "Pazar Derinliği ve Kurumsal İş Birlikleri",
        description:
          "Aktif projelerimizin kullanıcı tabanını büyütmek, B2B ve B2C dikeylerde stratejik iş ortaklıkları geliştirerek etki modelimizi ölçeklendirmek.",
        metrics: [
          "Aktif ürünlerde sürdürülebilir büyüme ve yüksek kullanıcı memnuniyeti",
          "Yeni Ar-Ge projelerinin lansman süreçlerinin tamamlanması",
          "Kurumsal partnerlik ve entegrasyon ağının genişletilmesi",
        ],
      },
      {
        id: "goal-3",
        horizon: "Uzun Vadeli Hedefler",
        title: "Global Açılım ve Güçlü Ürün Portföyü",
        description:
          "EB Techworks bünyesinde geliştirilen ürünleri uluslararası pazarlara taşımak ve kendi alanında lider teknoloji markalarından oluşan güçlü bir portföy yönetmek.",
        metrics: [
          "Yurt dışı pazarlarda aktif kullanılan dijital platformlar ve mobil ürünler",
          "Yüksek teknolojili Ar-Ge ve yapay zeka geliştirme merkezi yapılanması",
          "Sektöre yön veren sürdürülebilir teknoloji ekosistemi",
        ],
      },
    ] as GoalItem[],
    corePurposes: [
      {
        title: "Teknolojik Bağımsızlık & Özgünlük",
        text: "Kopyalanan değil, özgün mimari ve tasarımla fark yaratan yerli ve global yazılım ürünleri ortaya koymak.",
      },
      {
        title: "Kullanıcı Deneyimi Mükemmeliyeti",
        text: "En güçlü algoritmaları bile herkesin zahmetsizce kullanabileceği sade, hızlı ve erişilebilir arayüzlerle sunmak.",
      },
      {
        title: "Teknoloji ve Bilgi Sinerjisi",
        text: "Her yeni projenin bir önceki projenin mühendislik tecrübesinden ve altyapısından güç alarak çok daha hızlı büyümesini sağlamak.",
      },
      {
        title: "Güven ve Şeffaflık",
        text: "Kullanıcılarımız, iş ortaklarımız ve ekip arkadaşlarımız için her adımda şeffaf, güvenilir bir kurumsal yapı sunmak.",
      },
    ],
  },

  projects: {
    sectionLabel: "Ürünlerimiz & Projelerimiz",
    title: "Geliştirdiğimiz Projeler ve Dijital Ürünler",
    subtitle:
      "Gerçek hayat problemlerine odaklanan, kullanıcı deneyimi yüksek dijital ürünlerimiz ve teknoloji çözümlerimiz.",
    items: [
      {
        id: "isicepte",
        name: "İşiCepte",
        tagline:
          "Uzman ustalar ile hizmet arayan kullanıcıları doğrudan buluşturan platform",
        category: "Mobil Uygulama & Hizmet Pazaryeri",
        status: "Canlıda",
        logo: "/isicepte-logo.jpg",
        description:
          "Alanında uzman olan ustaları ve bu ustalara ihtiyacı olan kullanıcıları doğrudan birbirine bağlayan yenilikçi platformumuz. İşiCepte'de komisyon ücreti yoktur ve uygulamayı indirmesi tamamen ücretsizdir.",
        highlights: [
          "%0 Komisyon — Aracı veya komisyon ücreti olmadan doğrudan iletişim",
          "Tamamen ücretsiz indirme ve hızlı üyelik imkanı (iOS & Android)",
          "Alanında uzman ustalar ile ihtiyaç sahiplerini konum bazlı anında eşleştirme",
        ],
        tags: [
          "%0 Komisyon",
          "Ücretsiz İndir",
          "iOS & Android",
          "Hizmet Platformu",
        ],
        url: "https://isicepte.com/",
        websiteUrl: "https://isicepte.com/",
        appStoreUrl:
          "https://apps.apple.com/tr/app/i-%C5%9Fi-cepte/id6758517468?l=tr",
        playStoreUrl:
          "https://play.google.com/store/apps/details?id=com.isicepte.app",
        socials: [
          {
            platform: "instagram",
            label: "Instagram",
            url: "https://www.instagram.com/isiceptecom",
          },
          {
            platform: "x",
            label: "X (Twitter)",
            url: "https://x.com/isiceptecom",
          },
          {
            platform: "linkedin",
            label: "LinkedIn",
            url: "https://www.linkedin.com/company/i%C5%9Ficepte",
          },
        ],
      },
    ] as ProjectItem[],
  },

  socials: {
    sectionLabel: "Sosyal Medya & Dijital Varlığımız",
    title: "Bizi Sosyal Medyada Takip Edin",
    subtitle:
      "Yeni proje lansmanlarımızı, teknoloji paylaşımlarımızı ve EB Techworks ekosistemindeki güncel gelişmeleri resmi hesaplarımızdan takip edebilirsiniz.",
    items: [
      {
        name: "Instagram",
        platform: "instagram",
        handle: "@ebtechworks",
        url: "https://www.instagram.com/ebtechworks/",
        description:
          "Ekip kültürümüz, yeni proje duyurularımız, tasarım süreçlerimiz ve sahne arkası paylaşımlarımız.",
      },
      {
        name: "YouTube",
        platform: "youtube",
        handle: "@ebtechworks",
        url: "https://www.youtube.com/@ebtechworks",
        description:
          "Geliştirdiğimiz projelerin tanıtım videoları, teknik incelemeler ve içeriklerimiz.",
      },
      {
        name: "Facebook",
        platform: "facebook",
        handle: "EB Techworks",
        url: "https://www.facebook.com/profile.php?id=61596707513557",
        description:
          "Kurumsal haberlerimiz, etkinliklerimiz ve topluluk paylaşımlarımız.",
      },
    ] as SocialItem[],
  },
};
