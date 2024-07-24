import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import InputField from "@/components/input-field";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type MyProfileFormProps = {
  defaultValues: any;
};

const MyProfileForm = ({ defaultValues }: MyProfileFormProps) => {
  const form = useForm({
    defaultValues,
  });

  return (
    <Form {...form}>
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
      <InputField
        label="ที่อยู่"
        name="address"
        placeholder="กรอกข้อมูล"
        control={form.control}
      />
      <InputField
        label="Email"
        name="email"
        placeholder="กรอกข้อมูล"
        control={form.control}
      />
      <div className="flex justify-end">
        <Button type="submit">อัพเดต</Button>
      </div>
    </Form>
  );
};

MyProfileForm.propTypes = {};

export default MyProfileForm;
