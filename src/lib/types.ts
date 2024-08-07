import { z } from "zod";

const ApplicationSchema = z.object({
  id: z.string().cuid().optional(), // 'optional' here because in a creation scenario, it might be auto-generated
  name: z.string(),
  description: z.string().nullable().optional(), // nullable and optional for fields that can be null or undefined
  url: z.string().url(),
  createdAt: z.date().default(new Date()), // default value
  updatedAt: z.date().optional(), // updatedAt is optional because it gets updated on updates
});

export type Application = z.infer<typeof ApplicationSchema>;
