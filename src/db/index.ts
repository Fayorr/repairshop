import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);

// Logger
// const db = drizzle(sql, { logger: true });
//you can also use the logger to log the queries to the console
//you can also use the logger to log the queries to the console
const db = drizzle(sql);


export { db };
