import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Save, Play, RotateCcw, Eye } from "lucide-react";
import { useModuleStore } from "@/store/useModuleStore";

export function ActionBar() {
  const { isModified, resetEditedContent } = useModuleStore();

  const handleSave = () => {
    // Save logic here
    console.log('Saving changes...');
    resetEditedContent();
  };

  const handleApply = () => {
    // Apply changes logic
    console.log('Applying changes...');
  };

  const handleRestore = () => {
    // Restore backup logic
    console.log('Restoring backup...');
    resetEditedContent();
  };

  const handlePreview = () => {
    // Preview logic
    console.log('Opening preview...');
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button onClick={handleSave} disabled={!isModified}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
          <Button onClick={handleApply} variant="secondary" disabled={!isModified}>
            <Play className="mr-2 h-4 w-4" />
            Apply Changes
          </Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleRestore} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Restore Backup
          </Button>
          <Button onClick={handlePreview} variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview Page
          </Button>
        </div>
      </div>
    </Card>
  );
}