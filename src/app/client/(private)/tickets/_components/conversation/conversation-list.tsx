import React from "react";

import ConversationItem from "./conversation-item";
import { ScrollArea } from "@/components/ui/scroll-area";

const conversations = [
  {
    from: "ฉัน",
    date: new Date(),
    message: "มีเรื่องสอบถามครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "มีสัตว์รบกวนครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ สามารถบอกที่อยู่ได้ไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "ที่อยู่ บ้านเลขที่ 1 ถนน 1 ตำบล 1 อำเภอ 1 จังหวัด 1",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "ขอบคุณครับ จะนำข้อมูลไปตรวจสอบให้ครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "ขอบคุณครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "ยินดีครับ",
  },
];

const ConversationList = () => {
  return (
    <ScrollArea className="h-[calc(100vh-480px)] scroll-smooth">
      {conversations.map((conversation, index) => (
        <ConversationItem
          key={index}
          from={conversation.from}
          date={conversation.date}
          message={conversation.message}
        />
      ))}
    </ScrollArea>
  );
};

export default ConversationList;
