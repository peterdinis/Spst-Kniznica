import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

interface IBook {}

const fakeBook = () => {};

interface ICategory {}

const fakeCategory = () => {};

async function main() {
  const fakerRounds = 10;
  console.log('Seeding...');
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.book.create({ data: fakeBook() as any });
    await prisma.category.create({ data: fakeCategory() as any });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
