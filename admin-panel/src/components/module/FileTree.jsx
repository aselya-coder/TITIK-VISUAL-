import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, FileCode, FileText, Palette } from "lucide-react";
import { useState } from "react";
import { useModuleStore } from "@/store/useModuleStore";
import { cn } from "@/lib/utils";

const fileIcons = {
  'index.html': FileCode,
  'style.css': Palette,
  'script.js': FileText,
};

export function FileTree({ module }) {
  const [isOpen, setIsOpen] = useState(true);
  const { activeFile, setActiveFile } = useModuleStore();

  if (module.isAssetFolder) {
    return (
      <Card className="p-4">
        <p className="text-sm text-muted-foreground">Asset folder - Image management only</p>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex w-full items-center gap-2 text-sm font-medium">
          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-0", !isOpen && "-rotate-90")} />
          <span>File Structure</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-1 pl-6">
          {module.files.map((file) => {
            const Icon = fileIcons[file] || FileText;
            return (
              <button
                key={file}
                onClick={() => setActiveFile(file)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                  activeFile === file && "bg-accent font-medium"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{file}</span>
              </button>
            );
          })}
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}