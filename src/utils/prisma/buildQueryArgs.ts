/* eslint-disable consistent-return */
export type QueryOptions<T> = {
  search?: string;
  searchFields: (keyof T)[];
  filters: { field: keyof T; value?: any }[];
};

export const buildQueryArgs = <T>(queryOptions: QueryOptions<T>) => {
  let args = {};
  if (!queryOptions.search && queryOptions.filters.length < 1) {
    return;
  }
  args = {
    ...args,
    where: {
      AND: [
        {
          OR: [
            ...queryOptions.searchFields.map((field: any) => ({
              [field]: { contains: queryOptions.search },
            })),
          ],
        },
        ...queryOptions.filters.map((filterField) => ({
          [filterField.field]: filterField.value,
        })),
      ],
    },
  };
  return args;
};
