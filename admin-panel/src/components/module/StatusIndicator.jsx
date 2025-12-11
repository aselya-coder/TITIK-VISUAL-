import { Badge } from "@/components/ui/badge";
import { useModuleStore } from "@/store/useModuleStore";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

export function StatusIndicator() {
  const { isModified } = useModuleStore();

  if (isModified) {
    return (
      <Badge variant="outline" className="gap-1 border-warning text-warning">
        <Clock className="h-3 w-3" />
        Modified
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="gap-1 border-success text-success">
      <CheckCircle2 className="h-3 w-3" />
      Saved
    </Badge>
  );
}