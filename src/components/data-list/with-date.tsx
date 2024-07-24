import React from "react";

import { formatDistanceToNow } from "date-fns";

type WithDateProps = {
  children: React.ReactNode;
  date: string;
};

const WithDate = ({ date, children }: WithDateProps) => {
  return (
    <div className="flex items-center justify-between">
      {children}
      <span className="text-[#73777A] text-sm">{date}</span>
    </div>
  );
};

export default WithDate;
