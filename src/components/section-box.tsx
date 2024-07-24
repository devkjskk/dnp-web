import React from "react";
import PropTypes from "prop-types";
import Section from "./section";
import { Label } from "./ui/label";
import { TbListDetails } from "react-icons/tb";

type SectionBoxProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const SectionBox = ({
  title,
  description,
  children,
}: SectionBoxProps) => {
  return (
    <div className="border p-4 rounded-xl shadow-md space-y-1">
      <Section
        title={title}
        description={description}
        icon={<TbListDetails />}
      />
      {children}
    </div>
  );
};

SectionBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionBox;
