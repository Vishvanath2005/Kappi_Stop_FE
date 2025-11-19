import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { RiDashboardFill } from "react-icons/ri";
import Edit_Product from "./Edit_Product";
import Add_Product from "./Add_Product";
import axios from "axios";
import { API, formatDate1 } from "../../Host";

const Menu_Management = () => {
  const [menuData, setMenuData] = useState([]);

  const menuColumns = [
    { key: "productId", label: "Product ID" },
    { key: "product_name", label: "Product Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "add_ons", label: "Add-ons Available" },
    { key: "last_updated", label: "Last Updated" },
    { key: "status", label: "Status" },
  ];

  const fetchMenu = async () => {
    try {
      const response = await axios.get(`${API}/menu/getallmenu`);
      const transformedData = response.data.data.map((item) => ({
        productId: item.productId,
        product_name: item.product_name,
        category: item.category,
        price: item.price,
        add_ons: item.add_ons,
        last_updated: formatDate1(item.last_updated),
        status: item.status,
      }));

      setMenuData(transformedData.reverse());
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);
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
      />
    </>
  );
};

export default Menu_Management;
