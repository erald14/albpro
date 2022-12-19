import type { Pro } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { handleQueryString } from "@/utils/handle-query";
import { buildQueryArgs } from "@/utils/prisma/buildQueryArgs";
import { ValidateSchema } from "@/utils/validations/valdateRequest";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { search, occupationId } = req.query;
  const searchSchema = z.string().optional();
  ValidateSchema(searchSchema, search);
  const occupationIdSchema = z.string().optional();
  ValidateSchema(occupationIdSchema, occupationId);
  const searchString = handleQueryString(search);
  const prisma = new PrismaClient();
  const args = buildQueryArgs<Pro>({
    searchFields: ["name", "email"],
    search: searchString,
    filters: [{ field: "occupationId", value: occupationId }],
  });
  const pros = await prisma.pro.findMany(args);

  res.send(pros);
}
