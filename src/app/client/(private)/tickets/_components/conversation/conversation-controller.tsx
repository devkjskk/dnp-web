"use client";

import React, { useState } from "react";
import { LuSend } from "react-icons/lu";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ConversationController = () => {
  const LIMIT_CHARACTERS = 500;
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > LIMIT_CHARACTERS) return;
    setMessage(e.target.value);
  };

  const resetMessage = () => {
    setMessage("");
  };

  const handleSendMessage = () => {
    if (message.length === 0) return;

    alert(message);

    resetMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <Textarea
        rows={6}
        className="resize-none"
        placeholder="พิมพ์ข้อความ"
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        value={message}
      />
      <span className="text-xs text-gray-400">
        {message.length} / {LIMIT_CHARACTERS}
      </span>
      <div className="flex justify-end">
        <Button
          size="icon"
          className="w-16 space-x-2"
          disabled={message.length === 0}
          onClick={handleSendMessage}
        >
          <LuSend />
          <span>ส่ง</span>
        </Button>
      </div>
    </>
  );
};

export default ConversationController;
