// src/db.ts
import { PrismaClient } from '../prisma/client.js';

export const db = new PrismaClient();
