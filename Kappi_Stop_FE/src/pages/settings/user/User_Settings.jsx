import React from "react";
import Table from "../../../components/Table";
import { Plus } from "lucide-react";
import Add_User_Settings from "./Add_User_Settings";

const User_Settings = () => {
  const usersettingColumns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Roles" },
    { key: "phone", label: "Phone Number" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
    { key: "created_by", label: "Created By" },
  ];

  const usersettingData = [
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
    {
      name: "John",
      role: "Admin",
      phone: "95684 79534",
      email: "ahgdkaj@gmail.com",
      status: "Active",
      created_by: "Super Admin",
    },
  ];

  return (
    <>
      <Table
        setting_title="User"
        add_button="Add User"
        add_icon={<Plus size={18} />}
        columns={usersettingColumns}
        data={usersettingData}
        AddModal={Add_User_Settings}
      />
    </>
  );
};

export default User_Settings;
