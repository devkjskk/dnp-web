"use client";

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TicketInfo from "./ticket-info";
import {
  TICKET_INFO,
  TICKET_CONVERSATION,
} from "../_constants/ticket-constant";
import TicketConversation from "./ticket-conversation";
import { Ticket } from "../_types/ticket-type";

type TicketInfoCardProps = {
  ticket: Ticket;
};

const TicketInfoCard = ({ ticket }: TicketInfoCardProps) => {
  return (
    <Tabs defaultValue={TICKET_INFO} className="w-auto">
      <TabsList>
        <TabsTrigger value={TICKET_INFO}>รายละเอียดข้อมูลการแจ้ง</TabsTrigger>
        <TabsTrigger value={TICKET_CONVERSATION}>ข้อความตอบกลับ</TabsTrigger>
      </TabsList>
      <TabsContent value={TICKET_INFO} className="space-y-4">
        <TicketInfo ticket={ticket} />
      </TabsContent>
      <TabsContent value={TICKET_CONVERSATION}>
        <TicketConversation />
      </TabsContent>
    </Tabs>
  );
};

export default TicketInfoCard;
