import React, { createContext, useContext, useEffect, useState } from 'react';

type PageKey =
  | 'beranda'
  | 'page-about'
  | 'page-contact'
  | 'page-layanan'
  | 'page-portfolio'
  | 'page-portofolio'
  | 'halaman-careers'
  | 'halaman-lowongan-kerja'
  | 'halaman-program-magang'
  | 'Page Detail Layanan Custom Merchandise'
  | 'Page Detail Layanan Logo Design'
  | 'Page Detail layanan Social Media'
  | 'page detail layanan web&apk'
  | 'page layanan detail ui_ux';

type ContentMap = Record<string, Record<string, string>>;

const STORAGE_KEY = 'tv_page_content';

function readStorage(): ContentMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw);
    if (typeof data !== 'object' || data === null) return {};
    return data as ContentMap;
  } catch {
    return {};
  }
}

type ContentAPI = {
  get: (page: PageKey, field: string, fallback?: string) => string;
  page: (page: PageKey) => Record<string, string>;
};

const ContentCtx = createContext<ContentAPI | null>(null);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ContentMap>({});

  useEffect(() => {
    setData(readStorage());
    const onStorage = (e: StorageEvent) => {
      if (!e.key || e.key === STORAGE_KEY) {
        setData(readStorage());
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const api: ContentAPI = {
    get: (page, field, fallback = '') => {
      const pg = data?.[page] || {};
      const val = pg?.[field];
      return typeof val === 'string' && val.length > 0 ? val : fallback;
    },
    page: (page) => {
      return (data?.[page] as Record<string, string>) || {};
    }
  };

  return <ContentCtx.Provider value={api}>{children}</ContentCtx.Provider>;
};

export function useContent() {
  const ctx = useContext(ContentCtx);
  if (!ctx) {
    // Fallback API if provider is not mounted
    const empty: ContentAPI = {
      get: (_p, _f, fallback = '') => fallback,
      page: (_p) => ({})
    };
    return empty;
  }
  return ctx;
}
