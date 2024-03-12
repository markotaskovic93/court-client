import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import translations from '../configs/lang-translations';
import localStorageService from '../services/storage/local-storage';

type TranslationContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  translate: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const initialLang = localStorageService.getItem('lang') || 'en';
  const [language, setLanguage] = useState<string>(initialLang);
  
  const translate = (key: string): string => {
    return translations[language][key] || key;
  };

  const changeLanguage = useCallback((lang: string) => {
    setLanguage(lang);
    localStorageService.setItem('lang', lang);
  }, []);

  const value: TranslationContextType = {
    language,
    changeLanguage,
    translate,
  };

  return (
    <TranslationContext.Provider value={value}>
      { children }
    </TranslationContext.Provider>
  );
};
