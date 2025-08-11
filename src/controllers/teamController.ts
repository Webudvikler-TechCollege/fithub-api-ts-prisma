import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.team.findMany({
      select: {
        id: true,
        name: true,
        asset: {
          select: {
            url: true
          }
        }
      }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await prisma.team.findUnique({
      where: { id: Number(id) },
      include: {
        user: {
          select: {
            name: true
          }
        },
        asset: {
          select: {
            url:true
          }
        }
      }
    });
    if (!data) res.status(404).json({ error: 'Team not found' });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch team' });
  }
};