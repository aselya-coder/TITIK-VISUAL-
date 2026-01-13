import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { DashboardWelcome } from "./components/DashboardWelcome";
import { PreviewPanel } from "./components/PreviewPanel";
import { SectionEditor } from "./components/SectionEditor";
import { fieldsConfig } from "./config/fields";
import { getPageLabel } from "./config/pages";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function AdminPanel() {
  const STORAGE_KEY = "tv_page_content";
  const API_BASE = "http://localhost:4000/api/content";
  const [previewUrl, setPreviewUrl] = useState("http://localhost:3002");
  
  useEffect(() => {
    const probe = async (url) => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2000);
        await fetch(url, { mode: "no-cors", signal: controller.signal });
        clearTimeout(timeout);
        return true;
      } catch {
        return false;
      }
    };
    (async () => {
      const candidates = ["http://localhost:3002", "http://localhost:3000", "http://localhost:3001"];
      for (const url of candidates) {
        if (await probe(url)) {
          setPreviewUrl(url);
          return;
        }
      }
    })();
  }, []);
  
  const [selectedPage, setSelectedPage] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [saved, setSaved] = useState(false);
  const [lastSaved, setLastSaved] = useState({
    page: null,
    values: {},
  });

  const loadContent = async (page) => {
    try {
      // Try remote API first
      const res = await fetch(`${API_BASE}/${encodeURIComponent(page)}`, {
        headers: { Accept: "application/json" },
      });
      
      let data = {};

      if (res.ok) {
        const json = await res.json();
        if (json && typeof json === "object") {
          data = json;
          
          // sync to localStorage for preview iframe communication
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const localData = raw ? JSON.parse(raw) : {};
            localData[page] = { ...(localData[page] || {}), ...json };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
          } catch { void 0; }
        }
      } else {
        // Fallback to localStorage
        const raw = localStorage.getItem(STORAGE_KEY);
        const localData = raw ? JSON.parse(raw) : {};
        data = localData?.[page] || {};
      }

      const sections = fieldsConfig[page] || [];
      const nextValues = {};
      
      const isTruthy = (val) => {
        if (typeof val === "boolean") return val;
        if (typeof val === "string") {
          const v = val.trim().toLowerCase();
          return v === "true" || v === "1" || v === "yes" || v === "on";
        }
        if (typeof val === "number") return val !== 0;
        return false;
      };

      const getByPath = (obj, path, preserveArray = false) => {
        let cur = obj;
        const parts = path.split(".").filter(Boolean);
        for (const k of parts) {
          const idxMatch = k.match(/^\d+$/);
          if (idxMatch) {
            const idx = parseInt(k, 10);
            if (Array.isArray(cur)) {
              cur = cur[idx];
            } else if (cur && typeof cur === "object" && String(idx) in cur) {
              cur = cur[String(idx)];
            } else {
              return "";
            }
          } else {
            cur = cur ? cur[k] : undefined;
          }
          if (cur === undefined || cur === null) break;
        }
        if (Array.isArray(cur)) {
          return preserveArray ? cur : cur.join("\n");
        }
        if (typeof cur === "boolean") return cur;
        if (typeof cur === "number") return String(cur);
        return typeof cur === "string" ? cur : "";
      };

      sections.forEach(section => {
        if (section.fields && Array.isArray(section.fields)) {
          section.fields.forEach(f => {
            nextValues[f.path] = getByPath(data, f.path, f.type === 'repeatable');
          });
        }
        if (section.list && section.list.base && Array.isArray(section.list.fields)) {
          const baseParts = section.list.base.split(".").filter(Boolean);
          const getContainer = (obj, parts) => {
            let cur = obj;
            for (const k of parts) {
              const isIndex = /^\d+$/.test(k);
              if (isIndex) {
                const idx = parseInt(k, 10);
                if (!Array.isArray(cur)) return null;
                cur = cur[idx];
              } else {
                cur = cur ? cur[k] : undefined;
              }
              if (cur === undefined || cur === null) break;
            }
            return cur;
          };
          const container = getContainer(data, baseParts);
          let indices = [];
          if (Array.isArray(container)) {
            indices = container.map((_, i) => i);
          } else if (container && typeof container === "object") {
            indices = Object.keys(container)
              .filter(k => /^\d+$/.test(k))
              .map(k => parseInt(k, 10))
              .sort((a, b) => a - b);
          }
          const normalizeRepeatableObject = (raw) => {
            if (raw === undefined || raw === null) return [];
            if (typeof raw === "string") {
              const labels = raw.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
              return labels.map(label => ({ label }));
            }
            if (Array.isArray(raw)) {
              if (raw.every(v => typeof v === "string")) {
                return raw.map(label => ({ label }));
              }
              return raw;
            }
            return [];
          };

          indices.forEach(i => {
            section.list.fields.forEach(field => {
              const path = `${section.list.base}.${i}.${field.key}`;
              const raw = getByPath(data, path, field.type === "repeatable");
              if (field.type === "repeatable" && field.subType !== "string") {
                nextValues[path] = normalizeRepeatableObject(raw);
                return;
              }
              if (field.type === "boolean") {
                nextValues[path] = isTruthy(raw);
                return;
              }
              nextValues[path] = raw;
            });
          });
        }
      });

      setFormValues(nextValues);
      setLastSaved({ page, values: nextValues });
    } catch {
      setFormValues({});
    }
  };

  useEffect(() => {
    if (selectedPage) {
      setTimeout(() => {
        loadContent(selectedPage);
      }, 0);
    }
  }, [selectedPage]);

  const handleSave = async () => {
    try {
      const buildPatch = (values) => {
        const out = {};
        const splitList = (input) => {
          const parts = String(input)
            .split(/[\n,]/g)
            .map((s) => s.trim())
            .filter(Boolean);
          return parts;
        };
        const normalizeStringList = (list) => {
          if (!Array.isArray(list)) return list;
          const normalized = [];
          for (const v of list) {
            if (v === undefined || v === null) continue;
            if (typeof v === "string") {
              normalized.push(...splitList(v));
              continue;
            }
            if (typeof v === "object") {
              const label = v?.label;
              if (typeof label === "string") normalized.push(...splitList(label));
            }
          }
          return normalized;
        };
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
                let finalValue = value;
                if ((k === "requirements" || k === "tags") && typeof value === "string") {
                  finalValue = splitList(value);
                } else if (k === "tags" && Array.isArray(value)) {
                  finalValue = normalizeStringList(value);
                }
                cur[k] = finalValue;
              } else {
                if (typeof cur[k] !== "object" || cur[k] === null) cur[k] = {};
                parent = cur;
                parentKey = k;
                cur = cur[k];
              }
            }
          }
        };
        const entries = Object.entries(values);
        const changed = entries.filter(([p, v]) => {
          const prevVal = (lastSaved.values[p] ?? "");
          const curVal = (v ?? "");
          if (Array.isArray(prevVal) || Array.isArray(curVal)) {
            const a = Array.isArray(prevVal) ? prevVal.join(",") : String(prevVal);
            const b = Array.isArray(curVal) ? curVal.join(",") : String(curVal);
            return a !== b;
          }
          return String(prevVal) !== String(curVal);
        });
        changed.forEach(([p, v]) => setByPath(out, p, v));
        return out;
      };

      const patch = buildPatch(formValues);

      console.log("Data dikirim ke backend? YA (Mencoba kirim...)");

      // Persist to backend API
      try {
        const res = await fetch(`${API_BASE}/${encodeURIComponent(selectedPage)}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patch),
        });
        
        if (!res.ok) {
          throw new Error(`Server returned ${res.status}`);
        }
        console.log("Backend response OK - Data berhasil dikirim.");
      } catch (err) {
        console.error("Gagal simpan ke backend:", err);
        alert("Gagal menyimpan ke server! Pastikan server CMS berjalan di port 4000.");
        return; // Stop execution, do not show 'Tersimpan!'
      }

      // Sync to localStorage (optional, for immediate preview feedback)
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : {};
        const prevPage = data[selectedPage] || {};
        const deepMerge = (a, b) => {
          if (Array.isArray(a) && Array.isArray(b)) {
            const res = a.slice();
            for (let i = 0; i < b.length; i++) {
              const av = res[i];
              const bv = b[i];
              if (bv === undefined) continue;
              if (Array.isArray(av) && Array.isArray(bv)) {
                res[i] = deepMerge(av, bv);
              } else if (av && typeof av === "object" && bv && typeof bv === "object") {
                res[i] = deepMerge(av, bv);
              } else {
                res[i] = bv;
              }
            }
            return res;
          }
          if (a && typeof a === "object" && !Array.isArray(a) && b && typeof b === "object" && !Array.isArray(b)) {
            const res = { ...a };
            for (const k of Object.keys(b)) {
              const av = a[k];
              const bv = b[k];
              if (Array.isArray(av) && Array.isArray(bv)) {
                res[k] = deepMerge(av, bv);
              } else if (av && typeof av === "object" && !Array.isArray(av) && bv && typeof bv === "object" && !Array.isArray(bv)) {
                res[k] = deepMerge(av, bv);
              } else {
                res[k] = bv;
              }
            }
            return res;
          }
          return b ?? a;
        };
        data[selectedPage] = deepMerge(prevPage, patch);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch { void 0; }

      try {
        const iframe = document.getElementById('tv-preview');
        const target = iframe && iframe.tagName === 'IFRAME' ? iframe.contentWindow : null;
        if (target) {
          target.postMessage({ type: "tv_content_update", page: selectedPage }, "*");
        }
      } catch { void 0; }

      setLastSaved({ page: selectedPage, values: formValues });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error("Save error:", err);
      alert("Terjadi kesalahan saat memproses data.");
    }
  };

  const handleFieldChange = (path, value) => {
    setFormValues(prev => ({ ...prev, [path]: value }));
  };

  const hasChanges = selectedPage && (
    selectedPage !== lastSaved.page ||
    Object.keys(formValues).some((k) => (formValues[k] || "") !== (lastSaved.values[k] || ""))
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      <Sidebar selectedPage={selectedPage} onSelect={setSelectedPage} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          {!selectedPage ? (
            <DashboardWelcome />
          ) : (
            <div className="max-w-3xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Header Area with Title & Save Button */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 py-4 border-b border-gray-200/50 gap-4 bg-gray-50">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">
                    <span>Website</span>
                    <span>/</span>
                    <span>{getPageLabel(selectedPage)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{getPageLabel(selectedPage)}</h2>
                </div>
                
                <div className="flex items-center gap-3">
                  {hasChanges && (
                    <span className="flex items-center gap-2 text-amber-600 text-xs font-medium bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      Unsaved Changes
                    </span>
                  )}
                  <Button 
                    onClick={handleSave} 
                    className={`${saved ? "bg-green-600 hover:bg-green-700" : ""}`}
                  >
                    {saved ? "Tersimpan!" : <><Save className="w-4 h-4 mr-2"/> Simpan Perubahan</>}
                  </Button>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {fieldsConfig[selectedPage]?.map((section, i) => (
                  <SectionEditor 
                    key={i} 
                    section={section} 
                    formValues={formValues} 
                    onChange={handleFieldChange}
                    pageName={getPageLabel(selectedPage)}
                  />
                ))}
              </div>
              
              {(!fieldsConfig[selectedPage] || fieldsConfig[selectedPage].length === 0) && (
                 <div className="text-center py-12 text-gray-400 bg-white rounded-lg border border-dashed border-gray-200">
                    <p>Tidak ada konfigurasi field untuk halaman ini.</p>
                 </div>
              )}
            </div>
          )}
        </main>
      </div>
      
      <div className="w-[450px] hidden xl:block h-full shadow-xl z-20 border-l border-gray-200">
        <PreviewPanel 
          url={previewUrl} 
          onRefresh={() => {
            const iframe = document.getElementById('tv-preview');
            if (iframe) {
              const current = iframe.getAttribute('src');
              if (current) iframe.setAttribute('src', current);
            }
          }} 
        />
      </div>
    </div>
  );
}
