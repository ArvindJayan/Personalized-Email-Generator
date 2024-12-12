/*
  Warnings:

  - You are about to drop the column `belongsToId` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `belongsToId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_belongsToId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_belongsToId_fkey";

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "belongsToId";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "belongsToId";

-- DropTable
DROP TABLE "User";
