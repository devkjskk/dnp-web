"use client";

import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

import DataText from "@/components/data-list/data-title";
import DataBox from "@/components/data-list/data-box";
import DataItem from "@/components/data-list/data-item";
import WithDate from "@/components/data-list/with-date";
import DataValue from "@/components/data-list/data-value";
import TicketBadge from "./ticket-badge";
import { Ticket } from "../_types/ticket-type";
import { useGetWhistleblowings } from "../_hooks/useGetWhistleblowings";

type TicketListProps = {
  onSelect: (ticket: Ticket) => void;
  search?: string;
};

const TicketList = ({ onSelect, search }: TicketListProps) => {
  const { data: tickets, isLoading } = useGetWhistleblowings({
    search,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <DataBox>
      {tickets?.items.map((ticket) => (
        <DataItem
          key={ticket.id}
          onSelect={() => onSelect(ticket)}
          selected={true}
        >
          <WithDate
            date={formatDistanceToNow(new Date(ticket.updatedAt), {
              addSuffix: true,
            })}
          >
            <TicketBadge name={ticket.type} />
          </WithDate>
          <DataText>{ticket.subject}</DataText>
          <DataValue label="ผู้แจ้งเหตุ" value={ticket.fullName} />
          <DataValue label="สถานะ" value={ticket.status} />
          <DataValue label="ตำแหน่งที่ตั้ง" value={ticket.location} />
          <DataValue label="ผู้ดูแล" value={ticket.manager || "-"} />
        </DataItem>
      ))}
    </DataBox>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.array,
};

export default TicketList;
