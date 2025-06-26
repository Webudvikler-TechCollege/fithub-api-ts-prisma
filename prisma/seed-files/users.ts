import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export default async function seedUsers() {
  const hashedPassword = await bcrypt.hash('password', 10);
  
  await prisma.user.createMany({
    data: [{
      'id': 1, 
      'name': 'Klaus Bundgaard', 
      'email': 'info@webudvikler.dk', 
      'passwordHash': hashedPassword, 
      'refresh_token': '-', 
      'is_active': true
    }],
    skipDuplicates: true
  });
}
