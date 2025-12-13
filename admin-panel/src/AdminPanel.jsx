import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AdminPanel() {
  const pages = [
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
  const [selectedPage, setSelectedPage] = useState(pages[0]);
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


  const loadContent = (page) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setTitle("");
        setSubtitle("");
        return;
      }
      const data = JSON.parse(raw);
      const content = data?.[page];
      setTitle(content?.title || "");
      setSubtitle(content?.subtitle || "");
    } catch (e) {
      console.error(e);
      setTitle("");
      setSubtitle("");
    }
  };

  

  const handleSave = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      data[selectedPage] = { title, subtitle };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.postMessage(
        { type: "tv_content_update", page: selectedPage, title, subtitle },
        "*"
      );
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
