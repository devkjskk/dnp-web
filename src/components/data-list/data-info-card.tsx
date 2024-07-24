import React from "react";

import Section from "@/components/section";
import { TbListDetails } from "react-icons/tb";

type DataInfoCardProps = {
  children: React.ReactNode;
};

const DataInfoCard = ({ children }: DataInfoCardProps) => {
  return (
    <div>
      <Section title="รายละเอียด" icon={<TbListDetails />} />
      {children}
    </div>
  );
};

export default DataInfoCard;
