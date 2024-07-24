import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { MenuItem } from "../_types/menu-item";

type SidebarItemProps = MenuItem;

const SidebarItem = ({
  href,
  label,
  icon,
  notifications,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const matchRoute = (href: string) => {
    const search = searchParams.toString();

    if (search) return `${pathname}?${search}` === href;

    return pathname === href;
  };

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-[#334155] transition-all hover:text-white hover:bg-[#EE9E59] bg-white text-sm",
        { "text-white bg-[#EE9E59]": matchRoute(href) }
      )}
    >
      {React.createElement(icon, { className: "h-4 w-4" })}
      {label}
      {true && (
        <span
          className={cn(
            "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
            { "text-primary": matchRoute(href) }
          )}
        >
          {notifications}
        </span>
      )}
    </Link>
  );
};

SidebarItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  notifications: PropTypes.number,
};

export default SidebarItem;
