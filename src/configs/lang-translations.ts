type Translations = {
  [lang: string]: {
    [key in keyof typeof translations]: string;
  }
};

export type Languages = 'en' | 'sr';
export const languages: Languages[] = ['en', 'sr'];

const translations: Translations = {
  en: {
    theme: "THEME",
    shop: "SHOP",
    product: "PRODUCT",
    blog: "BLOG",
    pages: "PAGES",
    trend: "NEW TREND",
    collections: "COLLECTIONS",
    buy: "BUY",
    footer: "Footer"
  },
  sr: {
    theme: "TEME",
    shop: "PRODAVNICE",
    product: "PROIZVODI",
    blog: "BLOG",
    pages: "STRANICE",
    trend: "NOVI TRENDOVI",
    collections: "KOLEKCIJE",
    buy: "KUPOVINA",
    footer: "FUTERCINA"
  },
};

export default translations;
