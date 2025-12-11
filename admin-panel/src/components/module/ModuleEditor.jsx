import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { FileTree } from "./FileTree";
import { EditPanel } from "./EditPanel";
import { PreviewPane } from "./PreviewPane";
import { ActionBar } from "./ActionBar";
import { StatusIndicator } from "./StatusIndicator";
import { useModuleStore } from "@/store/useModuleStore";

export function ModuleEditor() {
  const { activeModule, activeTab, setActiveTab } = useModuleStore();

  if (!activeModule) {
    return (
      <Card className="p-12 text-center">
        <div className="mx-auto max-w-md space-y-4">
          <div className="text-6xl">📁</div>
          <h2 className="text-2xl font-semibold">No Module Selected</h2>
          <p className="text-muted-foreground">
            Select a page module from the sidebar to start editing content
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{activeModule.name}</h2>
          <p className="text-sm text-muted-foreground">{activeModule.description}</p>
        </div>
        <StatusIndicator />
      </div>

      <FileTree module={activeModule} />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="edit">Edit Content</TabsTrigger>
          <TabsTrigger value="html">HTML Config</TabsTrigger>
          <TabsTrigger value="css">CSS Config</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <EditPanel />
            <PreviewPane />
          </div>
        </TabsContent>

        <TabsContent value="html">
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold">HTML Configuration</h3>
            <p className="text-sm text-muted-foreground">
              Configure HTML structure and elements for {activeModule.name}
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="css">
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold">CSS Configuration</h3>
            <p className="text-sm text-muted-foreground">
              Configure styles and themes for {activeModule.name}
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <PreviewPane fullWidth />
        </TabsContent>
      </Tabs>

      <ActionBar />
    </div>
  );
}