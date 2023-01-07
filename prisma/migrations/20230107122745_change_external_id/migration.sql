/*
  Warnings:

  - You are about to alter the column `externalId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

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
    "updateAt" DATETIME NOT NULL,
    "avatarId" INTEGER DEFAULT 12345,
    CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avatarId", "createdAt", "email", "externalId", "firstname", "id", "lastname", "password", "role", "updateAt", "username") SELECT "avatarId", "createdAt", "email", "externalId", "firstname", "id", "lastname", "password", "role", "updateAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
