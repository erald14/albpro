import create from "zustand";

interface ProsState {
  search: string;
  setSearch: (search: string) => void;
}

export const useProsStore = create<ProsState>((set) => ({
  search: "",
  setSearch: (search: string) => {
    set((state) => ({ ...state, search }));
  },
}));
