import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "กรุณากรอกข้อมูล" })
    .email("กรุณากรอกข้อมูลให้ถูกต้อง")
    .min(1, "กรุณากรอกข้อมูล"),
  password: z
    .string({ required_error: "กรุณากรอกข้อมูล" })
    .min(1, "กรุณากรอกข้อมูล"),
});
