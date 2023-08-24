import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { createContext } from './context';

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});
const router = t.router;
const publicProcedure = t.procedure;
const middleware = t.middleware;
const mergeRouters = t.mergeRouters;

export type { Context };
export { t, router, publicProcedure, middleware, mergeRouters };
export function trpc(): string {
  return 'trpc';
}
