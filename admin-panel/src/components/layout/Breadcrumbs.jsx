import { ChevronRight, Home } from "lucide-react";
import { useModuleStore } from "@/store/useModuleStore";

export function Breadcrumbs() {
  const { activeModule, activeFile } = useModuleStore();

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Home className="h-4 w-4" />
      <span>Home</span>
      {activeModule && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground">{activeModule.name}</span>
          {activeFile && (
            <>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{activeFile}</span>
            </>
          )}
        </>
      )}
    </div>
  );
}