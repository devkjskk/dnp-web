import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MyProfileForm from "./my-profile-form";
import { useSession } from "next-auth/react";

const TITLE = "อัพเดตข้อมูล";

const UpdateMyProfileDrawer = () => {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger className="bg-primary text-white px-4 rounded-md text-sm">
        {TITLE}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-left">
          <SheetTitle>{TITLE}</SheetTitle>
          <MyProfileForm defaultValues={{ ...session?.user }} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateMyProfileDrawer;
