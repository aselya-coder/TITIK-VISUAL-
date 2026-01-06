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
  const [showPreview, setShowPreview] = useState(true);
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
      { label: "Menu Contact", path: "nav_contact" },
      { label: "Partner 0 Name", path: "partners.items.0.name" },
      { label: "Partner 0 Logo", path: "partners.items.0.logo" },
      { label: "Partner 0 Link", path: "partners.items.0.href" },
      { label: "Partner 1 Name", path: "partners.items.1.name" },
      { label: "Partner 1 Logo", path: "partners.items.1.logo" },
      { label: "Partner 1 Link", path: "partners.items.1.href" },
      { label: "Partner 2 Name", path: "partners.items.2.name" },
      { label: "Partner 2 Logo", path: "partners.items.2.logo" },
      { label: "Partner 2 Link", path: "partners.items.2.href" }
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
    ,
    "page-layanan": [
      { label: "Service 0 Title", path: "services.items.0.title" },
      { label: "Service 0 Desc", path: "services.items.0.desc" },
      { label: "Service 0 Icon", path: "services.items.0.icon" },
      { label: "Service 1 Title", path: "services.items.1.title" },
      { label: "Service 1 Desc", path: "services.items.1.desc" },
      { label: "Service 1 Icon", path: "services.items.1.icon" },
      { label: "Service 2 Title", path: "services.items.2.title" },
      { label: "Service 2 Desc", path: "services.items.2.desc" },
      { label: "Service 2 Icon", path: "services.items.2.icon" }
    ],
    "Page Detail Layanan Logo Design": [
      { label: "Testimonial 0 Quote", path: "testimonials.items.0.quote" },
      { label: "Testimonial 0 Name", path: "testimonials.items.0.name" },
      { label: "Testimonial 0 Role", path: "testimonials.items.0.role" },
      { label: "Testimonial 0 Avatar", path: "testimonials.items.0.avatar" },
      { label: "Testimonial 1 Quote", path: "testimonials.items.1.quote" },
      { label: "Testimonial 1 Name", path: "testimonials.items.1.name" },
      { label: "Testimonial 1 Role", path: "testimonials.items.1.role" },
      { label: "Testimonial 1 Avatar", path: "testimonials.items.1.avatar" }
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
  const [lastSaved, setLastSaved] = useState({
    page: pages[0],
    title: "",
    subtitle: "",
    values: {},
  });

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
          } catch { void 0; }
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
          setLastSaved({ page, title: t, subtitle: s, values: nextValues });
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
      setLastSaved({ page, title: content.title || "", subtitle: content.subtitle || "", values: nextValues });
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
      } catch { void 0; }
      try {
        const iframe = document.getElementById('tv-preview');
        const target = iframe && iframe.tagName === 'IFRAME' ? iframe.contentWindow : null;
        if (target) {
          target.postMessage({ type: "tv_content_update", page: selectedPage, title, subtitle }, "*");
        }
      } catch { void 0; }
      setLastSaved({ page: selectedPage, title, subtitle, values: formValues });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };
  const handleReset = () => {
    loadContent(selectedPage);
  };
  const primaryPages = ["global", "beranda", "page-layanan", "page-portfolio"];
  const otherPages = pages.filter(p => !primaryPages.includes(p));
  const groupFields = (list) => {
    const groups = {};
    const labelFor = (path) => {
      if (path.startsWith("cta.")) return "CTA";
      if (path.startsWith("items.")) return "Items";
      if (path.startsWith("services.items.")) return "Services";
      if (path.startsWith("partners.items.")) return "Partners";
      if (path.startsWith("nav_")) return "Navigation";
      if (path.startsWith("social_")) return "Social";
      return "General";
    };
    (list || []).forEach(f => {
      const key = labelFor(f.path);
      if (!groups[key]) groups[key] = [];
      groups[key].push(f);
    });
    return groups;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr_420px]">
        <aside className="border-r border-gray-200 bg-white md:min-h-screen p-4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-500">Kelola konten website</p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Halaman Utama</h3>
              <ul className="space-y-1">
                {primaryPages.map((p) => (
                  <li key={p}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg ${selectedPage === p ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                      onClick={() => { setSelectedPage(p); loadContent(p); }}
                    >
                      {p}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Halaman Lainnya</h3>
              <ul className="space-y-1">
                {otherPages.map((p) => (
                  <li key={p}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg ${selectedPage === p ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                      onClick={() => { setSelectedPage(p); loadContent(p); }}
                    >
                      {p}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="p-6">
          <div className="max-w-2xl">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedPage}</h2>
                  <p className="text-gray-600">Isi dan perbarui konten halaman</p>
                </div>
                {(
                  selectedPage !== lastSaved.page ||
                  title !== lastSaved.title ||
                  subtitle !== lastSaved.subtitle ||
                  Object.keys(formValues).some((k) => (formValues[k] || "") !== (lastSaved.values[k] || ""))
                ) && (
                  <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-medium">
                    Belum disimpan
                  </span>
                )}
              </div>
            </div>
            <Card className="shadow-sm rounded-2xl border border-gray-200">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-3">
                  <div className="mb-2 text-sm text-gray-500">
                    <span className="text-gray-900 font-medium">{selectedPage}</span> <span>→</span> <span>Header</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Header</h3>
                  <p className="text-xs text-gray-500">Perubahan akan tampil setelah klik Simpan Perubahan</p>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-sm text-gray-700">Judul Halaman</label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Masukkan judul halaman"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Subjudul Halaman</label>
                      <Input
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        placeholder="Masukkan subjudul halaman"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200" />
                {(fieldsConfig[selectedPage] || []).length > 0 && (
                  <div className="space-y-8">
                    {Object.entries(groupFields(fieldsConfig[selectedPage])).map(([section, fields]) => (
                      <div key={section} className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900">{section}</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {fields.map((f, i) => (
                            <div key={i}>
                              <label className="text-sm text-gray-700">{f.label}</label>
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
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3 pt-2">
                  <Button onClick={handleSave} className="rounded-xl">Simpan Perubahan</Button>
                  <Button variant="outline" onClick={handleReset} className="rounded-xl">Reset</Button>
                </div>
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
          </div>
        </main>
        <section className="hidden lg:block border-l border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">Preview</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-8 rounded-lg px-2"
                onClick={() => {
                  const iframe = document.getElementById("tv-preview");
                  if (iframe && iframe.tagName === "IFRAME") {
                    const el = iframe;
                    const src = el.getAttribute("src") || "";
                    el.setAttribute("src", src);
                  }
                }}
              >
                Reload Preview
              </Button>
              <Button variant="outline" className="h-8 rounded-lg px-2" onClick={() => setShowPreview(s => !s)}>
                {showPreview ? "Sembunyikan" : "Tampilkan"}
              </Button>
            </div>
          </div>
          {showPreview ? (
            <iframe id="tv-preview" title="Website Preview" src="http://localhost:3001/" className="w-full h-[85vh] rounded-xl border border-gray-200" />
          ) : (
            <div className="w-full h-[85vh] rounded-xl border border-gray-200 grid place-items-center">
              <p className="text-gray-500">Preview disembunyikan</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
