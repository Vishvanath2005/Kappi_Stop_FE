import React from 'react'
import Table from '../../components/Table'
import { RiDashboardFill } from 'react-icons/ri'
import Edit_Product from './Edit_Product';
import Add_Product from './Add_Product';

const Menu_Management = () => {
     const menuColumns = [
    { key: "product_id", label: "Product ID" },
    { key: "product_name", label: "Product Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "add_ons", label: "Add-ons Available" },
    { key: "last_updated", label: "Last Updated" },
    { key: "status", label: "Status" },
  ];

  const menuData = [
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Unavailable",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
    {
      product_id: "#12345",
      product_name: "Coffee",
      category: "Coffee",
      price: "$9.99",
      add_ons: "Extra Sugar",
      last_updated: "27.08.2025",
      status: "Available",
    },
  ];
  return (
    <>
     <Table
        title="Menu Management"
        add_icon={<RiDashboardFill size={18} />}
        add_button="Add Product"
        columns={menuColumns}
        data={menuData}
        ViewRoute="/menu/view_product"
        EditModal={Edit_Product}
        AddModal={Add_Product}
        itemsPerPage={9}
      /></>
  )
}

export default Menu_Management