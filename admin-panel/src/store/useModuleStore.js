import { create } from 'zustand';

export const useModuleStore = create((set) => ({
  activeModule: null,
  activeFile: 'index.html',
  activeTab: 'edit',
  isModified: false,
  editedContent: {},
  
  setActiveModule: (module) => set({ activeModule: module, activeFile: 'index.html', activeTab: 'edit' }),
  setActiveFile: (file) => set({ activeFile: file }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setIsModified: (modified) => set({ isModified: modified }),
  setEditedContent: (content) => set({ editedContent: content, isModified: true }),
  resetEditedContent: () => set({ editedContent: {}, isModified: false }),
}));