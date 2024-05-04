import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import axios from "axios";
import { BookOpenIcon } from "@heroicons/react/solid";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [allItems, setAllItems] = useState([]);
  const [itemFound, setItemFound] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);
  const bellRef = useRef(null);

  const getAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:4000/rac/product/all");
      setAllItems(response.data.allProductDetails);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const newNotifications = allItems.reduce((acc, item) => {
      if (item.numOfProducts < item.minquantity) {
        acc.push({
          type: "lowQuantity",
          item,
          message: `LOW: Quantity for item ${item.partNumber} is low.`,
        });
      }
      if (item.numOfProducts > item.maxquantity) {
        acc.push({
          type: "exceededQuantity",
          item,
          message: `EXCEEDED: Quantity for item ${item.partNumber} is exceeded.`,
        });
      }
      return acc;
    }, []);

    setNotifications(newNotifications);
    setShowNotifications(newNotifications.length > 0);
  }, [allItems]);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearch = () => {
    const foundItem = allItems.find(
      (item) => item.partNumber.toLowerCase() === searchQuery.toLowerCase()
    );

    if (foundItem) {
      setItemFound(true);
      setSearchResult(foundItem);
    } else {
      setItemFound(false);
      setSearchResult("not Found");
    }
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BookOpenIcon className="w-7 h-7 text-blue-600" />
          <span>RAC</span>
        </div>
        <div onClick={handleToggleMenu} className="md:hidden cursor-pointer">
          {openMenu ? (
            <XIcon className="w-7 h-7 text-gray-700" />
          ) : (
            <MenuIcon className="w-7 h-7 text-gray-700" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 ${
            openMenu ? "block" : "hidden"
          } md:relative bg-white md:bg-transparent md:top-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-md p-2 pl-8 focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={handleSearch}
                className="absolute top-2 left-2 w-6 h-5 text-gray-500"
              >
                <FaSearch />
              </button>
            </div>
          </li>
          <li
            className="md:ml-8 md:my-0 my-7 font-semibold relative"
            ref={bellRef}
          >
            <div
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <FaBell style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-semibold px-2 rounded-full">
                  {notifications.length}
                </span>
              )}
            </div>
          </li>
          <li
            ref={dropdownRef}
            className="md:ml-8 md:my-0 my-7 font-semibold relative"
          >
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="btn text-black font-semibold px-3 py-1 rounded duration-500"
            >
              <FaUser
                className="hover:cursor-pointer"
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <ul
              style={{ width: "20rem" }}
              className={`absolute right-0 mt-2 w-60 bg-white rounded-md overflow-hidden shadow-lg z-10 ${
                openMenu ? "" : "hidden"
              }`}
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h1
                      className=""
                      style={{
                        fontSize: "1.3rem",
                        marginLeft: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                      Name
                    </h1>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  <h1 className="" style={{ fontSize: "1.3rem" }}>
                    Profile
                  </h1>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  <h1 className="" style={{ fontSize: "1.3rem" }}>
                    Change Password
                  </h1>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  <h1 className="" style={{ fontSize: "1.3rem" }}>
                    Logout
                  </h1>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {showNotifications && (
        <div className="absolute right-0 top-full mt-1 mr-4 w-72">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className={`px-4 py-2 border-b ${
                notification.type === "lowQuantity"
                  ? "bg-red-100"
                  : "bg-green-100"
              }`}
            >
              <p>
                <span className="font-bold">
                  {notification.item.partNumber}
                </span>{" "}
                {notification.type === "lowQuantity" ? (
                  <span className="text-red-500 font-semibold uppercase">
                    LOW
                  </span>
                ) : (
                  <span className="text-green-500 font-semibold uppercase">
                    EXCEEDED
                  </span>
                )}
                : {notification.message}
              </p>
            </div>
          ))}
        </div>
      )}
      {searchResult !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p
              className={`${
                itemFound ? "text-green-400" : "text-red-500"
              } font-bold text-2xl`}
            >
              {itemFound ? "Item Found!" : "Item Not Found"}
            </p>
            {itemFound ? (
              <div>
                <div className="mt-4">
                  <div className="border-b-2 border-gray-200 pb-4">
                    <h2 className="text-xl font-semibold">Product Details</h2>
                    <p className="mt-2">
                      <span className="font-semibold">Part Number:</span>{" "}
                      {searchResult.partNumber}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Item Name:</span>{" "}
                      <span className="font-bold">{searchResult.itemName}</span>
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Under Category:</span>{" "}
                      {searchResult.underCategory}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Entry Month:</span>{" "}
                      {searchResult.entryMonth}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Entry Date:</span>{" "}
                      {new Date(searchResult.entryDate).toLocaleDateString()}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Number of Products:</span>{" "}
                      {searchResult.numOfProducts}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Minimum Quantity:</span>{" "}
                      {searchResult.minquantity}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Maximum Quantity:</span>{" "}
                      {searchResult.maxquantity}
                    </p>
                    <p className="mt-2 font-bold text-xl">
                      <span className="font-semibold">Location:</span>{" "}
                      {searchResult.location}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Tax Applicable:</span>{" "}
                      {searchResult.isTaxApplicable ? "Yes" : "No"}
                    </p>
                    {searchResult.isTaxApplicable && (
                      <div>
                        <p className="mt-2">
                          <span className="font-semibold">Tax:</span>{" "}
                          {searchResult.tax}%
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">CGST:</span>{" "}
                          {searchResult.cgst}%
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">SGST:</span>{" "}
                          {searchResult.sgst}%
                        </p>
                      </div>
                    )}
                    <p className="mt-2">
                      <span className="font-semibold">Shelf Life:</span>{" "}
                      {searchResult.isShelfLife ? "Yes" : "No"}
                    </p>
                    {searchResult.isShelfLife && (
                      <p className="mt-2">
                        <span className="font-semibold">
                          Product Expiry Date:
                        </span>{" "}
                        {new Date(
                          searchResult.productExpiryDate
                        ).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSearchResult(null)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchResult(null)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
