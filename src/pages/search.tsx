import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import React, { useState } from "react";

import { CategoryDropDown } from "@/modules/occupations/components/CategoryDropDown";
import { usePros } from "@/modules/pros/hooks/usePros";
import { handleQueryString } from "@/utils/handle-query";
import { useDebounce } from "@/utils/hooks/debounce";

export default function SearchPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const [searchInput, setSearchInput] = useState<string>(props.search);

  const { pros, setSearch, isFetching } = usePros();

  useDebounce(
    () => {
      setSearch(searchInput);
    },
    500,
    searchInput
  );

  return (
    <div>
      <CategoryDropDown />
      <input
        placeholder="search"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {!isFetching ? (
        pros.map((pro, index) => {
          return <div key={index}>{pro.name}</div>;
        })
      ) : (
        <>loading</>
      )}
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ search: string }>
) {
  const { query } = context;
  // You can now access the query parameters using the `query` object
  const { search } = query;
  const searchString = handleQueryString(search);
  return {
    props: {
      pros: [],
      search: searchString,
    },
  };
}
