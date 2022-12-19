import type { Pro } from "@prisma/client";

import { getRequest } from "@/utils/ApiRequest";

type ProsReturnType = () => Promise<Pro[]>;
export const getPros = (
  search: string,
  occupationId: string | undefined
): ProsReturnType => {
  return async () => {
    return getRequest<Pro[]>(
      `/api/pros?search=${search}${
        occupationId ? `&occupationId=${occupationId}` : ""
      }`
    );
  };
};
