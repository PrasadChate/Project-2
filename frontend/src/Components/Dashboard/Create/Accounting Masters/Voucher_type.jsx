import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios here
import Rightbar from "../../Reusable code/Rightbar";
import Escape from "../../Reusable code/Escape";

const Voucher_type_new = () => {
  Escape();
  const [formData, setFormData] = useState({
    name: "",
    vtype: "",
    abbreviation: "",
    avtype: "",
    mvtype: "",
    ueffect: "",
    zeroValue: "",
    moptional: "",
    barcoding: "",
    anarrow: "",
    panarrow: "",
    dsignature: "",
    pvoucher: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // const booleanVal = value==="01" ? true : false;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBoolValue = (e) => {
    const { name, value } = e.target;
    const boolValue = value.toUpperCase() === "YES"; // Convert 'YES' to true, everything else to false

    setFormData((prevData) => ({
      ...prevData,
      [name]: boolValue,
    }));
  };

  const handleCreateVoucher = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://[::1]:4000/rac/vouchers/new",
        formData
      );
      if (response) {
        console.log("Voucher created successfully:", response);
        alert("Voucher Created Successfuly");
        //reset the form
        setFormData({
          name: "",
          vtype: "",
          abbreviation: "",
          avtype: "",
          mvtype: "",
          ueffect: "",
          zeroValue: "",
          moptional: "",
          barcoding: "",
          anarrow: "",
          panarrow: "",
          dsignature: "",
          pvoucher: "",
        });
      } else {
        console.log("Voucher creation failed:", response);
      }
    } catch (error) {
      console.log("Error:", error.response);
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ backgroundColor: "#ededed", width: "100%" }}
    >
      <form
        action="POST"
        onSubmit={handleCreateVoucher}
        className="p-16 rounded-lg shadow-lg"
        style={{
          margin: "5rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          backgroundColor: "white",
          width: "90%",
        }}
      >
        <h1 className="flex items-center justify-center text-2xl pb-6">
          Create Voucher
        </h1>

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="vtype"
              className="block text-sm font-semibold text-gray-600"
            >
              Select Type of Voucher
            </label>
            <input
              type="text"
              id="vtype"
              name="vtype"
              value={formData.vtype}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Voucher type"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="abbreviation"
              className="block text-sm font-semibold text-gray-600"
            >
              Abbreviation
            </label>
            <input
              type="text"
              id="abbreviation"
              name="abbreviation"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter abbreviation type"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="avtype"
              className="block text-sm font-semibold text-gray-600"
            >
              Activate this voucher type
            </label>
            <select
              onChange={handleBoolValue}
              id="avtype"
              name="avtype"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="mvtype"
              className="block text-sm font-semibold text-gray-600"
            >
              Method of voucher numbering
            </label>
            <select
              onChange={handleBoolValue}
              id="mvtype"
              name="mvtype"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Methods of Numbering</option>
              <option value="01">Automatic</option>
              <option value="02">Automatic(Manual Override)</option>
              <option value="03">Manual</option>
              <option value="04">Multi-user Auto</option>
              <option value="05">None</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="ueffect"
              className="block text-sm font-semibold text-gray-600"
            >
              Use effective dates for voucher
            </label>
            <select
              onChange={handleBoolValue}
              id="ueffect"
              name="ueffect"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="zero-value"
              className="block text-sm font-semibold text-gray-600"
            >
              Allow Zero-valued transactions
            </label>
            <select
              onChange={handleBoolValue}
              id="zero-value"
              name="zero-value"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="moptional"
              className="block text-sm font-semibold text-gray-600"
            >
              Make this voucher type as "Optional" by default
            </label>
            <select
              onChange={handleBoolValue}
              id="moptional"
              name="moptional"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="barcoding"
              className="block text-sm font-semibold text-gray-600"
            >
              Barcode Printing
            </label>
            <select
              onChange={handleBoolValue}
              id="barcoding"
              name="barcoding"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="anarrow"
              className="block text-sm font-semibold text-gray-600"
            >
              Allow narration in voucher
            </label>
            <select
              onChange={handleBoolValue}
              id="anarrow"
              name="anarrow"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="panarrow"
              className="block text-sm font-semibold text-gray-600"
            >
              Provide narrations for each ledger in voucher
            </label>
            <select
              onChange={handleBoolValue}
              id="panarrow"
              name="panarrow"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dsignature"
              className="block text-sm font-semibold text-gray-600"
            >
              Use Digital Signature while Printing{" "}
            </label>
            <select
              onChange={handleBoolValue}
              id="dsignature"
              name="dsignature"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="pvoucher"
              className="block text-sm font-semibold text-gray-600"
            >
              Print Voucher after saving{" "}
            </label>
            <select
              onChange={handleBoolValue}
              id="pvoucher"
              name="pvoucher"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center ">
          <button
            onClick={handleCreateVoucher}
            className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded-md mt-4"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Voucher_type;
