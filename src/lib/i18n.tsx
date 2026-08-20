import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "@/locales/en";
import { ko } from "@/locales/ko";

export type Locale = "en" | "ko";

const dictionaries = { en, ko } as const;

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Dot-path lookup into the active dictionary. */
  t: (path: string) => string;
  /** Dot-path lookup returning arrays/objects for structured content. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tx: <T = any>(path: string) => T;
};

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "vesco.locale";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolve(dict: any, path: string): any {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), dict);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "ko" || saved === "en") setLocaleState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(() => {
    const dict = dictionaries[locale];
    return {
      locale,
      setLocale,
      t: (path: string) => {
        const v = resolve(dict, path);
        return typeof v === "string" ? v : path;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tx: <T,>(path: string) => resolve(dict, path) as T,
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
