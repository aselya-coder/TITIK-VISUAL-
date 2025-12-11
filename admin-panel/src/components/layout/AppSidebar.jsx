import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Folder, FolderOpen, Image } from "lucide-react";
import { modules } from "@/config/modules";
import { useModuleStore } from "@/store/useModuleStore";

export function AppSidebar() {
  const { activeModule, setActiveModule } = useModuleStore();

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <h2 className="text-lg font-semibold">Content Modules</h2>
        <p className="text-xs text-muted-foreground">Select a page to edit</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Page Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modules.map((module) => (
                <SidebarMenuItem key={module.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveModule(module)}
                    isActive={activeModule?.id === module.id}
                    tooltip={module.description}
                  >
                    {module.isAssetFolder ? (
                      <Image className="h-4 w-4" />
                    ) : activeModule?.id === module.id ? (
                      <FolderOpen className="h-4 w-4" />
                    ) : (
                      <Folder className="h-4 w-4" />
                    )}
                    <span className="truncate">{module.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}