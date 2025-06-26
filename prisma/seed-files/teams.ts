import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedTeams() {

  await prisma.team.createMany({
    data: [
      {
        'id': 1,
        'name': 'Aerobics',
        'description': 'Get your pulse pumping for a better cardio!',
        'day': 'Monday',
        'time': '19:30',
        'max_participant': 12,
        'userId': 2,
        'assetId': 1,
      },
      {
        'id': 2,
        'name': 'Weights++',
        'description': `We'll be lifting weights till we can't lift no more!`,
        'day': 'Thursday',
        'time': '16:30',
        'max_participant': 8,
        'userId': 3,
        'assetId': 4,
      },
      {
        'id': 3,
        'name': 'Spinning for beginners',
        'description': `Learn the fine art of spinning on a bicycle. It's not as easy as it looks!`,
        'day': 'Wednesday',
        'time': '18:00',
        'max_participant': 10,
        'userId': 4,
        'assetId': 3,
      },
      {
        'id': 4,
        'name': 'Lower Abs Workout',
        'description': `Get ripped! We'll work on your six-packs and get flat tummies.`,
        'day': 'Wednesday',
        'time': '18:00',
        'max_participant': 8,
        'userId': 5,
        'assetId': 2,
      }
    ],
    skipDuplicates: true
  });
}
