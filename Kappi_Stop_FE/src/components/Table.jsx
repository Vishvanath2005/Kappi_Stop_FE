import React, { useState, useMemo } from "react";
import { TbFileExport } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";
import { HiArrowsUpDown } from "react-icons/hi2";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Pencil } from "lucide-react";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Table = ({
  title,
  add_icon,
  add_button,
  columns = [],
  data = [],
  showActions = true,
  ViewRoute = "",
  EditModal = null,
  AddModal=null ,
  itemsPerPage = 9,
}) => {
  const navigate = useNavigate();

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key] ?? "";
      const bValue = b[sortConfig.key] ?? "";
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const displayText = `Showing results for ${Math.min(
    indexOfLastItem,
    data.length
  )} out of ${data.length}`;

  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    if (endPage - startPage + 1 < maxPagesToShow)
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    return pages;
  };

  return (
    <>
      {/* Header */}
      <div className="flex sm:justify-between space-y-2 sm:items-center mb-4 flex-col sm:flex-row">
        <div className="text-layout-text">
          <p className="font-roboto-flex text-sm">{title}</p>
          <p className="text-2xl font-semibold font-roboto-flex">{title}</p>
        </div>

        <div className="flex items-center space-x-2">
          {AddModal &&  (
            <Button
              button_icon={add_icon}
              button_name={add_button}
              bgColor="bg-layout-text"
              textColor="text-white"
              paddingX="px-4"
              onClick={() => setShowAdd(true)}
            />
          )}
          <Button
            button_icon={<TbFileExport size={22} />}
            button_name="Export"
            bgColor="bg-white"
            textColor="text-layout-text"
            paddingX="px-4"
          />
          <Button
            button_icon={<BiFilterAlt size={22} />}
            button_name="Filter"
            bgColor="bg-white"
            textColor="text-dark-brown"
            paddingX="px-4"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto no-scrollbar h-130">
        <table className="w-full whitespace-nowrap border-collapse">
          <thead>
            <tr className="font-semibold text-sm bg-white border-b-4 border-background h-14 drop-shadow-sm">
              <th className="p-3.5 rounded-l-lg">S.no</th>
              {columns.map((col, index) => {
                const isLast = index === columns.length - 1;
                const addRightRadius = isLast && !showActions;
                return (
                  <th
                    key={col.key}
                    className={`p-3.5 cursor-pointer ${addRightRadius ? "rounded-r-lg" : ""}`}
                    onClick={() => handleSort(col.key)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {col.label}
                      <HiArrowsUpDown
                        size={18}
                        className={`transition-transform ${
                          sortConfig.key === col.key && sortConfig.direction === "asc"
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                  </th>
                );
              })}
              {showActions && <th className="pr-2 text-center rounded-r-lg">Action</th>}
            </tr>
          </thead>

          <tbody className="text-grey bg-white text-sm font-light drop-shadow-sm">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="border-b-[3px] border-background text-center">
                  <td className="p-3.5 rounded-l-lg">{indexOfFirstItem + index + 1}</td>
                  {columns.map((col, colIndex) => {
                    const value = item[col.key] ?? "-";
                    const isStatus = col.key.toLowerCase() === "status";
                    return (
                      <td key={colIndex} className="p-3.5">
                        {isStatus ? (
                          <span
                            className={
                              value === "Active" || value === "Available" || value === "Completed"
                                ? "text-green-600 font-bold"
                                : "text-red-600 font-bold"
                            }
                          >
                            {value}
                          </span>
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                  {showActions && (
                    <td className="p-2 rounded-r-lg">
                      <div className="flex items-center justify-center gap-2">
                        {EditModal && (
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setShowEdit(true);
                            }}
                            className="cursor-pointer bg-[#C9E0FF] p-1.5 rounded"
                          >
                            <Pencil size={14} className="text-blue-500" />
                          </button>
                        )}
                        {ViewRoute && (
                          <button
                            onClick={() => navigate(ViewRoute, { state: { item } })}
                            className="cursor-pointer bg-[#BAFFBA] p-1.5 rounded"
                          >
                            <LuEye size={14} className="text-green-700" />
                          </button>
                        )}
                        <button className="cursor-pointer bg-red-100 p-1.5 rounded">
                          <RiDeleteBinLine size={16} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 2} className="text-center py-6">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center h-1/12 px-3 whitespace-nowrap overflow-auto no-scrollbar mt-3">
        <div className="text-sm font-normal text-black">
          <p>{displayText}</p>
        </div>
        <div className="flex items-center justify-center gap-4 pr-3">
          <button
            className={`${currentPage === 1 ? "text-darkest-blue opacity-70 cursor-not-allowed" : "text-darkest-blue"}`}
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
          >
            <GoArrowLeft />
          </button>
          <button
            className={`${currentPage === 1 ? "text-darkest-blue opacity-70 cursor-not-allowed" : "text-darkest-blue"}`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex items-center gap-3 text-grey">
            {generatePageNumbers().map((page, index) => (
              <button
                key={index}
                className={`px-2.5 py-1 text-sm rounded-md ${currentPage === page ? "bg-layout-text font-medium text-white" : "text-layout-text"}`}
                onClick={() => paginate(page)}
              >
                {page}
              </button>
            ))}
            {totalPages > 5 && <span>...</span>}
          </div>
          <button
            className={`${currentPage === totalPages ? "text-grey opacity-70 cursor-not-allowed" : "text-black"}`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            className={`${currentPage === totalPages ? "text-black opacity-70 cursor-not-allowed" : "text-black"}`}
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>

      {/* Modals */}
      {EditModal && showEdit && (
        <EditModal onClose={() => setShowEdit(false)} item={selectedItem} />
      )}
      {AddModal && showAdd && <AddModal onClose={() => setShowAdd(false)} />}
    </>
  );
};

export default Table;
