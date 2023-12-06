
// export const categories = [
//   "gundem",
//   "siyaset",
//   "ekonomi",
//   "dunya",
//   "magazin",
//   "egitim",
//   "asayis",
//   "saglik",
//   "yasam",
//   "spor",
//   "teknoloji",
//   "sonDakika",
//   "yazarlar",
//   "sinema",
//   "arastirma",
//   "gezi",
//   "kultursanat",
//   "inanc",
//   "emlak",
//   "astroloji",
//   "roportaj"
// ];

export const editLink = (collection) => {
  if (collection === "saglik") return "sağlık";
  if (collection === "yasam") return "yaşam";
  if (collection === "asayis") return "asayiş";
  if (collection === "egitim") return "eğitim";
  if (collection === "roportaj") return "röportaj"
  return collection.replace("u", "u");
};

export const shortNewsTitle = (word) => `${word.substring(0, 50)}...`;

export const handleShort = (text, number) => {
  const res = text?.split(" ");
  if (res?.length <= number) return res?.join(" ");
  return res?.slice(0,number).join(" ").concat(" ...");
};
export const handleShortBreadcrump = (text, number) => {
  const res = text?.split(" ");
  if (res?.length <= number) return res?.join(" ");
  return res?.slice(0,number).join(" ").concat(" ...");
};

export const handleShortt = (text) => {
  return text?.substring(0,33).concat(" ...");
};
export const handleShorttSingleHaber = (text) => {
  return text?.substring(0,40).concat(" ...");
};
export const handleShorttSonDakika = (text) => {
  return text?.substring(0,40).concat(" ...");
};
export const handleShorttSurmanset = (text) => {
  return text?.substring(0,80).concat(" ...");
};
export const handleShorttSurmansetRes = (text) => {
  return text?.substring(0,30).concat(" ...");
};
export const handleShorttCatSliderRes = (text) => {
  return text?.substring(0,45).concat(" ...");
};
export const handleShorttCatSlider = (text) => {
  return text?.substring(0,80).concat(" ...");
};
export const handleShorttLetter = (title,number) => {
  // const res = title?.split("");
  // if (res.length <= number) return res.join("");
  // return res.slice(1,number).join("").concat("...");
  return title.substring(0,number)
};
export const handleShorttSmall = (text) => {
  return text?.substring(0,27).concat(" ...");
};
export const handleShorttMed = (text) => {
  return text?.substring(0,36).concat(" ...");
};
export const handleShorttBreadcrump = (text) => {
  return text?.substring(0,40).concat(" ...");
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
  if(category === "kultursanat") return "KÜLTÜR SANAT";
  if(category === "egitim") return "EĞİTİM";
  if(category === "video-galeri") return "VİDEO GALERİ";
  if(category === "otomobil") return "OTOMOBİL";
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
  bursa: "bursa",
  gazze: "gazze",
  otomobil: "otomobil",
  secimozel: "Seçim Özel",
  
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