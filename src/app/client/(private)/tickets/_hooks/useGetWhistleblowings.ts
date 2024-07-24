"use client";

import { useQuery } from "@tanstack/react-query";
import { httpClientUser } from "@/utils/http-client-user";
import { PaginationResponse } from "@/types/pagination-response";
import { Ticket } from "../_types/ticket-type";

export const GET_WHISTLEBLOWINGS = "getWhistleblowings";

export const useGetWhistleblowings = ({ search }: { search?: string }) => {
  return useQuery({
    queryKey: [GET_WHISTLEBLOWINGS, { search }],
    queryFn: (): Promise<PaginationResponse<Ticket>> =>
      httpClientUser.get("/whistleblowings", {
        params: {
          search,
        },
      }),
  });
};
