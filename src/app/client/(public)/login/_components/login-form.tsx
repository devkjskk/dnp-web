"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import InputField from "@/components/input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LoginSchema } from "../_schemas/login-schema";
import { LoginType } from "../_types/login-type";
import { useRedirect } from "@/hooks/useRedirect";
import { CLIENT_TICKETS_WITH_PENDING_STATUS_URL } from "@/constants/client-urls";

const LoginForm = () => {
  const { redirect } = useRedirect();

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginType) => {
    const login = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (login && login.ok) {
      redirect(CLIENT_TICKETS_WITH_PENDING_STATUS_URL);
    } else {
      toast("เข้าสู่ระบบไม่สำเร็จ");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <InputField
            label="Email"
            name="email"
            type="text"
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <InputField
            label="Password"
            name="password"
            inputProps={{
              type: "password",
            }}
            placeholder="กรอกข้อมูล"
            control={form.control}
          />
          <Button type="submit" className="w-full">
            เข้าใช้งาน
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
