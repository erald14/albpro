import type { Occupation } from "@prisma/client";

import { getRequest } from "@/utils/ApiRequest";

export const fetchOccupations = async () => {
  const response = await getRequest<Occupation[]>("/api/occupations");
  return response;
};
