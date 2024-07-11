import AdminLayout from "@/components/Admin/AdminLayout";
import AdminMenu from "@/components/Admin/AdminMenu";
import OrderStatus from "@/components/OrderStatus";
import { orderArray } from "@/utils";
import React from "react";

const Page = () => {
  return (
    <AdminLayout>
      <h1 className="mb-4 text-left text-xl font-semibold">All Orders</h1>
      <div>
        <div className="font-semibold text-base grid grid-cols-5 rounded-lg p-2">
          <h3>Order ID</h3>
          <h3>User</h3>
          <h3>Phone Number</h3>
          <h3>Address</h3>
          <h3>Status</h3>
        </div>
        <hr />
        {orderArray.map((o) => (
          <div key={o.id}>
            <div className="grid grid-cols-5 rounded-lg p-2">
              <p>{o.id}</p>
              <p>{o.username}</p>
              <p>+91 {o.phone}</p>
              <p>{o.address}</p>
              <OrderStatus itemStatus={o.status} />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Page;
