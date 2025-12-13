import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function PreviewPane({ fullWidth = false }) {
  return (
    <Card className={cn("flex flex-col", fullWidth && "col-span-2")}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Monitor className="h-5 w-5" />
          Live Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ScrollArea className="h-[500px]">
          <iframe
            id="tv-preview"
            title="Website Preview"
            src="http://localhost:3000/"
            style={{ width: '100%', height: '500px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
          />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
