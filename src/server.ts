import express from 'express';
import cors from 'cors'
import workspaceRoutes from './routes/workspaceRoutes';

export const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Mount routes
app.use('/api/workspaces', workspaceRoutes);

export default app
