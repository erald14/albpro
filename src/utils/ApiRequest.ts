const HOST = "http://localhost:3010";
export const getRequest = <T>(url: string): Promise<T> => {
  return fetch(HOST + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .then((data) => {
      return data;
    });
};
