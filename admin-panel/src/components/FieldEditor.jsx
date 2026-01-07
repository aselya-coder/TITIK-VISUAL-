import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FieldEditor({ field, value, onChange, pageName, sectionName }) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm font-medium text-gray-700">
        {field.label}
      </Label>
      {field.type === "textarea" ? (
        <Textarea
          value={value || ""}
          onChange={(e) => onChange(field.path, e.target.value)}
          className="bg-white"
        />
      ) : field.type === "select" && Array.isArray(field.options) ? (
        <select
          value={value || ""}
          onChange={(e) => onChange(field.path, e.target.value)}
          className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm"
        >
          <option value="">Pilih opsi</option>
          {field.options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <Input
          value={value || ""}
          onChange={(e) => onChange(field.path, e.target.value)}
          className="bg-white"
        />
      )}
      <p className="text-[10px] text-gray-400">
        Konten ini mengubah bagian {sectionName} di halaman {pageName}
      </p>
    </div>
  );
}
