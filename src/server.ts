import express from 'express';
import cors from 'cors'
import workspaceRoutes from './routes/workspaceRoutes.js';
import {authMiddleware} from './middleware/auth.js';
import youtbeAuth from './routes/youtubeRoutes.js'
import uploadRoute from './routes/uploadRoute.js';

export const app = express();

const corsOptions = {
  origin: 'http://localhost:3002', // Your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

app.use('/api/auth', youtbeAuth)
// Mount routes
app.use('/api/workspaces',authMiddleware, workspaceRoutes);
app.use('/api/upload', uploadRoute);


export default app
