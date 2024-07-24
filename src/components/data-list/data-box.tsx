import React from "react";

type DataBoxProps = {
  children: React.ReactNode;
};

const DataBox = ({ children }: DataBoxProps) => {
  return (
    <div className="space-y-4 overflow-y-scroll no-scrollbar h-[calc(100vh-200px)]">
      {children}
    </div>
  );
};

export default DataBox;
