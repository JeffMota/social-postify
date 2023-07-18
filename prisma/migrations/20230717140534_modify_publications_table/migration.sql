/*
  Warnings:

  - Added the required column `dateToPublish` to the `publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialMedia` to the `publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `publications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "publications" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateToPublish" DATE NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL,
ADD COLUMN     "socialMedia" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
