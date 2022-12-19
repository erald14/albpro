import { useQuery } from "react-query";

import { fetchOccupations } from "../data/getOccupations";
import { useOccupationsStore } from "../stores/occupations.stores";

export function useOccupations() {
  const selectedOccupation = useOccupationsStore(
    (state) => state.selectedOccupation
  );
  const setSelectedOccupation = useOccupationsStore(
    (state) => state.setSelectedOccupation
  );

  const { data, error, isLoading } = useQuery("occupations", fetchOccupations, {
    staleTime: 1,
    cacheTime: 600000,
    initialData: [],
  });

  return {
    occupations: data || [],
    error,
    isLoading,
    selectedOccupation,
    setSelectedOccupation,
  };
}
