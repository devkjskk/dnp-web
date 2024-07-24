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
  const [action, setAction] = React.useState("");
  const [selectedTicket, setSelectedTicket] = React.useState<Ticket | null>(
    null
  );

  const openSlide = () => {
    const slide = document.querySelector(".slide");

    if (!slide) return;

    slide.classList.remove("translate-x-full");
  };

  const closeSlide = () => {
    const slide = document.querySelector(".slide");

    if (!slide) return;

    slide.classList.add("translate-x-full");
  };

  const handleAction = (action: string) => {
    setAction(action);
    openSlide();
  };

  const handleSelectTicket = (ticket: Ticket) => {
    setAction("view");
    openSlide();

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
      <Card className="slide transition-transform duration-300 ease-in-out translate-x-full">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-2xl">
              แจ้งเหตุเหตุศูนย์สายด่วนพิทักษ์ป่า 1362
            </CardTitle>
            <Button
              size="icon"
              onClick={() => closeSlide()}
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
            <TicketInfoCard ticket={selectedTicket} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketPage;
