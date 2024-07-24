import { z } from "zod";
import { ForgotPasswordSchema } from "../_schemas/forgot-password-schema";

export type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>;
