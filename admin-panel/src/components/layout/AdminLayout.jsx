import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";
import { Breadcrumbs } from "./Breadcrumbs";

export function AdminLayout({ children }) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <TopNav />
          <main className="flex-1 p-6">
            <Breadcrumbs />
            <div className="mt-4">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}