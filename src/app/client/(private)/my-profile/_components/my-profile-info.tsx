import React from "react";
import { useSession } from "next-auth/react";
import { format } from "date-fns";

import SectionBox from "@/components/section-box";
import SectionValue from "@/components/ui/section-text";

const MyProfileInfo = () => {
  const { data: session } = useSession();

  return (
    <SectionBox title="ข้อมูลของฉัน">
      <div className="grid grid-cols-2">
        <SectionValue label="ชื่อ" value={session?.user.firstName} />
        <SectionValue label="นามสกุล" value={session?.user.lastName} />
      </div>
      <div className="grid grid-cols-2">
        <SectionValue label="เบอร์ติดต่อ" value={session?.user.phoneNumber} />
        <SectionValue
          label="วัน/เดือน/ปีเกิด"
          value={
            session?.user.birthDay &&
            format(new Date(session?.user.birthDay), "dd/MM/yyyy")
          }
        />
      </div>
      <SectionValue label="ที่อยู่" value={session?.user.address} />
      <SectionValue label="Email" value={session?.user.email} />
    </SectionBox>
  );
};

export default MyProfileInfo;
