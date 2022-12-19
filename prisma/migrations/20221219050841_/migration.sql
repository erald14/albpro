/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Pro` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Pro` ADD COLUMN `email` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Pro_email_key` ON `Pro`(`email`);
