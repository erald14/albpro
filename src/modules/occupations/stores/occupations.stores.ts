import create from "zustand";

export type OccupationSelectValue =
  | { value: string; label: string }
  | undefined;

interface OccupationState {
  selectedOccupation: OccupationSelectValue;
  setSelectedOccupation: (selectedOccupation: OccupationSelectValue) => void;
}

export const useOccupationsStore = create<OccupationState>((set) => ({
  selectedOccupation: undefined,
  setSelectedOccupation: (selectedOccupation: OccupationSelectValue) => {
    set((state) => ({ ...state, selectedOccupation }));
  },
}));
