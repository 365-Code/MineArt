import AdminLayout from "@/components/AdminLayout";
import React from "react";

const Page = () => {
  return (
    <AdminLayout>
      <h1 className="text-center text-3xl font-semibold">Admin Panel</h1>
      <div className="w-[520px] mx-auto flex max-w-full flex-wrap items-center justify-center gap-4 ">
        <div className="flex p-4 w-[250px] gap-2 items-center rounded-lg shadow-sm shadow-black/50 hover:bg-black hover:text-white text-3xl">
          <i className="fi fi-rr-apps" />
          <span>Dashboard</span>
        </div>
        <div className="flex p-4 w-[250px] gap-2 items-center rounded-lg shadow-sm shadow-black/50 hover:bg-black hover:text-white text-3xl">
          <i className="fi fi-rr-users-alt" />
          <span>Users</span>
        </div>
        <div className="flex p-4 w-[250px] gap-2 items-center rounded-lg shadow-sm shadow-black/50 hover:bg-black hover:text-white text-3xl">

          <i className="fi fi-rr-boxes" />
          <span>Orders</span>

        </div>
        <div className="flex p-4 w-[250px] gap-2 items-center rounded-lg shadow-sm shadow-black/50 hover:bg-black hover:text-white text-3xl">

          <i className="fi fi-rr-box-open-full" />
          <span>Products</span>

        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
