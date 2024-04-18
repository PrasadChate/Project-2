import React, { useEffect, useState } from 'react';
import Rightbar from '../../Reusable code/Rightbar';
import Escape from '../../Reusable code/Escape';

const Voucher_type = () => {
  Escape();
    const [formData, setFormData] = useState({
        name: '',
        vtype: '',
        abbreviation: '', // changed from Abbreviation to abbreviation
        avtype: '',
        mvtype: '',
        ueffect: '',
        zeroValue: '', // changed from zerov to zeroValue
        moptional: '', // changed from ovtype to moptional
        barcoding: '', // changed from Bprint to barcoding
        anarrow: '', // changed from pnarrow to anarrow
        panarrow: '',
        dsignature: '',
        pvoucher: '' // added new field
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
        <h1 className='text-2xl pb-6 text-center'>Create Voucher</h1>

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
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
          <div className="mb-4">
            <label htmlFor="vtype" className="block text-sm font-semibold text-gray-600">Select Type of Voucher</label>
            <input
              type="text"
              id="vtype"
              name="vtype"
              value={formData.vtype}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Voucher type"
              autoComplete='off'
            />
          </div>
          {/* Add other form fields here */}
          <div className="mb-4">
            <label htmlFor="abbreviation" className="block text-sm font-semibold text-gray-600">Abbreviation</label>
            <input
              type="text"
              id="abbreviation"
              name="abbreviation"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter abbreviation type"
              autoComplete='off'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avtype" className="block text-sm font-semibold text-gray-600">Activate this voucher type</label>
            <select onChange={handleMonthChange} id="avtype" name="avtype" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="mvtype" className="block text-sm font-semibold text-gray-600">Method of voucher numbering</label>
            <select onChange={handleMonthChange} id="mvtype" name="mvtype" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Methods of Numbering</option>
              <option value="01">Automatic</option>
              <option value="02">Automatic(Manual Override)</option>
              <option value="03">Manual</option>
              <option value="04">Multi-user Auto</option>
              <option value="05">None</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="ueffect" className="block text-sm font-semibold text-gray-600">Use effective dates for voucher</label>
            <select onChange={handleMonthChange} id="ueffect" name="ueffect" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="zero-value" className="block text-sm font-semibold text-gray-600">Allow Zero-valued transactions</label>
            <select onChange={handleMonthChange} id="zero-value" name="zero-value" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="moptional" className="block text-sm font-semibold text-gray-600">Make this voucher type as "Optional" by default</label>
            <select onChange={handleMonthChange} id="moptional" name="moptional" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="barcoding" className="block text-sm font-semibold text-gray-600">Barcode Printing</label>
            <select onChange={handleMonthChange} id="barcoding" name="barcoding" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="anarrow" className="block text-sm font-semibold text-gray-600">Allow narration in voucher</label>
            <select onChange={handleMonthChange} id="anarrow" name="anarrow" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="panarrow" className="block text-sm font-semibold text-gray-600">Provide narrations for each ledger in voucher</label>
            <select onChange={handleMonthChange} id="panarrow" name="panarrow" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dsignature" className="block text-sm font-semibold text-gray-600">Use Digital Signature while Printing </label>
            <select onChange={handleMonthChange} id="dsignature" name="dsignature" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="pvoucher" className="block text-sm font-semibold text-gray-600">Print Voucher after saving  </label>
            <select onChange={handleMonthChange} id="pvoucher" name="pvoucher" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>




        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-7 py-2 text-sm font-medium uppercase text-white bg-primary rounded-md shadow-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Conditionally render the category sidebar */}
      {/* Conditionally render the stock sidebar */}
    </div>
  );
};

export default Voucher_type;