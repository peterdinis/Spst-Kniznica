/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `Student` table. All the data in the column will be lost.
  - Added the required column `password` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Teacher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Teacher" ("createdAt", "email", "firstName", "id", "lastName", "updateAt", "username") SELECT "createdAt", "email", "firstName", "id", "lastName", "updateAt", "username" FROM "Teacher";
DROP TABLE "Teacher";
ALTER TABLE "new_Teacher" RENAME TO "Teacher";
CREATE UNIQUE INDEX "Teacher_username_key" ON "Teacher"("username");
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");
CREATE TABLE "new_Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Student" ("createdAt", "email", "firstName", "id", "lastName", "updateAt", "username") SELECT "createdAt", "email", "firstName", "id", "lastName", "updateAt", "username" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_username_key" ON "Student"("username");
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
