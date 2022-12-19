/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
import type { Pro } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const pros: Pro[] = [];
  for (let i = 0; i < 10; i++) {
    pros.push({
      name: `Pro ${i}`,
      email: `pro${i}@example.com`,
      occupationId: `${i}`,
      id: `${i}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  await prisma.pro.createMany({ data: pros });
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
