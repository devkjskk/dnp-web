import React, { useMemo } from "react";
import Image from "next/image";

import { SectionBox } from "@/components/section-box";
import { SectionValue } from "@/components/ui/section-text";
import { Ticket } from "../_types/ticket-type";
import dynamic from "next/dynamic";
import { convertLatLngStrToArray } from "@/utils/text-formatter";

type TicketInfoProps = {
  ticket: Ticket;
};

const TicketInfo = ({ ticket }: TicketInfoProps) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/map"), {
        loading: () => (
          <div className="flex items-center justify-center w-full h-full">
            กำลังโหลดแผนที่...
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <>
      <SectionBox title="สถานะการแจ้งเหตุ">
        <SectionValue label="สถานะ" value={ticket?.status} />
      </SectionBox>
      <SectionBox title="เรื่องที่แจ้งเหตุ">
        <SectionValue label="ประเภทเรื่องที่แจ้งเหตุ" value={ticket?.type} />
      </SectionBox>
      <SectionBox title="ข้อมูลผู้แจ้งเหตุ">
        <SectionValue
          label="ชื่อ-นามสกุลผู้แจ้งเหตุ"
          value={ticket?.fullName}
        />
        <SectionValue
          label="ปกปิดชื่อนามสกุล"
          value={ticket?.isAnonymous ? "ปกปิด" : "ไม่ปกปิด"}
        />
        <SectionValue label="เบอร์ติดต่อ" value={ticket?.phoneNumber} />
      </SectionBox>
      {ticket.type !== "สอบถาม" && (
        <SectionBox title="สถานที่เกิดเหตุ">
          <SectionValue label="ตำแหน่ง GPS" value={ticket?.latLng} />
          <div className="h-[250px] w-full">
            <Map position={convertLatLngStrToArray(ticket?.latLng)} />
          </div>
          <SectionValue label="บริเวณสถานที่" value={ticket.location} />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <SectionValue label="บ้านเลขที่" value={ticket?.addressNumber} />
            <SectionValue label="หมู่" value="5" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <SectionValue label="ถนน" value={ticket?.addressRoad} />
            <SectionValue label="ตำบล" value={ticket?.addressSubDistrict} />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <SectionValue label="อำเภอ" value={ticket?.addressDistrict} />
            <SectionValue label="จังหวัด" value={ticket?.addressProvince} />
          </div>
          <SectionValue label="รหัสไปรษณีย์" value={ticket?.addressZipCode} />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <SectionValue label="วัน/เดือน/ปี" value={ticket?.date} />
            <SectionValue label="เวลา" value={ticket?.time} />
          </div>
        </SectionBox>
      )}
      <SectionBox title="รายละเอียดการแจ้งเหตุ">
        <SectionValue label="ชื่อเรื่อง" value={ticket?.subject} />
        <SectionValue label="รายละเอียด" value={ticket?.description} />
        <SectionValue label="ภาพถ่าย/เอกสาร">
          <div className="grid grid-cols-3 gap-4">
            {ticket?.images.map((image, index) => (
              <Image
                key={index}
                className="rounded-xl"
                src={`${process.env.NEXT_PUBLIC_API_URL}/attachments/${image.filename}`}
                alt="forest"
                width={160}
                height={160}
              />
            ))}
          </div>
        </SectionValue>
        <SectionValue
          label="เป็นเครือข่ายอาสาสมัครพิทักษ์อุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช หรือไม่?"
          value={ticket?.isVolunteer ? "ใช่" : "ไม่ใช่"}
        />
      </SectionBox>
    </>
  );
};

export default TicketInfo;
