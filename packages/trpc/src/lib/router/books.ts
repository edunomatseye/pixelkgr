import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

const BooksRouter = router({
  getBooks: publicProcedure
    .input(z.object({ author: z.string() }))
    .output(
      z.array(
        z.object({
          author: z.string(),
          title: z.string(),
          description: z.string(),
        })
      )
    )
    .query(({ input, ctx }) => {
      return [
        {
          author: 'Edun' + input.author,
          title: 'Things fall apart',
          description: 'Best selling book',
        },
      ];
    }),
});

export default BooksRouter;
