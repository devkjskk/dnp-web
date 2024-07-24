import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { SectionBox } from "@/components/section-box";
import { SectionValue } from "@/components/ui/section-text";
import { Ticket } from "../_types/ticket-type";

type TicketInfoProps = {
  ticket: Ticket;
};

const TicketInfo = ({ ticket }: TicketInfoProps) => {
  console.log("🚀 ~ TicketInfo ~ ticket:", ticket);
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
      <SectionBox title="สถานที่เกิดเหตุ">
        <SectionValue label="ตำแหน่ง GPS" value={ticket?.latLng} />
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
      <SectionBox title="รายละเอียดการแจ้งเหตุ">
        <SectionValue label="ชื่อเรื่อง" value={ticket?.subject} />
        <SectionValue label="รายละเอียด" value={ticket?.description} />
        <SectionValue label="ภาพถ่าย/เอกสาร">
          <div className="grid grid-cols-3 gap-4">
            <Image
              className="rounded-xl bg-black"
              src="/images/logo.png"
              alt="forest"
              width={160}
              height={160}
            />
            <Image
              className="rounded-xl bg-black"
              src="/images/logo.png"
              alt="forest"
              width={160}
              height={160}
            />
            <Image
              className="rounded-xl bg-black"
              src="/images/logo.png"
              alt="forest"
              width={160}
              height={160}
            />
            <Image
              className="rounded-xl bg-black"
              src="/images/logo.png"
              alt="forest"
              width={160}
              height={160}
            />
            <Image
              className="rounded-xl bg-black"
              src="/images/logo.png"
              alt="forest"
              width={160}
              height={160}
            />
            <Image
              className="rounded-xl bg-black"
              src="/images/logo.png"
              alt="forest"
              width={160}
              height={160}
            />
          </div>
        </SectionValue>
        <SectionValue
          label="เป็นเครือข่ายอาสาสมัครพิทักษ์อุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช หรือไม่?"
          value="ใช่"
        />
      </SectionBox>
    </>
  );
};

TicketInfo.propTypes = {};

export default TicketInfo;
