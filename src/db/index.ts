// src/db.ts
import { PrismaClient } from '../generated/prisma/client.js';

export const db = new PrismaClient();
