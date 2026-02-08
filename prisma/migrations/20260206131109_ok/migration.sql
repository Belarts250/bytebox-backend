/*
  Warnings:

  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FileActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_userId_fkey";

-- DropForeignKey
ALTER TABLE "FileActivity" DROP CONSTRAINT "FileActivity_documentId_fkey";

-- DropForeignKey
ALTER TABLE "FileActivity" DROP CONSTRAINT "FileActivity_userId_fkey";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "FileActivity";

-- DropTable
DROP TABLE "User";
