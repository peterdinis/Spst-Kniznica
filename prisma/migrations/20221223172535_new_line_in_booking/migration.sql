/*
  Warnings:

  - You are about to drop the column `email` on the `Booking` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "days" TEXT NOT NULL,
    "bookId" INTEGER,
    "studentId" INTEGER,
    "teacherId" INTEGER,
    "extend" BOOLEAN,
    CONSTRAINT "Booking_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Booking_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Booking_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Booking" ("bookId", "days", "id", "studentId", "teacherId") SELECT "bookId", "days", "id", "studentId", "teacherId" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
CREATE UNIQUE INDEX "Booking_bookId_key" ON "Booking"("bookId");
CREATE UNIQUE INDEX "Booking_studentId_key" ON "Booking"("studentId");
CREATE UNIQUE INDEX "Booking_teacherId_key" ON "Booking"("teacherId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
