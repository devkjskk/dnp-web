import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";

type ConversationItemProps = {
  from: string;
  date: Date;
  message: string;
};

const ConversationItem = ({ from, date, message }: ConversationItemProps) => {
  return (
    <div className="mb-2">
      <div className="flex items-center space-x-2">
        <div className="flex justify-center items-center space-x-2">
          <div className="text-md font-semibold">{from}</div>
          <div className="text-sm font-regular text-gray-400">
            {formatDistanceToNow(date, { addSuffix: true })}
          </div>
        </div>
      </div>
      <div className="text-md">{message}</div>
    </div>
  );
};

ConversationItem.propTypes = {
  from: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  message: PropTypes.string.isRequired,
};

export default ConversationItem;
