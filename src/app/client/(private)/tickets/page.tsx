"use client";

import React from "react";
import { MdOutlineClose } from "react-icons/md";

import SearchInput from "@/components/search-input";
import TicketList from "./_components/ticket-list";
import TicketForm from "./_components/ticket-form";
import TicketInfoCard from "./_components/ticket-info-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "./_types/ticket-type";
import { useSearch } from "@/hooks/useSearch";

const TicketPage = () => {
  const { searchValue, handleSearch } = useSearch();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [action, setAction] = React.useState("");
  const [selectedTicket, setSelectedTicket] = React.useState<Ticket | null>(
    null
  );

  const handlerOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    setSelectedTicket(null);
  };

  const handleAction = (action: string) => {
    setAction(action);
    handlerOpenDrawer();
  };

  const handleSelectTicket = (ticket: Ticket) => {
    setAction("view");
    handlerOpenDrawer();

    setSelectedTicket(ticket);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{`กำลังดำเนินการ (0)`}</h2>
          <div>
            <Button onClick={() => handleAction("add")}>
              + แจ้งเหตุที่นี่
            </Button>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex-1">
            <SearchInput
              handleSearch={(e) => handleSearch(e.target.value)}
              searchValue={searchValue}
            />
          </div>
        </div>
        <TicketList onSelect={handleSelectTicket} search={searchValue} />
      </div>
      {openDrawer ? (
        <Card className="h-auto">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="text-2xl">
                แจ้งเหตุเหตุศูนย์สายด่วนพิทักษ์ป่า 1362
              </CardTitle>
              <Button
                size="icon"
                onClick={() => handleCloseDrawer()}
                variant="ghost"
                className="rounded-full"
              >
                <MdOutlineClose className="w-6 h-6" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {action === "add" && <TicketForm />}
            {action === "view" && selectedTicket && (
              <div className="overflow-y-scroll h-[calc(100vh-15rem)]">
                <TicketInfoCard ticket={selectedTicket} />
              </div>
            )}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default TicketPage;
