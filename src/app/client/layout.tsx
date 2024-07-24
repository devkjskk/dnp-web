import React from "react";

type ClientLayoutProps = {
  children?: React.ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return <>{children}</>;
};

export default ClientLayout;
