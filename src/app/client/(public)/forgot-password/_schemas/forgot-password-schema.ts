import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
});
