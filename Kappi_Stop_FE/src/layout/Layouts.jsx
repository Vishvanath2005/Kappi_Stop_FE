import React from "react";
import Navbar from "./Navbar";
import { NavLink, Outlet, useLocation } from "react-router";
import { RiDashboardLine, RiUserAddLine } from "react-icons/ri";
import { TbBuildingStore, TbReportAnalytics } from "react-icons/tb";
import { FaRegRectangleList } from "react-icons/fa6";
import { Plus, Settings, Triangle, Wallet } from "lucide-react";
import { FaStackOverflow } from "react-icons/fa";
import { GrGroup, GrRestaurant } from "react-icons/gr";
import { File, Clipboard, DollarSign } from "lucide-react";

const Layouts = () => {
  const location = useLocation();

  const Menus = [
    {
      title: "Dashboard",
      icon: <RiDashboardLine size={27} />,
      to: "/dashboard",
    },
    {
      title: "User Management",
      icon: (
        <div className="relative w-6 h-6">
          <File className="absolute w-6 h-6" />
          <Plus className="absolute left-1.5 top-2 w-3 h-3" />
        </div>
      ),
      to: "/user_management",
    },
    {
      title: "Store Management",
      icon: <TbBuildingStore size={27} />,
      to: "/storemanagement",
    },
    {
      title: "Menu Management",
      icon: <FaRegRectangleList size={27} />,
      to: "/menumanagement",
    },
    {
      title: "Orders & Kitchen",
      icon: <GrRestaurant size={27} />,
      to: "/ordersandkitchen",
    },
    {
      title: "Wallet & Rewards",
      icon: <Wallet size={27} />,
      to: "/walletandrewards",
    },
    {
      title: "Offers Management",
      icon: (
        <div className="relative w-6 h-6">
          <Clipboard className="absolute" />
          <DollarSign className="absolute left-1 top-2 w-3 h-3" />
        </div>
      ),
      to: "/offersmanagement",
    },
    {
      title: "Nearby Attractions",
      icon: <FaStackOverflow size={27} />,
      to: "/nearbyattractions",
    },
    {
      title: "Reports",
      icon: <TbReportAnalytics size={27} />,
      to: "/report",
    },
    {
      title: "Settings",
      icon: <Settings size={27} />,
      to: "/settings/user",
      nested: [
        {
          title: "User",
          icon: <RiUserAddLine size={23} />,
          to: "/settings/user",
        },
        {
          title: "Roles",
          icon: <GrGroup size={23} />,
          to: "/settings/roles",
        },
      ],
    },
  ];

  const isMenuActive = (menu) => {
    if (location.pathname.startsWith(menu.to)) return true;
    if (menu.nested) {
      return menu.nested.some((item) => location.pathname.startsWith(item.to));
    }
    return false;
  };

  const shouldShowNestedSidebar = (menu) => {
    if (!menu.nested) return false;
    return (
      location.pathname.startsWith(menu.to) && location.pathname !== menu.to
    );
  };

  return (
    <div className="font-roboto-flex w-full fixed h-screen">
      <Navbar />

      <div className="flex bg-background h-11/12">
        <div className="px-7 pb-10 bg-background overflow-auto no-scrollbar drop-shadow-md">
          <ul>
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink to={menu.to}>
                  <li
                    className={`w-[92px] h-20 text-sm font-light flex flex-col justify-center items-center text-center my-5 rounded-xl ${
                      isMenuActive(menu)
                        ? "text-white bg-layout-text"
                        : "text-layout-text border-layout-text border"
                    }`}
                  >
                    <span>{menu.icon}</span>
                    <p>{menu.title}</p>
                  </li>
                </NavLink>
              </React.Fragment>
            ))}
          </ul>

          {Menus.map(
            (menu, index) =>
              shouldShowNestedSidebar(menu) && (
                <div
                  key={index}
                  className="w-fit h-20 text-sm my-4 rounded-lg bg-white overflow-auto no-scrollbar shadow-lg"
                >
                  <ul>
                    {menu.nested.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <NavLink to={item.to}>
                          <div
                            className={`flex items-center gap-2 cursor-pointer ${
                              location.pathname.startsWith(item.to)
                                ? "bg-background text-layout-text border-r-5"
                                : "text-dark-brown"
                            }`}
                          >
                            <span>{item.icon}</span>
                            <p>{item.title}</p>
                          </div>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

        <div className="w-full p-5 bg-background overflow-auto no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layouts;
