/*
  Warnings:

  - Added the required column `phone` to the `ContactForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contactform` ADD COLUMN `phone` VARCHAR(191) NOT NULL;
