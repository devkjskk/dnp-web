"use client";

import { useEffect } from "react";
import useRedirect from "@/hooks/useRedirect";

const HomePage = () => {
  const { redirect } = useRedirect();

  useEffect(() => {
    redirect("/client/tickets?status=pending");
  }, [redirect]);
};

export default HomePage;
