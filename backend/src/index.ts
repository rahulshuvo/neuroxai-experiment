import express, { Express, Request, Response } from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Typed Postgres Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

app.get('/', (req: Request, res: Response) => {
  res.send('NeuroxAI Backend (TypeScript) is running!');
});

app.get('/db-test', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      message: 'Database connected', 
      time: result.rows[0].now 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});