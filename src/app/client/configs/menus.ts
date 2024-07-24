import { FaRegCheckCircle } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MenuItem } from "@/components/layouts/_types/menu-item";

export const menus: MenuItem[] = [
  {
    href: "/client/tickets?status=pending",
    label: "กำลังดำเนินการ",
    icon: FaTasks,
    notifications: 0,
  },
  {
    href: "/client/tickets?status=completed",
    label: "ดำเนินการเรียบร้อย",
    icon: FaRegCheckCircle,
    notifications: 0,
  },
  {
    href: "/client/my-profile",
    label: "ข้อมูลของฉัน",
    icon: FaRegUser,
  },
];
