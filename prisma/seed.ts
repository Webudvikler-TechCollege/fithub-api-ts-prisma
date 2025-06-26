import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import seedUsers from './seed-files/users';
import seedAssets from './seed-files/assets';
import seedTeams from './seed-files/teams';

async function main() {
  await seedAssets()
  await seedUsers()
  await seedTeams()
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
