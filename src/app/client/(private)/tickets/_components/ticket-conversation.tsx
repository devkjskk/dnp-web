import React from "react";

import ConversationList from "./conversation/conversation-list";
import ConversationController from "./conversation/conversation-controller";

const TicketConversation = () => {
  return (
    <div className="border p-4 rounded-xl shadow-md">
      <div className="flex justify-between mb-4 flex-col">
        <ConversationList />
        <div className="space-y-3 mt-2">
          <ConversationController />
        </div>
      </div>
    </div>
  );
};

export default TicketConversation;
