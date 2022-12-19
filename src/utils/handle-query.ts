export const handleQueryString = (
  query: string | string[] | undefined
): string => {
  if (!query) {
    return "";
  }
  if (typeof query === "string") {
    return query;
  }
  if (query.length > 0 && query[0]) {
    return query[0];
  }
  return "";
};
