export const categories = [
  "gundem",
  "siyaset",
  "ekonomi",
  "dunya",
  "magazin",
  "egitim",
  "asayis",
  "saglik",
  "yasam",
  "spor",
  "teknoloji",
  "sonDakika",
  "yazarlar",
  "sinema",
  "arastirma",
  "gezi",
  "kultursanat",
  "inanc",
  "emlak",
  "astroloji",
];

export const editLink = (link) => {
  if (link === "saglik") return "sağlık";
  if (link === "yasam") return "yaşam";
  if (link === "asayis") return "asayiş";
  if (link === "egitim") return "eğitim";
  return link.replace("u", "ü");
};

export const shortNewsTitle = (word) => `${word.substring(0, 50)}...`;

export const handleShort = (text, number) => {
  const res = text.split(" ");
  if (res.length <= number) return res.join(" ");
  return res.slice(0,number).join(" ").concat(" ...");
};

export const handleShortt = (text) => {
  return text.substring(0,30).concat(" ...");
};

export const navigateCategory = (category) => {
  if (category === "gelisim") return "/";
  if (category === "otomobil") return "/";
  if (category === "gastro") return "/";
  if (category === "seyahat") return "/";
  return `/${category}`;
};

export const transformCategory = (category) => {
  if (category === "magazin") return "MAGAZİN";
  if (category === "dunya") return "DÜNYA";
  if (category === "gundem") return "GÜNDEM";
  if (category === "gelisim") return "GELİŞİM";
  if (category === "siyaset") return "SİYASET";
  if (category === "ekonomi") return "EKONOMİ";
  if (category === "saglik") return "SAĞLIK";
  if (category === "video") return "VİDEO";
  if (category === "teknoloji") return "TEKNOLOJİ";
  if (category === "otomobil") return "OTOMOBİL";
  return category.toUpperCase();
};

export const categoryConvertor = {
  asayis: "asayiş",
  gundem: "gündem",
  dunya: "dünya",
  yasam: "yaşam",
  saglik: "sağlık",
  sonDakika: "son dakika",
  arastirma: "araştırma",
  egitim: "eğitim",
  kultursanat: "kültür sanat",
  inanc: "İnanç",
  roportaj: "röportaj",
  ekonomi: "ekonomi",
  spor: "spor",
  siyaset: "siyaset",
  magazin: "magazin",
  teknoloji: "teknoloji",
  gezi: "gezi",
  sinema: "sinema",
  emlak: "emlak",
  yazarlar: "yazarlar",
  astroloji: "astroloji",
};

export const categoryUpperConvertor = {
  asayis: "ASAYİŞ",
  gundem: "GÜNDEM",
  dunya: "DÜNYA",
  yasam: "YAŞAM",
  saglik: "SAĞLIK",
  sonDakika: "SON DAKİKA",
  arastirma: "ARAŞTIRMA",
  egitim: "EĞİTİM",
  kultursanat: "KÜLTÜR SANAT",
  inanc: "İNANÇ",
  roportaj: "RÖPORTAJ",
  ekonomi: "EKONOMİ",
  spor: "SPOR",
  siyaset: "SİYASET",
  magazin: "MAGAZİN",
  teknoloji: "TEKNOLOJİ",
  gezi: "GEZİ",
  sinema: "SİNEMA",
  emlak: "EMLAK",
  yazarlar: "YAZARLAR",
  astroloji: "ASTROLOJİ",
};

export const storiesArray = [
  {
    category: "dünya",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "dünya",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 500,
  },
  {
    category:"dünya",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"dünya",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"dünya",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "gezi",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"gezi",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "gezi",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"gezi",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"gezi",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"video",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"video",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"video",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "video",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "video",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "otomobil",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "otomobil",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"otomobil",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"otomobil",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"otomobil",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "aktüel",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"aktüel",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "aktüel",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"aktüel",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"aktüel",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"magazin",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"magazin",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"magazin",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "magazin",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "magazin",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "gündem",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "gündem",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"gündem",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"gündem",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"gündem",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "spor",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"spor",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "spor",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"spor",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"spor",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"sağlık",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"sağlık",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"sağlık",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "sağlık",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "sağlık",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "yazarlar",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"yazarlar",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "yazarlar",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"yazarlar",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"yazarlar",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"yaşam",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"yaşam",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"yaşam",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "yaşam",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "yaşam",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "teknoloji",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "teknoloji",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"teknoloji",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"teknoloji",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"teknoloji",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "aile",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"aile",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "aile",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"aile",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"aile",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"tatil",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"tatil",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"tatil",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "tatil",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "tatil",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
];

export const handleScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href?.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};