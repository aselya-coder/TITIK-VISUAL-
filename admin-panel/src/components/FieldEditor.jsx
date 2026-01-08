import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

export function FieldEditor({ field, value, onChange, pageName, sectionName }) {
  const handleRepeatableChange = (idx, key, newVal) => {
    const currentList = Array.isArray(value) ? value : [];
    const newList = [...currentList];
    
    if (field.subType === "string") {
      newList[idx] = newVal;
    } else {
      if (typeof newList[idx] !== "object" || newList[idx] === null || Array.isArray(newList[idx])) {
        newList[idx] = {};
      }
      newList[idx] = { ...(newList[idx] || {}), [key]: newVal };
    }
    onChange(field.path, newList);
  };

  const addRepeatableItem = () => {
    const currentList = Array.isArray(value) ? value : [];
    const newItem = field.subType === "string" ? "" : { label: "" };
    onChange(field.path, [...currentList, newItem]);
  };

  const removeRepeatableItem = (idx) => {
    const currentList = Array.isArray(value) ? value : [];
    const newList = currentList.filter((_, i) => i !== idx);
    onChange(field.path, newList);
  };

  if (field.type === "repeatable") {
    const list = Array.isArray(value) ? value : [];
    return (
      <div className="grid gap-2">
        <Label className="text-sm font-medium text-gray-700">{field.label}</Label>
        <div className="space-y-2">
          {list.map((item, i) => {
            const isSimpleString = typeof item === "string";
            const val = isSimpleString ? item : (item?.label || "");
            return (
              <div key={i} className="flex gap-2 items-center">
                <Input
                  value={val}
                  onChange={(e) => handleRepeatableChange(i, "label", e.target.value)}
                  placeholder={field.placeholder || "Item"}
                  className="bg-white"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeRepeatableItem(i)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            );
          })}
          <Button
            variant="outline"
            size="sm"
            onClick={addRepeatableItem}
            className="w-full border-dashed"
          >
            <Plus className="h-4 w-4 mr-2" /> Tambah Tag
          </Button>
        </div>
        <p className="text-[10px] text-gray-400">
          Konten ini mengubah bagian {sectionName} di halaman {pageName}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-2">
      {field.type === "boolean" ? (
        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(field.path, e.target.checked)}
            className="h-4 w-4 accent-gray-900"
          />
          {field.label}
        </label>
      ) : (
        <Label className="text-sm font-medium text-gray-700">{field.label}</Label>
      )}
      {field.type === "textarea" ? (
        <Textarea
          value={value || ""}
          onChange={(e) => onChange(field.path, e.target.value)}
          className="bg-white"
        />
      ) : field.type === "boolean" ? null : field.type === "select" && Array.isArray(field.options) ? (
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
