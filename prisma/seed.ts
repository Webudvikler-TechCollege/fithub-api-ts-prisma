import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import seedUsers from './seed-files/users';
import seedProducts from './seed-files/products';

async function main() {
  await seedProducts()
  await seedUsers()
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
