import React from "react";
import PropTypes from "prop-types";
import { Label } from "./label";

type SectionValueProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

export const SectionValue = ({ label, value, children }: SectionValueProps) => {
  return (
    <div className="space-y-1">
      <Label className="text-sm">{label}</Label>
      <div className="text-sm font-light">{value}</div>
      {children}
    </div>
  );
};

SectionValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node,
};

export default SectionValue;
