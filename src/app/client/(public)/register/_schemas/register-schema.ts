import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2, "กรุณากรอกชื่อให้ถูกต้อง"),
    lastName: z.string().min(2, "กรุณากรอกนามสกุลให้ถูกต้อง"),
    phoneNumber: z.string().min(10, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"),
    birthDay: z.date({ message: "กรุณากรอกวันเกิดให้ถูกต้อง" }),
    address: z.string().min(2, "กรุณากรอกที่อยู่ให้ถูกต้อง"),
    email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
    otp: z.string().min(6, "กรุณากรอกรหัส OTP ให้ถูกต้อง"),
    password: z.string().min(6, "กรุณากรอกรหัสผ่านให้ถูกต้อง"),
    confirmPassword: z.string().min(6, "กรุณากรอกรหัสผ่านให้ถูกต้อง"),
    acceptedPolicy: z.boolean({ message: "กรุณายอมรับเงื่อนไข" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });
