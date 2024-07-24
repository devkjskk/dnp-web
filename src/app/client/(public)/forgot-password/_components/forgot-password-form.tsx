"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputField from "@/components/input-field";
import { Form } from "@/components/ui/form";
import { ForgotPasswordSchema } from "../_schemas/forgot-password-schema";
import { ForgotPasswordType } from "../_types/forgot-password-type";
import { Button } from "@/components/ui/button";

const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="กรอกข้อมูล"
        />
        <Button className="w-full" type="submit">
          ส่ง
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
