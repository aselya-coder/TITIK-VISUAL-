import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PreviewPanel({ url, onRefresh }) {
  return (
    <div className="flex flex-col h-full border-l border-gray-200 bg-white">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Live Preview</h3>
        <Button variant="ghost" size="icon" onClick={onRefresh} title="Reload Preview">
          <RefreshCw className="w-4 h-4 text-gray-500" />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 relative">
        <iframe
          id="tv-preview"
          src={url}
          className="w-full h-full border-none"
          title="Website Preview"
        />
      </div>
    </div>
  );
}
