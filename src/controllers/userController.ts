import { Request, RequestHandler, Response } from 'express';
import { prisma } from '../prisma.js';
import bcrypt from 'bcrypt';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true
      }
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        name: true,
        email:true,
        is_active: true
      }
    });
    if (!user) res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

export const createRecord = async (req: Request, res: Response) => {
  const { name, email, passwordHash, refresh_token, is_active } = req.body;

  if (!email || !passwordHash) {
    res.status(400).json({ error: 'Email and password are required' });
  }

  const isActiveParsed =
    is_active === 'true' || is_active === true || is_active === 1 || is_active === '1';

  try {
    const hashedPassword = await bcrypt.hash(passwordHash, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
        refresh_token,
        is_active: isActiveParsed,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export const updateRecord = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, passwordHash, refresh_token, is_active } = req.body;

  const isActiveParsed =
    is_active === 'true' || is_active === true || is_active === 1 || is_active === '1';

  try {
    const dataToUpdate: any = {
      name,
      email,
      refresh_token,
      is_active: isActiveParsed,
    };

    // Hash password only if provided
    if (passwordHash) {
      dataToUpdate.passwordHash = await bcrypt.hash(passwordHash, 10);
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: dataToUpdate,
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
