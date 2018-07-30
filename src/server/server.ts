import * as e from 'express';
import { createReadStream } from 'fs';

import { FOLDER_DIST_BROWSER } from './server.constants';

const app: e.Application = e();

app.get('*.*', e.static(FOLDER_DIST_BROWSER));

app.get('*', (req: e.Request, res: e.Response, next: e.NextFunction) => {
  createReadStream(`${FOLDER_DIST_BROWSER}/index.html`).pipe(res);
});

export {
  app
};
