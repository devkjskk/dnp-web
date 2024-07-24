"use client";

import { useMutation } from "@tanstack/react-query";
import { httpClientUser } from "@/utils/http-client-user";

export const useCreateWhistleblowing = () => {
  return useMutation({
    mutationFn: (formData: FormData) => {
      return httpClientUser.post("/whistleblowings", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });
};
