import { PrismaClient } from "@prisma/client";
import type { NextApiResponse } from "next";

export default async function handler(_req: any, res: NextApiResponse) {
  const prisma = new PrismaClient();
  const occupations = await prisma.occupation.findMany();
  res.send(occupations);
}
