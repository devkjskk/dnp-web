import React from "react";
import { cn } from "@/lib/utils";

type DataItemProps = {
  children: React.ReactNode;
  onSelect: () => void;
  selected?: boolean;
  className?: string;
  isRead?: boolean;
  useReadability?: boolean;
};

const DataItem = ({
  onSelect,
  children,
  selected,
  className,
  isRead = false,
  useReadability = false,
}: DataItemProps) => {
  return (
    <div
      className={cn(
        "inbox-item border shadow-md rounded-xl p-3 cursor-pointer space-y-1 overflow-hidden",
        {
          "bg-[#F8E3B9]": selected,
          "border-[#EEBA55]": selected,
          "bg-[#EDF4FC]": !isRead && !selected && useReadability,
        },

        className
      )}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

export default DataItem;
