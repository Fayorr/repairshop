import { db } from './index';
import { migrate } from 'drizzle-orm/neon-http/migrator';

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: 'src/db/migrations' });
    console.log('Migration successful');
  } catch (error) {
    console.error('Migration failed');
    console.error(error);
    process.exit(1); //means "exit with error code 1" | Exit code 1 signals to the operating system that something went wrong | 0 means success
  }
};

main();
