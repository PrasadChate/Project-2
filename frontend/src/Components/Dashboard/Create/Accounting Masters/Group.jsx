import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Rightbar from '../../Reusable code/Rightbar';
import Escape from '../../Reusable code/Escape';

const Group = () => {
  Escape();

  const [formData, setFormData] = useState({
    // partNumber: '',
    // itemName: '',
    // underCategory: '',
    // entryMonth: '',
    // entryDate: '',
    // productExpiryDate: '',
    // numOfProducts: '',
    // isTaxApplicable: false,
    // tax: '',
    // cgst: '',
    // sgst: '',
    // isShelfLife: false, // Added isShelfLife to formData
  });

  const [showCategorySidebar, setShowCategorySidebar] = useState(false);
  const [showStockSidebar, setShowStockSidebar] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showCategorySidebar || showStockSidebar) {
        const sidebarItemsArray = showCategorySidebar ? sidebarItems : stockItems;
        if (e.key === 'ArrowDown') {
          const newIndex = Math.min(selectedItemIndex + 1, sidebarItemsArray.length - 1);
          setSelectedItemIndex(newIndex);
        } else if (e.key === 'ArrowUp') {
          const newIndex = Math.max(selectedItemIndex - 1, 0);
          setSelectedItemIndex(newIndex);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (selectedItemIndex >= 0) {
            const selectedItem = sidebarItemsArray[selectedItemIndex];
            if (showCategorySidebar) {
              handleSidebarItemClick(selectedItem);
            } else {
              handleProductSidebarItemClick(selectedItem);
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCategorySidebar, showStockSidebar, selectedItemIndex]);

  const handlecreateitem = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/rac/item/create', formData);
      if (response.data && response.data.success) {
        console.log('Item created successfully:', response.data.user);
      } else {
        console.log('Item creation failed:', response.data.message);
      }
    } catch (error) {
      console.log('Error:', error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      entryMonth: selectedMonth,
    }));
  };

  const handleSidebarItemClick = (item) => {
    setFormData((prevData) => ({
      ...prevData,
      underCategory: item,
    }));
    setShowCategorySidebar(false);
    setShowStockSidebar(false);
  };

  const handleProductSidebarItemClick = (item) => {
    setFormData((prevData) => ({
      ...prevData,
      itemName: item,
    }));
    setShowStockSidebar(false);
  };

  const sidebarItems = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
  const stockItems = ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6"];

  return (
    <div className="flex justify-center items-center" style={{ backgroundColor: '#ededed', width: '100%' }}>
      <form className="p-16 rounded-lg shadow-lg" style={{ margin: '5rem', paddingLeft: '3rem', paddingRight: '3rem', backgroundColor: 'white', width: '90%' }}>
        <h1 className='flex items-center justify-center text-2xl pb-6'>Group Creation</h1>

        {/* Input fields here */}

        <div className="flex flex-col ">
         <div className='flex'>
         <div className="w-full px-2 mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
              Name (alias)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter part number"
              autoComplete='off'
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}
            />
          </div>

          <div className="w-full px-2 mb-4">
            <label htmlFor="under" className="block text-sm font-semibold text-gray-600">
              Under
            </label>
            <input
              type="text"
              id="under"
              name="under"
              value={formData.itemName}
              onChange={handleInputChange}
              onFocus={() => {setShowStockSidebar(true); setShowCategorySidebar(false)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item name"
              autoComplete='off'
            />
          </div>
          </div>

          <div className='flex'>
         <div className="w-full px-2 mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Group behaves like a sub-ledger
            </label>
            <select onChange={handleMonthChange} id="ueffect" name="ueffect" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="w-full px-2 mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Debit/Credit balance for reporting
            </label>
            <select onChange={handleMonthChange} id="ueffect" name="ueffect" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          </div>
         </div>

         <div className='flex'>
         <div className="w-full px-2 mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Used for Calculation(for eg: taxes, discount)
            </label>
            <select onChange={handleMonthChange} id="ueffect" name="ueffect" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="w-full px-2 mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Method to allocate when used in purchase invoice
            </label>
            <input
              type="text"
              id="method"
              name="method"
              value={formData.itemName}
              onChange={handleInputChange}
              onFocus={() => {setShowStockSidebar(true); setShowCategorySidebar(false)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item name"
              autoComplete='off'
            />
          </div>
          </div>

         <div className='flex justify-center '>
         <button className='items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded-md mt-4'>Create</button>
         </div>

      </form>

      {/* Conditionally render the category sidebar */}
      {showCategorySidebar && (
        <Rightbar
          items={sidebarItems}
          onItemClick={handleSidebarItemClick}
          selectedItemIndex={selectedItemIndex}
          dataCustom="List of Categories"
        />
      )}

      {/* Conditionally render the stock sidebar */}
      {showStockSidebar && (
        <Rightbar
          items={stockItems}
          onItemClick={handleProductSidebarItemClick}
          selectedItemIndex={selectedItemIndex}
          dataCustom="List of Products"
        />
      )}
    </div>
  );
};

export default Group;

