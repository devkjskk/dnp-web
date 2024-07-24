import React from "react";
import PropTypes from "prop-types";

type SectionProps = {
  title: string | React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
};

export const Section = ({ title, description, icon, action }: SectionProps) => {
  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="flex items-center space-x-1 text-[#0D4D99]">
        {icon}
        <span className="text-sm font-semibold text-[#0D4D99]">{title}</span>
        <span className="text-gray-400 text-sm font-light">{description}</span>
      </div>
      {action}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  action: PropTypes.node,
};

export default Section;
