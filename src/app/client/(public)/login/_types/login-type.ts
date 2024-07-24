import { z } from "zod";
import { LoginSchema } from "../_schemas/login-schema";

export type LoginType = z.infer<typeof LoginSchema>;
