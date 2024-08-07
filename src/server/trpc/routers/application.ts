import { procedure, router } from "@/server/trpc";
import { prisma } from "@/server/prisma";
import { Application } from "@/lib/types";

export const applicationRouter = router({
  getApplications: procedure.query(async (): Promise<Application[]> => {
    const applications = await prisma.application.findMany();

    console.log("*****");
    console.log(applications);
    console.log("*****");
    return applications;
  }),
});
