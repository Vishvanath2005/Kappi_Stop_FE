import React from "react";
import Table from "../../components/Table";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import Edit_Store from "./Edit_Store";
import Add_Store from "./Add_Store";

const Store_Management = () => {
  const storeColumns = [
    { key: "store_id", label: "Store ID" },
    { key: "store_name", label: "Store Name" },
    { key: "city", label: "City" },
    { key: "address", label: "Address" },
    { key: "contact_number", label: "Contact Number" },
    { key: "opening_hours", label: "Opening Hours" },
    { key: "status", label: "Status" },
  ];

  const storeData = [
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Inactive",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
    {
      store_id: "#5689336",
      store_name: "Main Street Market",
      city: "Springfield",
      address: "123 Main St",
      contact_number: "555-1234",
      opening_hours: "9 AM - 9 PM",
      status: "Active",
    },
  ];

  return (
    <>
      <Table
        title="Store Management"
        add_icon={<HiOutlineBuildingStorefront size={18} />}
        add_button="Add Store"
        columns={storeColumns}
        data={storeData}
        ViewRoute="/store/view_store"
        EditModal={Edit_Store}
        AddModal={Add_Store}
        itemsPerPage={9}
      />
    </>
  );
};

export default Store_Management;
