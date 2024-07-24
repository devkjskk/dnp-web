"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import UpdateMyProfileDrawer from "./_components/update-my-profile-drawer";
import MyProfileInfo from "./_components/my-profile-info";

const MyProfilePage = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4">รายละเอียด</h2>
      <MyProfileInfo />
      <div className="flex justify-between my-4">
        <Button variant="outline">เปลี่ยนรหัสผ่าน</Button>
        <UpdateMyProfileDrawer />
      </div>
    </div>
  );
};

export default MyProfilePage;
