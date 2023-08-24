import { mergeRouters } from '../trpc';
import BooksRouter from './books';

const appRouter = mergeRouters(BooksRouter);

type AppRouter = typeof appRouter;

export default appRouter;
export type { AppRouter };
