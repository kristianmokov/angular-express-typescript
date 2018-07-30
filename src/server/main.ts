import './polyfills';

import { createServer, Server } from 'http';

import { app } from './server';
import { SERVER_CONFIG } from './server.constants';

async function bootstrap() {
  const server: Server = createServer(app);

  server.listen(SERVER_CONFIG.httpPort);
}

bootstrap();
