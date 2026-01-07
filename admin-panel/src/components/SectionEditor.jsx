import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldEditor } from "./FieldEditor";

export function SectionEditor({ section, formValues, onChange, pageName }) {
  return (
    <Card className="border-gray-200 shadow-sm overflow-hidden mb-6">
      <CardHeader className="bg-gray-50/50 border-b border-gray-100 py-4">
        <CardTitle className="text-base font-semibold text-gray-800">
          {section.section}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-5">
          {section.fields.map((f, i) => (
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
      </CardContent>
    </Card>
  );
}
