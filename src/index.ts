import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from './routes/userRoutes';
import { teamRoutes } from './routes/teamRoutes';
import { authRoutes } from './routes/authRoutes';
import { bookingRoutes } from './routes/bookingRoutes';
import { ratingRoutes } from './routes/ratingRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/ratings', ratingRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
