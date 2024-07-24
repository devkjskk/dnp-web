import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CLIENT_FORGOT_PASSWORD_URL,
  CLIENT_REGISTER_URL,
} from "@/constants/client-urls";
import LoginForm from "./_components/login-form";
import SocialLogin from "./_components/social-login";

const LoginPage = () => {
  return (
    <Card className="mx-auto w-full max-w-[480px]">
      <CardHeader>
        <CardTitle className="text-2xl text-center">ลงชื่อเข้าใช้งาน</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-sm uppercase">
            <span className="bg-card px-2">เข้าใช้งานผ่าน</span>
          </div>
        </div>
        <SocialLogin />
        <div className="flex justify-center my-4">
          <Link href={CLIENT_FORGOT_PASSWORD_URL} className="text-sm underline">
            ลืมรหัสผ่าน
          </Link>
        </div>
        <div className="flex justify-between mt-4">
          <Link href="#" className="text-center text-sm">
            มีบัญชีเข้าใช้งานหรือไม่?
          </Link>
          <Link
            href={CLIENT_REGISTER_URL}
            className="underline text-sm font-semibold text-[#27A14F]"
          >
            ลงทะเบียนที่นี่
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
