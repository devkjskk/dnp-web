"use client";

import React from "react";
import PropTypes from "prop-types";
import { signOut } from "next-auth/react";

import Navbar from "./navbar";
import SideBar from "./sidebar";
import { menus } from "@/app/client/configs/menus";
import { CLIENT_LOGIN_URL } from "@/constants/client-urls";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: CLIENT_LOGIN_URL,
    });
  };

  return (
    <>
      <Navbar menus={menus} handleSignOut={handleSignOut} />
      <SideBar menus={menus} handleSignOut={handleSignOut} />
      <div className="px-4 py-2 md:ml-64 mt-20 max-h-screen">{children}</div>
    </>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateLayout;
