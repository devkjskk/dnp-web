import { z } from "zod";

export const TicketFormSchema = z.object({
  type: z.string().min(1, "กรุณาเลือกประเภทเรื่อง"),
  fullName: z.string().min(1, "กรุณากรอกชื่อผู้แจ้ง"),
  isAnonymous: z.boolean().optional(),
  phoneNumber: z.string().min(10, "กรุณากรอกเบอร์โทรศัพท์"),
  latLng: z.string(),
  location: z.string().optional(),
  addressNumber: z.string().optional(),
  addressMoo: z.string().optional(),
  addressRoad: z.string().optional(),
  addressSubDistrict: z.string().optional(),
  addressDistrict: z.string().optional(),
  addressProvince: z.string().optional(),
  addressZipCode: z.string().optional(),
  date: z.string({ message: "กรุณากรอกวันเกิดให้ถูกต้อง" }).optional(),
  time: z.string().optional(),
  subject: z.string().min(1, "กรุณากรอกหัวข้อ"),
  description: z.string().optional(),
  images: z.array(z.any()),
  isVolunteer: z.boolean().optional(),
});
