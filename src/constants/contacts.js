import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PATH_DB = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../db/db.json',
);
