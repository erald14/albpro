import type { ZodSchema } from "zod";

export const ValidateSchema = (schema: ZodSchema, value: any) => {
  schema.parse(value);
};
