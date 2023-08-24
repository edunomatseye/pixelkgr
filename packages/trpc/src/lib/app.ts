import * as express from 'express';
import * as cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import appRouter from './router';
import { createContext } from './context';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'pixelpgr-int.vercel.app'],
  })
);

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export default app;
