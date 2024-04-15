import { neon, neonConfig} from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true  //So that it does create new connection every time we load the page

if (!process.env.DATABASE_URL){
    throw new Error('DATABASE_URL is not defined')
}

const sql = neon(process.env.DATABASE_URL); //envoke sql on this

export const db = drizzle(sql); //we will  interact with db