import { z } from "zod";

export const TicketFormSchema = z.object({
  type: z.string().min(1, "กรุณาเลือกประเภทเรื่อง"),
  fullName: z.string().min(1, "กรุณากรอกชื่อผู้แจ้ง"),
  isAnonymous: z.boolean().optional(),
  phoneNumber: z.string().min(10, "กรุณากรอกเบอร์โทรศัพท์"),
  latLng: z.string(),
  location: z.string().min(1, "กรุณาระบุสถานที่"),
  addressNumber: z.string().min(1, "กรุณากรอกบ้านเลขที่"),
  addressMoo: z.string().min(1, "กรุณากรอกหมู่"),
  addressRoad: z.string().min(1, "กรุณากรอกถนน"),
  addressSubDistrict: z.string().min(1, "กรุณากรอกตำบล"),
  addressDistrict: z.string().min(1, "กรุณากรอกอำเภอ"),
  addressProvince: z.string().min(1, "กรุณากรอกจังหวัด"),
  addressZipCode: z.string().min(1, "กรุณากรอกรหัสไปรษณีย์"),
  date: z
    .string({ message: "กรุณากรอกวันเกิดให้ถูกต้อง" })
    .min(1, "กรุณากรอกวันที่"),
  time: z.string().min(1, "กรุณากรอกเวลา"),
  subject: z.string().min(1, "กรุณากรอกหัวข้อ"),
  description: z.string().optional(),
  images: z.array(z.any()),
  isVolunteer: z.boolean().optional(),
});
