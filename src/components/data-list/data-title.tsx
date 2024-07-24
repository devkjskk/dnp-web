import React from "react";

type DataTextProps = {
  children: React.ReactNode;
};

const DataText = ({ children }: DataTextProps) => {
  return <div className="font-bold text-lg">{children}</div>;
};

export default DataText;
