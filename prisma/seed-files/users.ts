import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export default async function seedUsers() {
  const hashedPassword = await bcrypt.hash('password', 10);

  await prisma.user.createMany({
    data: [
      {
        'id': 1,
        'name': 'Admin Admin',
        'email': 'info@webudvikler.dk',
        'passwordHash': hashedPassword,
        'description': ``,
        'refresh_token': '-',
        'assetId': 1,
        'is_active': true
      },
      {
        'id': 2,
        'name': 'Hippa Hoppesen',
        'email': 'hippa@fithub.dk',
        'passwordHash': await bcrypt.hash('hippa', 10),
        'description': `Hippa is currently working with weigths`,
        'refresh_token': '-',
        'assetId': 5,
        'is_active': true
      },
      {
        'id': 3,
        'name': 'Lars Løbe',
        'email': 'lars@fithub.dk',
        'passwordHash': await bcrypt.hash('lars', 10),
        'description': `Lars is currently working with weigths`,
        'refresh_token': '-',
        'assetId': 6,
        'is_active': true
      },
      {
        'id': 4,
        'name': 'Jane Fondy',
        'email': 'jane@fithub.dk',
        'passwordHash': await bcrypt.hash('jane', 10),
        'description': `Jane is currently working with weigths`,
        'refresh_token': '-',
        'assetId': 7,
        'is_active': true
      },
      {
        'id': 5,
        'name': 'Torben Triceps',
        'email': 'torben@fithub.dk',
        'passwordHash': await bcrypt.hash('torben', 10),
        'description': `Torben is currently working with weigths`,
        'refresh_token': '-',
        'assetId': 8,
        'is_active': true
      },
    ],
    skipDuplicates: true
  });
}
