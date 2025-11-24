// lib/texts.js
export const LANGS = ["ar", "en", "de", "tr"];

export const TEXTS = {
  ar: {
    code: "ar",
    dir: "rtl",
    brand: "كلّ شي",
    tagline: "منصة إعلانات مبوبة لسوريا والشرق الأوسط",
    latestListings: "أحدث الإعلانات",
    newListing: "إعلان جديد",
    searchPlaceholder: "إبحث عن منتج، خدمة أو مدينة...",
    categories: "التصنيفات",
    city: "المدينة",
    price: "السعر",
  },
  en: {
    code: "en",
    dir: "ltr",
    brand: "Kul-si",
    tagline: "Classifieds for Syria & the Middle East",
    latestListings: "Latest listings",
    newListing: "New listing",
    searchPlaceholder: "Search for product, service or city...",
    categories: "Categories",
    city: "City",
    price: "Price",
  },
  de: {
    code: "de",
    dir: "ltr",
    brand: "Kul-si",
    tagline: "Kleinanzeigen für Syrien und den Nahen Osten",
    latestListings: "Neueste Anzeigen",
    newListing: "Neue Anzeige",
    searchPlaceholder: "Suche nach Produkt, Dienstleistung oder Stadt...",
    categories: "Kategorien",
    city: "Stadt",
    price: "Preis",
  },
  tr: {
    code: "tr",
    dir: "ltr",
    brand: "Kul-si",
    tagline: "Suriye ve Ortadoğu için ilan platformu",
    latestListings: "En son ilanlar",
    newListing: "Yeni ilan",
    searchPlaceholder: "Ürün, hizmet veya şehir ara...",
    categories: "Kategoriler",
    city: "Şehir",
    price: "Fiyat",
  },
};

export function getText(langParam) {
  const lang = LANGS.includes(langParam) ? langParam : "ar";
  return { lang, t: TEXTS[lang] };
}
