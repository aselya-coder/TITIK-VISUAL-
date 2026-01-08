import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FieldEditor } from "./FieldEditor";

export function SectionEditor({ section, formValues, onChange, pageName }) {
  const renderFields = () => (
    <div className="grid gap-5">
      {section.fields?.map((f, i) => (
        <FieldEditor
          key={i}
          field={f}
          value={formValues[f.path]}
          onChange={onChange}
          pageName={pageName}
          sectionName={section.section}
        />
      ))}
    </div>
  );

  const renderList = () => {
    if (!section.list) return null;
    const base = section.list.base;
    const itemFields = section.list.fields || [];

    const indices = Object.keys(formValues)
      .filter(k => k.startsWith(base + "."))
      .map(k => {
        const m = k.slice(base.length + 1).match(/^(\d+)\./);
        return m ? parseInt(m[1], 10) : null;
      })
      .filter((v) => v !== null);
    const uniqueIndices = Array.from(new Set(indices)).sort((a, b) => a - b);

    const handleAddItem = () => {
      const nextIndex = (uniqueIndices[uniqueIndices.length - 1] ?? -1) + 1;
      itemFields.forEach(f => {
        const path = `${base}.${nextIndex}.${f.key}`;
        onChange(path, "");
      });
    };
    const handleDeleteItem = (idx) => {
      itemFields.forEach(f => {
        const path = `${base}.${idx}.${f.key}`;
        onChange(path, "");
      });
    };

    return (
      <div className="space-y-4">
        {uniqueIndices.length === 0 && (
          <div className="text-sm text-gray-500">Belum ada item. Tambahkan item baru.</div>
        )}
        {uniqueIndices.map((idx) => (
          <div key={idx} className="rounded-lg border border-gray-200 p-4 bg-white">
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-medium text-gray-700">
                Item {idx + 1}
              </div>
              <Button variant="destructive" onClick={() => handleDeleteItem(idx)}>
                Hapus Item
              </Button>
            </div>
            <div className="grid gap-4">
              {itemFields.map((f, i) => {
                const path = `${base}.${idx}.${f.key}`;
                const field = { ...f, path };
                return (
                  <FieldEditor
                    key={i}
                    field={field}
                    value={formValues[path]}
                    onChange={onChange}
                    pageName={pageName}
                    sectionName={`${section.section} • Item ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
        <div>
          <Button onClick={handleAddItem}>Tambah Item</Button>
        </div>
      </div>
    );
  };

  return (
    <Card className="border-gray-200 shadow-sm overflow-hidden mb-6">
      <CardHeader className="bg-gray-50/50 border-b border-gray-100 py-4">
        <CardTitle className="text-base font-semibold text-gray-800">
          {section.section}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {section.list ? renderList() : renderFields()}
      </CardContent>
    </Card>
  );
}
