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
  return text.substring(0,33).concat(" ...");
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

export const categoryConvertorFunc = (category) => {
  if (category === "asayis") return "asayiş";
  if (category === "gundem") return "gündem";
  if (category === "dunya") return "dünya";
  if (category === "yasam") return "yaşam";
  if (category === "dunya") return "dünya";
  if (category === "saglik") return "sağlık";
  if (category === "sonDakika") return  "son dakika";
  if (category === "arastirma") return  "araştırma";
  if (category === "egitim") return  "eğitim";
  if (category === "kultursanat") return  "kültür sanat";
  if (category === "inanc") return  "İnanç";
  if (category === "roportaj") return  "röportaj";
  if (category === "ekonomi") return  "ekonomi";
  if (category === "siyaset") return  "siyaset";
  if (category === "magazin") return  "magazin";
  if (category === "teknoloji") return  "teknoloji";
  if (category === "gezi") return  "gezi";
  if (category === "sinema") return  "sinema";
  if (category === "emlak") return  "emlak";
  if (category === "yazarlar") return  "yazarlar";
  if (category === "astroloji") return  "astroloji";
  return category;
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



export const handleScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href?.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};