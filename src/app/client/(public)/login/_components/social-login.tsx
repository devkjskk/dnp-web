"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    alert("Google login");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login");
  };

  return (
    <div className="flex justify-center space-x-3">
      <Button
        type="button"
        variant="outline"
        className="rounded-full w-12 h-12"
        size="icon"
        onClick={handleGoogleLogin}
      >
        <Image
          alt="google"
          src="/icons/google.png"
          width={28}
          height={28}
          className="w-8 h-8"
        />
      </Button>
      <Button
        type="button"
        variant="outline"
        className="rounded-full w-12 h-12"
        size="icon"
        onClick={handleFacebookLogin}
      >
        <Image
          alt="facebook "
          src="/icons/fb.png"
          width={28}
          height={28}
          className="w-8 h-8"
        />
      </Button>
    </div>
  );
};

export default SocialLogin;
