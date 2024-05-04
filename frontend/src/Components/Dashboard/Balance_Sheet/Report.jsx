import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

const Report = () => {
  const [allItems, setAllItems] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const dropdownRef = useRef(null);

  const getAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:4000/rac/product/all");
      setAllItems(response.data.allProductDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false); // Assuming setOpen was defined somewhere else
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleMonthChange = async (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
    // Fetch reports based on selected month
    try {
      const response = await axios.get(
        `http://localhost:4000/rac/product/reports?month=${selectedMonth}`
      );
      setAllItems(response.data.reports);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const exportToCSV = () => {
    const filteredData = allItems.filter(
      (item) => selectedMonth === "" || item.entryMonth === selectedMonth
    );

    if (filteredData.length === 0) {
      console.error("No data to export.");
      return;
    }

    // Define the columns to export
    const columnsToExport = [
      "partNumber",
      "itemName",
      "underCategory",
      "entryMonth",
      "entryDate",
      "numOfProducts",
      "productExpiryDate",
    ];

    // Generate CSV content with headers and data for selected columns
    const csvContent = `${columnsToExport.join(",")}\n${filteredData
      .map((item) => columnsToExport.map((column) => item[column]).join(","))
      .join("\n")}`;

    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "monthly_report.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-cente">
      <h2 className="text-3xl font-bold mb-4">Monthly Reports</h2>
      <div>
        <label htmlFor="monthSelect" className="mr-2">
          Select Month:{" "}
        </label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="px-4 py-2 border rounded-md mb-2"
        >
          <option value="">Select</option>
          <option value="01">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="05">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      {allItems && allItems.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Part Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entry Month
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entry Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiry Date
              </th>
              {/* Add more table headers if needed */}
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, index) => {
              if (selectedMonth === "" || item.entryMonth === selectedMonth) {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4">{item.partNumber}</td>
                    <td className="px-6 py-4">{item.itemName}</td>
                    <td className="px-6 py-4">{item.underCategory}</td>
                    <td className="px-6 py-4">{item.entryMonth}</td>
                    <td className="px-6 py-4">{item.entryDate}</td>
                    <td className="px-6 py-4">{item.numOfProducts}</td>
                    <td className="px-6 py-4">{item.productExpiryDate}</td>
                    {/* Add more table cells for other item properties */}
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}

      <button
        onClick={exportToCSV}
        className="px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Export to CSV
      </button>
    </div>
  );
};

export default Report;
