import { Request, RequestHandler, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const users = await prisma.booking.findMany({
      include: {
        user: {
          select: {
            name: true
          }
        },
        team: {
          select: {
            name: true
          }
        }
      }
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

export const createRecord = async (req: Request, res: Response) => {
  const { teamId } = req.body;
  const userId = req?.user?.id || undefined;

  const parsedTeamId = Number(teamId);
  const parsedUserId = Number(userId);

  if (!parsedTeamId || isNaN(parsedTeamId) || !parsedUserId || isNaN(parsedUserId)) {
    return res.status(400).json({ error: 'Valid userId and teamId are required' });
  }

  if (!teamId || !userId) {
    res.status(400).json({ error: 'User and team are required' });
  }

  try {
    const data = await prisma.booking.create({
      data: {
        teamId: parsedTeamId,
        userId: parsedUserId
      }
    });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.booking.delete({
      where: {
        id: Number(id)
      },
    });
    res.status(200).json({ message: 'Booking deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete booking' });
  }
};
