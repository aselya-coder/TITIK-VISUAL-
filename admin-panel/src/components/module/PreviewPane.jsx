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
          <div className="rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/10 p-8 text-center">
            <div className="mx-auto max-w-md space-y-4">
              <div className="text-4xl">🖼️</div>
              <h3 className="text-lg font-semibold">Preview Area</h3>
              <p className="text-sm text-muted-foreground">
                Live preview of your page will appear here as you make changes
              </p>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}