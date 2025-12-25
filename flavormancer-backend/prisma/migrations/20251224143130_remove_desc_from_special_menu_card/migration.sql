/*
  Warnings:

  - You are about to drop the column `createdAt` on the `SpecialMenuCard` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `SpecialMenuCard` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SpecialMenuCard` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SpecialMenuCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "reviews" INTEGER NOT NULL DEFAULT 169
);
INSERT INTO "new_SpecialMenuCard" ("id", "img", "price", "rating", "reviews", "title") SELECT "id", "img", "price", "rating", "reviews", "title" FROM "SpecialMenuCard";
DROP TABLE "SpecialMenuCard";
ALTER TABLE "new_SpecialMenuCard" RENAME TO "SpecialMenuCard";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
