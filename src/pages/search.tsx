import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { getListOfPros } from '@/modules/pros/data/getListOfPros';
import type { Pro } from '@/modules/pros/interfaces/pros';
import { handleQueryString } from '@/utils/handle-query';
import { useDebounce } from '@/utils/hooks/debounce';

export default function SearchPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const [searchInput, setSearchInput] = useState<string>(props.search);
  const [pros, setPros] = useState<Pro[]>(props.pros);

  useDebounce(
    () => {
      getListOfPros(searchInput).then((res) => setPros(res));
    },
    500,
    searchInput
  );

  return (
    <RecoilRoot>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {pros.map((pro, index) => {
          return <div key={index}>{pro.name}</div>;
        })}
      </div>
    </RecoilRoot>
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
      pros: await getListOfPros(searchString),
      search: searchString,
    },
  };
}
