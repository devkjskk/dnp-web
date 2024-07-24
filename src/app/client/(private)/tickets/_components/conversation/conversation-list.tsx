import React from "react";

import ConversationItem from "./conversation-item";
import { ScrollArea } from "@/components/ui/scroll-area";

const conversations = [
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "ฉัน",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
  },
  {
    from: "เจ้าหน้าที่",
    date: new Date(),
    message: "สวัสดีครับ มีอะไรให้ช่วยเหลือไหมครับ",
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
