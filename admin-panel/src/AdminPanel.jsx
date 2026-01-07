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
  
  const [selectedPage, setSelectedPage] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [saved, setSaved] = useState(false);
  const [lastSaved, setLastSaved] = useState({
    page: null,
    title: "",
    subtitle: "",
    values: {},
  });
  const [apiUp, setApiUp] = useState(null);

  const loadContent = async (page) => {
    try {
      // Try remote API first
      const res = await fetch(`${API_BASE}/${encodeURIComponent(page)}`, {
        headers: { Accept: "application/json" },
      });
      
      let data = {};
      let t = "";
      let s = "";

      if (res.ok) {
        const json = await res.json();
        if (json && typeof json === "object") {
          data = json;
          t = json.title || "";
          s = json.subtitle || "";
          
          // sync to localStorage for preview iframe communication
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const localData = raw ? JSON.parse(raw) : {};
            localData[page] = { ...(localData[page] || {}), ...json, title: t, subtitle: s };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
          } catch { void 0; }
        }
      } else {
        // Fallback to localStorage
        const raw = localStorage.getItem(STORAGE_KEY);
        const localData = raw ? JSON.parse(raw) : {};
        data = localData?.[page] || {};
        t = typeof data.title === "string" ? data.title : "";
        s = typeof data.subtitle === "string" ? data.subtitle : "";
      }

      setTitle(typeof t === "string" ? t : "");
      setSubtitle(typeof s === "string" ? s : "");

      const sections = fieldsConfig[page] || [];
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

      sections.forEach(section => {
        section.fields.forEach(f => {
          nextValues[f.path] = getByPath(data, f.path);
        });
      });

      setFormValues(nextValues);
      setLastSaved({ page, title: t, subtitle: s, values: nextValues });
    } catch {
      setTitle("");
      setSubtitle("");
      setFormValues({});
    }
  };

  useEffect(() => {
    if (selectedPage) {
      loadContent(selectedPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPage]);
  
  useEffect(() => {
    const ping = async () => {
      try {
        const res = await fetch(API_BASE, { headers: { Accept: "application/json" } });
        setApiUp(res.ok ? true : false);
      } catch {
        setApiUp(false);
      }
    };
    ping();
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

  const handleFieldChange = (path, value) => {
    setFormValues(prev => ({ ...prev, [path]: value }));
  };

  const hasChanges = selectedPage && (
    selectedPage !== lastSaved.page ||
    title !== lastSaved.title ||
    subtitle !== lastSaved.subtitle ||
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
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 sticky top-0 bg-gray-50/95 backdrop-blur z-10 py-4 border-b border-gray-200/50 gap-4">
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
              
              {apiUp === false && (
                <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 text-amber-800 p-4 text-sm">
                  Server CMS tidak aktif. Jalankan server API di port 4000.
                </div>
              )}

              {/* Page Header Config (Title/Subtitle) */}
              <Card className="mb-8 border-gray-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-gray-100 pb-4">
                  <CardTitle className="text-lg text-gray-900">Header Halaman</CardTitle>
                  <CardDescription>Judul dan deskripsi utama yang muncul di tab browser atau hero section</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4 bg-white">
                  <div className="grid gap-2">
                    <Label>Judul Halaman</Label>
                    <Input 
                      value={title} 
                      onChange={e => setTitle(e.target.value)} 
                      className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Subjudul Halaman</Label>
                    <Input 
                      value={subtitle} 
                      onChange={e => setSubtitle(e.target.value)} 
                      className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                    />
                  </div>
                </CardContent>
              </Card>

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
          url="http://localhost:3001" 
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
