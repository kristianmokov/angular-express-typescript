import { join } from 'path';

import { Config, IEnvironmentConfig } from './config/server.config';

const env = process.env.NODE_ENV || 'development';

export const SERVER_CONFIG: IEnvironmentConfig = Config[env];
export const FOLDER_DIST_BROWSER = join(process.cwd(), 'dist/browser');
