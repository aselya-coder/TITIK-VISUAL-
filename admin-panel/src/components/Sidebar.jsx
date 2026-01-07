import { navStructure } from '../config/pages';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function Sidebar({ selectedPage, onSelect }) {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white flex flex-col h-full">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">Titik Visual</h1>
        <p className="text-xs text-gray-500 mt-1">Content Management System</p>
      </div>
      
      <ScrollArea className="flex-1 py-4">
        <div className="px-3 space-y-6">
          {navStructure.map((group, idx) => (
            <div key={idx}>
              <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {group.label}
              </h3>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.id}>
                    {item.children ? (
                      <div className="space-y-1">
                         {/* Parent Item (Optional: make it clickable or just a label) */}
                         <div className="px-3 py-2 text-sm font-medium text-gray-700">
                            {item.label}
                         </div>
                         {/* Children */}
                         <ul className="pl-4 space-y-1 border-l-2 border-gray-100 ml-3">
                           {item.children.map((child) => (
                             <li key={child.id}>
                               <button
                                 onClick={() => onSelect(child.id)}
                                 className={cn(
                                   "w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors",
                                   selectedPage === child.id
                                     ? "bg-blue-50 text-blue-700 font-medium"
                                     : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                 )}
                               >
                                 {child.label}
                               </button>
                             </li>
                           ))}
                         </ul>
                      </div>
                    ) : (
                      <button
                        onClick={() => onSelect(item.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                          selectedPage === item.id
                            ? "bg-gray-900 text-white font-medium"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        )}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t border-gray-100">
        <div className="text-xs text-center text-gray-400">
          v1.0.0 • Titik Visual
        </div>
      </div>
    </aside>
  );
}
