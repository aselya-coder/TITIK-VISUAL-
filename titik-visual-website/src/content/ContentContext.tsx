import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type PageKey =
  | 'beranda'
  | 'global'
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
const API_URL = process.env.REACT_APP_CONTENT_API || 'http://localhost:4000/api/content';

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
  enabled: (page: PageKey, sectionKey: string, defaultEnabled?: boolean) => boolean;
  refresh: () => Promise<void>;
};

const ContentCtx = createContext<ContentAPI | null>(null);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ContentMap>({});

  function mergeContent(remote: ContentMap, local: ContentMap): ContentMap {
    const merged: ContentMap = { ...local };
    for (const page of Object.keys(remote || {})) {
      merged[page] = { ...(local?.[page] || {}), ...(remote?.[page] || {}) };
    }
    return merged;
  }

  async function fetchRemote(): Promise<ContentMap> {
    if (!API_URL) return {};
    try {
      const res = await fetch(API_URL, { headers: { 'Accept': 'application/json' } });
      if (!res.ok) return {};
      const json = await res.json();
      if (typeof json !== 'object' || json === null) return {};
      return json as ContentMap;
    } catch {
      return {};
    }
  }

  const refresh = useCallback(async () => {
    const local = readStorage();
    const remote = await fetchRemote();
    const merged = mergeContent(remote, local);
    setData(merged);
  }, []);

  useEffect(() => {
    refresh();
    const onStorage = (e: StorageEvent) => {
      if (!e.key || e.key === STORAGE_KEY) {
        refresh();
      }
    };
    const onMessage = (e: MessageEvent) => {
      const d = e?.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === 'tv_content_update' && d.page) {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          const current = raw ? JSON.parse(raw) : {};
          const prev = current?.[d.page] || {};
          const next = { ...prev };
          if (typeof d.title === 'string') next.title = d.title;
          if (typeof d.subtitle === 'string') next.subtitle = d.subtitle;
          current[d.page] = next;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
          refresh();
        } catch {
        }
      }
    };
    window.addEventListener('storage', onStorage);
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('storage', onStorage);
  }, [refresh]);

  const isTruthy = (val: unknown): boolean => {
    if (typeof val === 'boolean') return val;
    if (typeof val === 'string') {
      const v = val.trim().toLowerCase();
      return v === 'true' || v === '1' || v === 'yes' || v === 'on';
    }
    if (typeof val === 'number') return val !== 0;
    return false;
  };

  const api: ContentAPI = {
    get: (page, field, fallback = '') => {
      const pg = data?.[page] || {};
      let cur: any = pg;
      if (field && field.includes('.')) {
        const parts = field.split('.').filter(Boolean);
        for (const k of parts) {
          const idxMatch = k.match(/^\d+$/);
          if (idxMatch) {
            const idx = parseInt(k, 10);
            if (!Array.isArray(cur)) {
              cur = undefined;
              break;
            }
            cur = cur[idx];
          } else {
            cur = cur ? cur[k] : undefined;
          }
          if (cur === undefined || cur === null) break;
        }
      } else {
        cur = pg?.[field];
      }
      const val = cur;
      if (val === undefined || val === null) return fallback;
      return typeof val === 'string' ? val : fallback;
    },
    page: (page) => {
      return (data?.[page] as Record<string, string>) || {};
    },
    enabled: (page, sectionKey, defaultEnabled = true) => {
      const pg = data?.[page] || {};
      const candidates = [
        `${sectionKey}_enabled`,
        `enabled_${sectionKey}`,
        `section_${sectionKey}_enabled`,
        `section:${sectionKey}:enabled`,
      ];
      for (const key of candidates) {
        if (key in pg) return isTruthy(pg[key]);
      }
      return defaultEnabled;
    },
    refresh
  };

  return <ContentCtx.Provider value={api}>{children}</ContentCtx.Provider>;
};

export function useContent() {
  const ctx = useContext(ContentCtx);
  if (!ctx) {
    // Fallback API if provider is not mounted
    const empty: ContentAPI = {
      get: (_p, _f, fallback = '') => fallback,
      page: (_p) => ({}),
      enabled: (_p, _s, defaultEnabled = true) => defaultEnabled,
      refresh: async () => {}
    };
    return empty;
  }
  return ctx;
}
