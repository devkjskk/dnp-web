"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuItem } from "../_types/menu-item";
import SidebarItem from "./sidebar-item";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  menus: MenuItem[];
  handleSignOut: () => void;
};

const Navbar = ({ menus, handleSignOut }: NavbarProps) => {
  const { data: session } = useSession();
  const logoUrl = "/images/logo.png";
  const title = "กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช";

  return (
    <nav
      className="fixed top-0 w-full bg-primary border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      style={{
        zIndex: 9999,
      }}
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="md:hidden">
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <div className="flex justify-between flex-col h-full">
                  <div>
                    <div className="flex items-center my-4">
                      <Image
                        src={logoUrl}
                        className="h-12 w-12 me-3"
                        alt={title}
                        width={100}
                        height={100}
                        priority
                      />
                      <span className="self-center text-sm font-semibold whitespace-wrap text-primary">
                        {title}
                      </span>
                    </div>
                    <div>
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
                  <div className="flex justify-center">
                    <button onClick={() => handleSignOut()}>ออกจากระบบ</button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex ms-2 md:me-24">
              <Image
                src={logoUrl}
                className="h-12 w-12 me-3"
                alt={title}
                width={100}
                height={100}
                priority
              />
              <span className="self-center text-sm font-semibold whitespace-wrap text-white hidden md:block">
                {title}
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col text-white text-sm">
                  <span>
                    {session?.user.firstName} {session?.user.lastName}
                  </span>
                  <span className="font-light">ผู้ใช้งานทั่วไป</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
