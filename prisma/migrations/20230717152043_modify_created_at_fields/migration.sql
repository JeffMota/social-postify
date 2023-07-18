-- AlterTable
ALTER TABLE "publications" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" DROP NOT NULL;
