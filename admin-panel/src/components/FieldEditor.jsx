import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function FieldEditor({ field, value, onChange, pageName, sectionName }) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm font-medium text-gray-700">
        {field.label}
      </Label>
      <Input
        value={value || ""}
        onChange={(e) => onChange(field.path, e.target.value)}
        className="bg-white"
      />
      <p className="text-[10px] text-gray-400">
        Konten ini mengubah bagian {sectionName} di halaman {pageName}
      </p>
    </div>
  );
}
