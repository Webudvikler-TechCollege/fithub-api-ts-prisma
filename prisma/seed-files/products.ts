import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedProducts() {
  await prisma.product.createMany({
    data: [{
      'id': 1, 
      'name': 'Hårtørrer',
      'description': 'Bla bla bla',
      'price': 99.00,
      'stock': 1,
      'is_active': true,
      'created': new Date('2022-11-30T20:00:00'),
    }],
    skipDuplicates: true
  });
}
