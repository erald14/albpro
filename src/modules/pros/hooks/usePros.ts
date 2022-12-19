import { useQuery } from "react-query";

import { useOccupationsStore } from "@/modules/occupations/stores/occupations.stores";

import { getPros } from "../data/getListOfPros";
import { useProsStore } from "../stores/pros.store";

export function usePros() {
  const search = useProsStore((state) => state.search);
  const setSearch = useProsStore((state) => state.setSearch);
  const selectedOccupation = useOccupationsStore(
    (state) => state.selectedOccupation
  );
  const { data, error, isLoading, isFetching } = useQuery(
    ["pros", search, selectedOccupation],
    getPros(search, selectedOccupation?.value),
    {
      staleTime: 1,
      cacheTime: 600000,
      initialData: [],
    }
  );
  return {
    pros: data || [],
    error,
    isLoading,
    search,
    isFetching,
    setSearch,
  };
}
