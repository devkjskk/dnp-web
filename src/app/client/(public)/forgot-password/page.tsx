import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ForgotPasswordForm from "./_components/forgot-password-form";

const ForgotPasswordPage = () => {
  return (
    <Card className="mx-auto w-full max-w-[480px]">
      <CardHeader>
        <CardTitle className="text-2xl text-center">ลืมรหัสผ่าน</CardTitle>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordPage;
