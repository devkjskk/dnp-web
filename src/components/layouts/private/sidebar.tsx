"use client";

import React from "react";
// import { signOut, useSession } from "next-auth/react";

import PropTypes from "prop-types";
import SidebarItem from "./sidebar-item";
import { MenuItem } from "../_types/menu-item";
import { LuLogOut } from "react-icons/lu";

type SideBarProps = {
  menus: MenuItem[];
  handleSignOut: () => void;
};

const SideBar = ({ menus, handleSignOut }: SideBarProps) => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-primary border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full flex flex-col justify-between">
        <div className="px-4 pb-4 overflow-y-auto">
          <div className="space-y-3 font-medium my-2">
            {menus.map((menu, index) => (
              <SidebarItem
                key={index}
                href={menu.href}
                label={menu.label}
                icon={menu.icon}
                notifications={menu.notifications}
              />
            ))}
          </div>
        </div>
        <div className="px-3 pb-4 flex justify-center">
          <button
            className="flex items-center gap-3 px-3 py-2 text-[#334155] transition-all hover:text-white hover:bg-[#EE9E59] bg-white rounded-full"
            onClick={() => handleSignOut()}
          >
            <LuLogOut className="h-5 w-5" />
            ออกจากระบบ
          </button>
        </div>
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  menus: PropTypes.array.isRequired,
};

export default SideBar;
