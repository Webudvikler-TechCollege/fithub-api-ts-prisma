import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedAssets() {
  await prisma.asset.createMany({
    data: [
      {
        'id': 1,
        'url': '/assets/class-aerobics.jpg'
      },
      {
        'id': 2,
        'url': '/assets/class-lower-abs.jpg'
      },
      {
        'id': 3,
        'url': '/assets/class-spinning.jpg'
      },
      {
        'id': 4,
        'url': '/assets/class-weights.jpg'
      },
      {
        'id': 5,
        'url': '/assets/trainer-hippa.jpg'
      },
      {
        'id': 6,
        'url': '/assets/trainer-lars.jpg'
      },
      {
        'id': 7,
        'url': '/assets/trainer-jane.jpg'
      },
      {
        'id': 8,
        'url': '/assets/trainer-torben.jpg'
      }
    ],
    skipDuplicates: true
  });
}
