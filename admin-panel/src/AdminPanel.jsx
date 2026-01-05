import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AdminPanel() {
  const pages = [
    "global",
    "beranda",
    "halaman-careers",
    "halaman-lowongan-kerja",
    "halaman-program-magang",
    "Page Detail Layanan Custom Merchandise",
    "Page Detail Layanan Logo Design",
    "Page Detail layanan Social Media",
    "page detail layanan web&apk",
    "page layanan detail ui_ux",
    "page-about",
    "page-contact",
    "page-layanan",
    "page-portfolio",
  ];

  const STORAGE_KEY = "tv_page_content";
  const API_BASE = "http://localhost:4000/api/content";
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  const fieldsConfig = {
    global: [
      { label: "Topbar Phone", path: "topbar_phone" },
      { label: "Topbar Email", path: "topbar_email" },
      { label: "Facebook Link", path: "social_facebook_href" },
      { label: "Instagram Link", path: "social_instagram_href" },
      { label: "Menu Home", path: "nav_home" },
      { label: "Menu About", path: "nav_about" },
      { label: "Menu Services", path: "nav_services" },
      { label: "Menu Portfolio", path: "nav_portfolio" },
      { label: "Menu Careers", path: "nav_careers" },
      { label: "Menu Contact", path: "nav_contact" }
    ],
    beranda: [
      { label: "Hero Badge Text", path: "hero_badge_text" },
      { label: "Hero Badge Icon", path: "hero_badge_icon" },
      { label: "Hero Title Line 1", path: "hero_title_line1" },
      { label: "Hero Title Line 2", path: "hero_title_line2" },
      { label: "Hero Lead Prefix", path: "hero_lead_prefix" },
      { label: "Hero Lead Highlight", path: "hero_lead_highlight" },
      { label: "Hero Description", path: "hero_description" },
      { label: "CTA Portfolio Label", path: "cta_portfolio_label" },
      { label: "CTA Consult Label", path: "cta_consult_label" },
      { label: "Icon UI/UX", path: "img_uiux_icon" },
      { label: "Icon Website", path: "img_website_icon" },
      { label: "Icon Merchandise", path: "img_merch_icon" },
      { label: "Icon Corporate Gift", path: "img_gift_icon" },
      { label: "Icon Drinkware", path: "img_drink_icon" },
      { label: "Icon Logo", path: "img_logo_icon" }
    ],
    "page-portfolio": [
      { label: "CTA Title", path: "cta.title" },
      { label: "CTA Subtitle", path: "cta.subtitle" },
      { label: "CTA Primary Button", path: "cta.primary" },
      { label: "CTA Secondary Button", path: "cta.secondary" },
      { label: "Item 0 Title", path: "items.0.title" },
      { label: "Item 0 Description", path: "items.0.description" },
      { label: "Item 0 Category", path: "items.0.category" },
      { label: "Item 0 Year", path: "items.0.year" },
      { label: "Item 0 Client", path: "items.0.client" },
      { label: "Item 0 Tag", path: "items.0.tag" },
      { label: "Item 0 Image", path: "items.0.image" },
      { label: "Item 0 Link", path: "items.0.link" },
      { label: "Item 1 Title", path: "items.1.title" },
      { label: "Item 1 Description", path: "items.1.description" },
      { label: "Item 1 Category", path: "items.1.category" },
      { label: "Item 1 Year", path: "items.1.year" },
      { label: "Item 1 Client", path: "items.1.client" },
      { label: "Item 1 Tag", path: "items.1.tag" },
      { label: "Item 1 Image", path: "items.1.image" },
      { label: "Item 1 Link", path: "items.1.link" },
      { label: "Item 2 Title", path: "items.2.title" },
      { label: "Item 2 Description", path: "items.2.description" },
      { label: "Item 2 Category", path: "items.2.category" },
      { label: "Item 2 Year", path: "items.2.year" },
      { label: "Item 2 Client", path: "items.2.client" },
      { label: "Item 2 Tag", path: "items.2.tag" },
      { label: "Item 2 Image", path: "items.2.image" },
      { label: "Item 2 Link", path: "items.2.link" }
    ]
  };
  const [formValues, setFormValues] = useState({});
  const [title, setTitle] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return "";
      const data = JSON.parse(raw);
      const content = data?.[pages[0]];
      return content?.title || "";
    } catch {
      return "";
    }
  });
  const [subtitle, setSubtitle] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return "";
      const data = JSON.parse(raw);
      const content = data?.[pages[0]];
      return content?.subtitle || "";
    } catch {
      return "";
    }
  });
  const [saved, setSaved] = useState(false);

  const loadContent = async (page) => {
    try {
      // Try remote API first
      const res = await fetch(`${API_BASE}/${encodeURIComponent(page)}`, {
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        const json = await res.json();
        if (json && typeof json === "object") {
          const t = json.title || "";
          const s = json.subtitle || "";
          setTitle(typeof t === "string" ? t : "");
          setSubtitle(typeof s === "string" ? s : "");
          // sync to localStorage for preview iframe communication
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const data = raw ? JSON.parse(raw) : {};
            data[page] = { ...(data[page] || {}), ...json, title: t, subtitle: s };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          } catch {}
          const cfg = fieldsConfig[page] || [];
          const nextValues = {};
          const getByPath = (obj, path) => {
            let cur = obj;
            const parts = path.split(".").filter(Boolean);
            for (const k of parts) {
              const idxMatch = k.match(/^\d+$/);
              if (idxMatch) {
                const idx = parseInt(k, 10);
                if (!Array.isArray(cur)) return "";
                cur = cur[idx];
              } else {
                cur = cur ? cur[k] : undefined;
              }
              if (cur === undefined || cur === null) break;
            }
            return typeof cur === "string" ? cur : "";
          };
          cfg.forEach(f => {
            nextValues[f.path] = getByPath(json, f.path);
          });
          setFormValues(nextValues);
          return;
        }
      }
      // Fallback to localStorage
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      const content = data?.[page] || {};
      setTitle(typeof content.title === "string" ? content.title : "");
      setSubtitle(typeof content.subtitle === "string" ? content.subtitle : "");
      const cfg = fieldsConfig[page] || [];
      const nextValues = {};
      cfg.forEach(f => {
        nextValues[f.path] = typeof content[f.path] === "string" ? content[f.path] : "";
      });
      setFormValues(nextValues);
    } catch (e) {
      console.error(e);
      setTitle("");
      setSubtitle("");
      setFormValues({});
    }
  };

  useEffect(() => {
    loadContent(selectedPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      data[selectedPage] = { title, subtitle };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // Persist to backend API
      try {
        const buildPatch = (values) => {
          const out = {};
          const setByPath = (obj, path, value) => {
            const parts = path.split(".").filter(Boolean);
            let cur = obj;
            let parent = null;
            let parentKey = null;
            for (let i = 0; i < parts.length; i++) {
              const k = parts[i];
              const isLast = i === parts.length - 1;
              const isIndex = /^\d+$/.test(k);
              if (isIndex) {
                const idx = parseInt(k, 10);
                if (!Array.isArray(cur)) {
                  if (parent && parentKey !== null) {
                    if (!Array.isArray(parent[parentKey])) parent[parentKey] = [];
                    cur = parent[parentKey];
                  } else {
                    // root array path
                    return;
                  }
                }
                while (cur.length <= idx) cur.push({});
                if (isLast) {
                  cur[idx] = value;
                } else {
                  if (typeof cur[idx] !== "object" || cur[idx] === null) cur[idx] = {};
                  parent = cur;
                  parentKey = idx;
                  cur = cur[idx];
                }
              } else {
                if (isLast) {
                  cur[k] = value;
                } else {
                  if (typeof cur[k] !== "object" || cur[k] === null) cur[k] = {};
                  parent = cur;
                  parentKey = k;
                  cur = cur[k];
                }
              }
            }
          };
          Object.entries(values).forEach(([p, v]) => setByPath(out, p, v));
          out.title = title;
          out.subtitle = subtitle;
          return out;
        };
        await fetch(`${API_BASE}/${encodeURIComponent(selectedPage)}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPatch(formValues)),
        });
      } catch {}
      try {
        const iframe = document.getElementById('tv-preview');
        const target = iframe && iframe.tagName === 'IFRAME' ? iframe.contentWindow : null;
        if (target) {
          target.postMessage({ type: "tv_content_update", page: selectedPage, title, subtitle }, "*");
        }
      } catch {}
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-gray-800"
      >
        Admin Panel Website
      </motion.h1>

      <Card className="max-w-2xl mx-auto shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <div>
            <label className="text-gray-700 font-medium">Pilih Halaman</label>
          <select
            className="w-full mt-1 p-2 border rounded-xl"
            value={selectedPage}
            onChange={(e) => {
              const page = e.target.value;
              setSelectedPage(page);
              loadContent(page);
            }}
          >
            {pages.map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
            </select>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Title Halaman</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan title halaman"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Subtitle Halaman</label>
            <Input
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Masukkan subtitle halaman"
              className="mt-1"
            />
          </div>

          {(fieldsConfig[selectedPage] || []).length > 0 && (
            <div className="space-y-3">
              {(fieldsConfig[selectedPage] || []).map((f, i) => (
                <div key={i}>
                  <label className="text-gray-700 font-medium">{f.label}</label>
                  <Input
                    value={formValues[f.path] || ""}
                    onChange={(e) =>
                      setFormValues((prev) => ({ ...prev, [f.path]: e.target.value }))
                    }
                    placeholder={f.path}
                    className="mt-1"
                  />
                </div>
              ))}
            </div>
          )}

          <Button onClick={handleSave} className="w-full rounded-xl">
            Simpan Perubahan
          </Button>

          {saved && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-semibold"
            >
              ✓ Perubahan halaman berhasil disimpan
            </motion.p>
          )}
        </CardContent>
      </Card>

      <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-900">Preview Halaman: {selectedPage}</h2>
        <p className="mt-2 text-gray-700 text-lg">{title || "(Judul belum diisi)"}</p>
        <p className="text-gray-500">{subtitle || "(Subtitle belum diisi)"}</p>
      </div>
    </div>
  );
}
