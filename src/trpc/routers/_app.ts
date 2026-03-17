import { baseProcedure, createTRPCRouter } from '../init';
 
export const appRouter = createTRPCRouter({
  health: baseProcedure.query(async () => {

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

    return {status: 'ok'};
  })
});
 
// export type definition of API
export type AppRouter = typeof appRouter;