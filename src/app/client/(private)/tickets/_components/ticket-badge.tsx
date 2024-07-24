import React from "react";
import { Badge } from "@/components/ui/badge";

export type Service = {
  name: string;
};

const TicketBadge = ({ name }: Service) => {
  return (
    <Badge
      className="rounded-full"
      style={{
        backgroundColor: "#EEBA55",
        color: "#ffffff",
      }}
    >
      {name}
    </Badge>
  );
};

export default TicketBadge;
