import React from "react";

type PublicLayoutProps = {
  children?: React.ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F7F7F7] p-4">
      {children}
    </main>
  );
};

export default PublicLayout;
