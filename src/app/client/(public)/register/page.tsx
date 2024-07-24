import React from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RegisterForm from "./_components/register-form";

const RegisterPage = () => {
  return (
    <Card className="mx-auto w-full max-w-[480px]">
      <CardHeader>
        <CardTitle className="text-2xl text-center">ลงทะเบียน</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
};

export default RegisterPage;
