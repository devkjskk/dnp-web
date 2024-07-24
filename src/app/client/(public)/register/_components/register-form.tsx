"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import InputField from "@/components/input-field";
import { RegisterSchema } from "../_schemas/register-schema";
import { RegisterType } from "../_types/register-type";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import SwitchField from "@/components/switch-field";
import { Input } from "@/components/ui/input";

const defaultValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  birthDate: "",
  address: "",
  email: "",
  otp: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
  });

  const onSubmit = (data: RegisterType) => {
    console.log(data);
  };

  const sendOtp = (email: string) => {
    if (!email) alert("กรุณากรอก Email");

    console.log("send otp");
  };

  const verifyOtp = () => {
    console.log("verify otp");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="ชื่อ"
            name="firstName"
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <InputField
            label="นามสกุล"
            name="lastName"
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <InputField
            label="เบอร์ติดต่อ"
            name="phoneNumber"
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <InputField
            label="วัน/เดือน/ปีเกิด"
            name="birthDay"
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 mt-2">
          <InputField
            label="ที่อยู่"
            name="address"
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="flex justify-around items-center">
                    <Input placeholder="กรอกข้อมูล" {...field} />
                    <button
                      type="button"
                      className="text-[#27A14F] text-xs underline w-20 text-right"
                      onClick={() => sendOtp(field.value)}
                    >
                      Send OTP
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <InputField
            label="OTP"
            name="otp"
            placeholder="กรอกข้อมูล"
            description="ระบบจะส่ง OTP  ไปยัง Email ที่กรอกไว้"
            control={form.control}
          />
          <InputField
            label="รหัสผ่าน"
            name="password"
            inputProps={{ type: "password" }}
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <InputField
            label="ยืนยันรหัสผ่าน"
            name="confirmPassword"
            inputProps={{ type: "password" }}
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <p className="text-sm font-regular">
            ข้อมูลที่ท่านบันทึกจะถูกจัดเก็บไว้บนฐานข้อมูลภายในระบบ Application
            สายด่วนพิทักษ์ป่า 1362
            ท่านสามารถขอยกเลิกการจัดเก็บข้อมูลที่ท่านได้ทำการบันทึกไว้ตามนโยบายสิทธิส่วนบุคคลของหน่วยงาน
            <Link href="#" className="underline text-[#007AFF] ml-1">
              (Privacy Policy)
            </Link>
          </p>
          <SwitchField
            label="ข้าพเจ้ายินยอมให้มีการบันทึกข้อมูลดังกล่าว"
            name="acceptedPolicy"
            control={form.control}
          />
        </div>
        <Button
          type="submit"
          className="w-full mt-4"
          disabled={form.formState.isSubmitting}
        >
          ลงทะเบียน
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
