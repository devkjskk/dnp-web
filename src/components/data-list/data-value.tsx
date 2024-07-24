import React from "react";

type DataValueProps = {
  label: string;
  value: string;
};

const DataValue = ({ label, value }: DataValueProps) => {
  return (
    <div className="text-md flex items-center">
      <span className="text-[#2c2c2c] text-sm font-semibold mr-1">
        {label}:
        <span className="text-[#73777A] text-sm font-normal ml-1">{value}</span>
      </span>
    </div>
  );
};

export default DataValue;
