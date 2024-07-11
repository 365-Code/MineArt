"use client";
import Link from "next/link";
import React, { useState } from "react";

const AdminMenu = ({ activeMenu }: { activeMenu: string }) => {
  const [showAdminMenu, setShowAdminMenu] = useState(false);

  return (
    <div className="relative h-full">
      <div
        onMouseLeave={() => setShowAdminMenu(false)}
        onMouseEnter={() => setShowAdminMenu(true)}
        className={`h-full w-0 space-y-2 rounded-lg shadow-sm shadow-black/30 sm:w-fit sm:p-4 md:w-[250px] ${
          showAdminMenu && "w-[85px] p-4"
        } overflow-hidden transition-all `}
      >
        <Link
          href={"/auth/admin/dashboard"}
          className={`${
            activeMenu == "dashboard" && "bg-[#e3e3e3]"
          } flex w-full items-center gap-2  rounded-lg p-4 text-xl hover:bg-[#e3e3e3]`}
        >
          <i className="fi fi-rr-apps" />
          {/* <i class="fi fi-sr-apps"></i> */}
          <span className="hidden md:inline">Dashboard</span>
        </Link>
        <Link
          href={"/auth/admin/users"}
          className={`${
            activeMenu == "users" && "bg-[#e3e3e3]"
          } flex w-full items-center gap-2 rounded-lg p-4 text-xl hover:bg-[#e3e3e3]`}
        >
          <i className="fi fi-rr-users-alt" />
          <span className="hidden md:inline">Users</span>
        </Link>
        <Link
          href={"/auth/admin/orders"}
          className={`${
            activeMenu == "orders" && "bg-[#e3e3e3]"
          } flex w-full items-center gap-2 rounded-lg p-4 text-xl hover:bg-[#e3e3e3]`}
        >
          <i className="fi fi-rr-boxes" />
          <span className="hidden md:inline">Orders</span>
        </Link>
        <Link
          href={"/auth/admin/products"}
          className={`${
            activeMenu == "products" && "bg-[#e3e3e3]"
          } flex w-full items-center gap-2 rounded-lg p-4 text-xl hover:bg-[#e3e3e3]`}
        >
          <i className="fi fi-rr-box-open-full" />
          <span className="hidden md:inline">Products</span>
        </Link>
      </div>
      <button
        onMouseLeave={() => setShowAdminMenu(false)}
        onMouseEnter={() => setShowAdminMenu(true)}
        className={`${
          showAdminMenu && "invisible translate-x-10"
        } absolute py-2 rounded-lg -left-2 top-0 transition-none sm:hidden`}
      >
        <i className="fi fi-rs-menu-dots-vertical" />
      </button>
    </div>
  );
};

export default AdminMenu;
