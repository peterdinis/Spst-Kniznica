/*
  Warnings:

  - You are about to drop the column `bookId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `days` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `extend` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Booking` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_Booking" ("id") SELECT "id" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
