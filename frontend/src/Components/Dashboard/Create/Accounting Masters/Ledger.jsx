import React, { useEffect, useState } from 'react';
import Rightbar from '../../Reusable code/Rightbar';
import Escape from '../../Reusable code/Escape';

const Ledger = () => {
  Escape();

    const [formData, setFormData] = useState({
        name: '',
        Under: '',
        MaintainBalancesBillByBill: '',
        CreditPeriodDefault: '',
        CreditPeriodCheck: '',
        CreditLimit: '',
        InventoryValuesAffected: '',
        PercentageOfCalculation: '',
        TCSApplicable: '',
        Address: '',
        State: '',
        Country: '',
        Pincode: '',
        PanNo: '',
        PBDetails: '',
        RegistrationType: '',
        Gstin: '',
        SetGSTDetails: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleMonthChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  // Add your other event handlers here

  return (
    <div className="flex justify-center items-center" style={{ backgroundColor: '#ededed', width: '100%' }}>
      <form className="p-10 rounded-lg shadow-lg" style={{ margin: '5rem', backgroundColor: 'white', width: '90%', maxWidth: '800px' }}>
        <h1 className='text-2xl pb-6 text-center'>Create Ledger</h1>

        
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600-bold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
              autoComplete='off'
            />
          </div>

          <br />

          <label className="block text-sm font-semibold text-gray-600-bold">Description : </label>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="under" className="block text-sm font-semibold text-gray-600">Under</label>
            <input
              type="text"
              id="under"
              name="under"
              value={formData.itemName}
              onChange={handleInputChange}
              onFocus={() => {setShowStockSidebar(false); setShowCategorySidebar(true)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item name"
              autoComplete='off'
            />
          </div></div>

          <br />
          <div className="mb-4">
            <label htmlFor="MaintainBalancesBillByBill" className="block text-sm font-semibold text-gray-600">Maintain Balances Bill-by-Bill</label>
            <select onChange={handleMonthChange} id="MaintainBalancesBillByBill" name="MaintainBalancesBillByBill" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full px-4 mb-4">
            <label htmlFor="CreditPeriodDefault" className="block text-sm font-semibold text-gray-600">Default Credit Period</label>
            <input
              type="text"
              id="CreditPeriodDefault"
              name="CreditPeriodDefault"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Credit Period"
              autoComplete='off'
            />
          </div>

          <div className="w-full px-4 mb-4">
            <label htmlFor="CreditPeriodCheck" className="block text-sm font-semibold text-gray-600">Check for credit days during voucher entry</label>
            <select onChange={handleMonthChange} id="CreditPeriodCheck" name="CreditPeriodCheck" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="CreditLimit" className="block text-sm font-semibold text-gray-600">Specify Credit Limit</label>
            <input
              type="text"
              id="CreditLimit"
              name="CreditLimit"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Credit Limit"
              autoComplete='off'
            />
          </div></div>

          <br />
          <div className="mb-4">
            <label htmlFor="InventoryValuesAffected" className="block text-sm font-semibold text-gray-600">Inventory Values are affected</label>
            <select onChange={handleMonthChange} id="InventoryValuesAffected" name="InventoryValuesAffected" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="PercentageOfCalculation" className="block text-sm font-semibold text-gray-600">Percentage of Calculation</label>
            <input
              type="text"
              id="PercentageOfCalculation"
              name="PercentageOfCalculation"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Percentage of Calculation"
              autoComplete='off'
            />
          </div>
          <br />
          {/* Statutory Details */}
          <label className="block text-sm font-semibold text-gray-600-bold">Statutory Details : </label>
          <hr />
          <div className="mb-4">
            <label htmlFor="TCSApplicable" className="block text-sm font-semibold text-gray-600">TCS Applicable</label>
            <select onChange={handleMonthChange} id="TCSApplicable" name="TCSApplicable" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
            </div><br />
        
          {/* Mailing Details */}
          <label className="block text-sm font-semibold text-gray-600-bold">Mailing Details : </label>
          <hr />
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Name"
              autoComplete='off'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Address" className="block text-sm font-semibold text-gray-600">Address</label>
            <input
              type="text"
              id="Address"
              name="Address"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Address"
              autoComplete='off'
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="State" className="block text-sm font-semibold text-gray-600">State</label>
            <input
              type="text"
              id="State"
              name="State"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter State"
              autoComplete='off'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Country" className="block text-sm font-semibold text-gray-600">Country</label>
            <input
              type="text"
              id="Country"
              name="Country"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Country"
              autoComplete='off'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Pincode" className="block text-sm font-semibold text-gray-600">Pincode</label>
            <input
              type="text"
              id="Pincode"
              name="Pincode"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Pincode"
              autoComplete='off'
            />
          </div>
          </div><br />

          {/* Banking Details */}
          <label className="block text-sm font-semibold text-gray-600-bold">Banking Details : </label>
          <hr />
          <div className="mb-4">
            <label htmlFor="PBDetails" className="block text-sm font-semibold text-gray-600">Provide Bank details</label>
            <select onChange={handleMonthChange} id="PBDetails" name="PBDetails" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div><br />

          {/* Tax Registration Details */}
          <label className="block text-sm font-semibold text-gray-600-bold">Tax Registration Details : </label>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="PanNo" className="block text-sm font-semibold text-gray-600">PAN/IT No.</label>
            <input
              type="text"
              id="PanNo"
              name="PanNo"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter PAN/IT No."
              autoComplete='off'
            />
          </div><hr /></div>

          <div>
          <div className="mb-4">
            <label htmlFor="RegistrationType" className="block text-sm font-semibold text-gray-600">Registration Type</label>
            <select onChange={handleMonthChange} id="RegistrationType" name="RegistrationType" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Unknown</option>
              <option value="01">Composition</option>
              <option value="02">Consumer</option>
              <option value="03">Regular</option>
              <option value="04">Unregistered</option>
            </select>
          </div></div>

          <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full px-4 mb-4">
            <label htmlFor="PanNo" className="block text-sm font-semibold text-gray-600">GSTIN/UIN</label>
            <input
              type="text"
              id="PanNo"
              name="PanNo"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter GSTIN/UIN No."
              autoComplete='off'
            />
          </div>

          <div className="w-full px-4 mb-4">
            <label htmlFor="SetGSTDetails" className="block text-sm font-semibold text-gray-600">Set/Alter GST Details</label>
            <select onChange={handleMonthChange} id="SetGSTDetails" name="SetGSTDetails" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div></div>
        </div>


        {/* Buttons */}
        <div className='flex justify-center '>
         <button className='items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded-md mt-4'>Create</button>
         </div>
      </form>

    </div>
  );

};

export default Ledger
