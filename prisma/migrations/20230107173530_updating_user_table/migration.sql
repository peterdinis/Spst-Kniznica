/*
  Warnings:

  - You are about to drop the column `avatarId` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL DEFAULT 'FOO',
    "lastname" TEXT NOT NULL DEFAULT 'BAR',
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'Učiteľ',
    "externalId" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "externalId", "firstname", "id", "lastname", "password", "role", "updateAt", "username") SELECT "createdAt", "email", "externalId", "firstname", "id", "lastname", "password", "role", "updateAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
