import React from "react";
import { Plus } from "lucide-react";
import Table from "../../components/Table";
import Add_User from "./Add_User";

const User_Management = () => {
  const userColumns = [
    { key: "userId", label: "User ID" },
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone Number" },
    { key: "email", label: "Email" },
    { key: "wallet", label: "Wallet Balance" },
    { key: "membership", label: "Membership Type" },
    { key: "status", label: "Status" },
  ];

  const userData = [
    {
      userId: "#5689336",
      name: "Aarnav",
      phone: "00000 00000",
      email: "sophia.clark@email.com",
      wallet: "$500",
      membership: "Premium",
      status: "Active",
    },
    {
      userId: "#5689337",
      name: "Sophia",
      phone: "99999 88888",
      email: "sophia@email.com",
      wallet: "$650",
      membership: "Premium",
      status: "Blocked",
    },
    {
      userId: "#5689336",
      name: "Aarnav",
      phone: "00000 00000",
      email: "sophia.clark@email.com",
      wallet: "$500",
      membership: "Premium",
      status: "Active",
    },
    {
      userId: "#5689340",
      name: "Liam",
      phone: "90000 55555",
      email: "liam.patel@email.com",
      wallet: "$500",
      membership: "Premium",
      status: "Active",
    },
    {
      userId: "#5689338",
      name: "Ethan",
      phone: "98765 43210",
      email: "ethan.jones@email.com",
      wallet: "$300",
      membership: "Basic",
      status: "Blocked",
    },
    {
      userId: "#5689336",
      name: "Aarnav",
      phone: "00000 00000",
      email: "sophia.clark@email.com",
      wallet: "$500",
      membership: "Premium",
      status: "Active",
    },
    {
      userId: "#5689340",
      name: "Liam",
      phone: "90000 55555",
      email: "liam.patel@email.com",
      wallet: "$500",
      membership: "Premium",
      status: "Active",
    },
    {
      userId: "#5689339",
      name: "Olivia",
      phone: "98700 11111",
      email: "olivia.ross@email.com",
      wallet: "$700",
      membership: "Premium",
      status: "Active",
    },
    {
      userId: "#5689336",
      name: "Aarnav",
      phone: "00000 00000",
      email: "sophia.clark@email.com",
      wallet: "$500",
      membership: "Premium",
      status: "Active",
    },
    {
      userId: "#5689340",
      name: "Liam",
      phone: "90000 55555",
      email: "liam.patel@email.com",
      wallet: "$500",
      membership: "Premium",
      status: "Active",
    },
  ];

  return (
    <div>
      <Table
        title="User Management"
        add_icon={<Plus size={18} />}
        add_button="Add User"
        columns={userColumns}
        data={userData}
        ViewRoute="/employee/view"
        EditModal={true} 
        AddModal={Add_User} 
        itemsPerPage={9}
      />
    </div>
  );
};

export default User_Management;
