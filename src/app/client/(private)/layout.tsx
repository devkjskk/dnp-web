import React from "react";

import SharedPrivateLayout from "@/components/layouts/private/layout";

type ClientLayoutProps = {
  children?: React.ReactNode;
};

const PrivateLayout = async ({ children }: ClientLayoutProps) => {
  return <SharedPrivateLayout>{children}</SharedPrivateLayout>;
};

export default PrivateLayout;
