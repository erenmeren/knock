import { router } from "@/server/trpc";
import { applicationRouter } from "./application";

export const appRouter = router({
  application: applicationRouter,
});

export type AppRouter = typeof appRouter;
