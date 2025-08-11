import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedAssets() {
  await prisma.asset.createMany({
    data: [
      {
        'id': 1,
        'url': '/images/class-aerobics.jpg'
      },
      {
        'id': 2,
        'url': '/images/class-lower-abs.jpg'
      },
      {
        'id': 3,
        'url': '/images/class-spinning.jpg'
      },
      {
        'id': 4,
        'url': '/images/class-weights.jpg'
      },
      {
        'id': 5,
        'url': '/images/trainer-hippa.jpg'
      },
      {
        'id': 6,
        'url': '/images/trainer-lars.jpg'
      },
      {
        'id': 7,
        'url': '/images/trainer-jane.jpg'
      },
      {
        'id': 8,
        'url': '/images/trainer-torben.jpg'
      }
    ],
    skipDuplicates: true
  });
}
