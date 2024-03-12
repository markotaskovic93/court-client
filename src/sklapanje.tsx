type Transations<T> = {
  [key: string]: {
    [key: string]: T;
  }
}

const translations: Transations<string> = {
  en: {
    theme: "THEME",
    shop: "SHOP",
    product: "PRODUCT",
    blog: "BLOG",
    pages: "PAGES",
    trend: "NEW TREND",
    collections: "COLLECTIONS",
    buy: "BUY"
  },
  sr: {
    theme: "TEME",
    shop: "PRODAVNICE",
    product: "PROIZVODI",
    blog: "BLOG",
    pages: "STRANICE",
    trend: "NOVI TRENDOVI",
    collections: "KOLEKCIJE",
    buy: "KUPOVINA"
  },
};

const translate = (key: string): string => {
  return translations['sr'][key] || key;
};