import { AdminLayout } from "./components/layout/AdminLayout";
import { ModuleEditor } from "./components/module/ModuleEditor";

export default function App() {
  return (
    <AdminLayout>
      <ModuleEditor />
    </AdminLayout>
  );
}