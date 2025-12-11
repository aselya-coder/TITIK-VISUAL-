import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageUpload } from "../editors/ImageUpload";
import { TextEditor } from "../editors/TextEditor";
import { MetadataForm } from "../editors/MetadataForm";
import { ScrollArea } from "@/components/ui/scroll-area";

export function EditPanel() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Content Editor</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="text">Text & Titles</TabsTrigger>
            <TabsTrigger value="metadata">Metadata</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[500px] pr-4">
            <TabsContent value="images" className="space-y-4">
              <ImageUpload />
            </TabsContent>

            <TabsContent value="text" className="space-y-4">
              <TextEditor />
            </TabsContent>

            <TabsContent value="metadata" className="space-y-4">
              <MetadataForm />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
}