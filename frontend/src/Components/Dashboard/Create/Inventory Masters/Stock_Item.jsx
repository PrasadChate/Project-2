import React, { useEffect, useState } from 'react';
import Rightbar from '../../Reusable code/Rightbar';
// import axios from 'axios';
// import LastVisitedPage from './LastVisitedPage';
const Stock_Item = () => {

  // State variables
  const [formData, setFormData] = useState({
    partNumber: '',
    itemName: '',
    underCategory: '',
    entryMonth: '',
    entryDate: '',
    productExpiryDate: '',
    numOfProducts: '',
    isTaxApplicable: false,
    tax: '',
    cgst: '',
    sgst: '',
  });

  const [showCategorySidebar, setShowCategorySidebar] = useState(false);
  const [showStockSidebar, setShowStockSidebar] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  useEffect(() => {
    // Effect for handling keyboard events
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
              handleProductSidebarItemClick(selectedItem); // Call appropriate function based on sidebar type
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


  const handlecreateitem = async (event)=>{
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/rac/item/create',formData);
      // Check if the response indicates success
      if (response.data && response.data.success) {
        // User has been successfully created
        console.log('item created successfully:', response.data.user);
      } else {
        // User creation failed
        console.log('Log in failed:', response.data.message);
      }
    } catch (error) {
      // Handle error
      console.log('Error:', error.response.data.message);
    }
  };
  

  const handleInputChange = (e) => {
    // Handler for input changes
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMonthChange = (e) => {
    // Handler for month select change
    const selectedMonth = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      entryMonth: selectedMonth,
    }));
  };

  const handleSidebarItemClick = (item) => {
    // Handler for sidebar item click
    setFormData((prevData) => ({
      ...prevData,
      underCategory: item,
    }));
    console.log(item)
    setShowCategorySidebar(false);
    setShowStockSidebar(false);
  };

  const handleProductSidebarItemClick = (item) => {
    console.log('Selected Item:', item);
    setFormData((prevData) => ({
      ...prevData,
      itemName: item,
    }));
    setShowStockSidebar(false); // Hide the stock sidebar when a product is selected
  };
  
  

  const sidebarItems = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"]; // Sidebar items
  const stockItems = ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6"]; // Stock items

  return (
    <div className="flex justify-center items-center" style={{ backgroundColor: '#ededed', width:'100%' }}>
      <form className="p-10 rounded-lg shadow-lg " style={{ margin: '5rem', paddingLeft: '10rem', paddingRight: '10rem', backgroundColor: 'white', width:'90%' }}>
        <h1 className='flex items-center justify-center text-2xl pb-6'>Create Item</h1>

        <div className="flex flex-col">
         <div className='flex'>
         <div className="w-full px-2 mb-4">
            <label htmlFor="partNumber" className="block text-sm font-semibold text-gray-600">
              Part Number
            </label>
            <input
              type="text"
              id="partNumber"
              name="partNumber"
              value={formData.partNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter part number"
              autoComplete='off'
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}
            />
          </div>

          <div className="w-full px-2 mb-4">
            <label htmlFor="itemName" className="block text-sm font-semibold text-gray-600">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleInputChange}
              onFocus={() => {setShowStockSidebar(true); setShowCategorySidebar(false)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item name"
              autoComplete='off'
            />
          </div>
         </div>

          {/* Include other input fields similarly */}

          {/* Under Category Input */}
          <div className='flex'>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="underCategory" className="block text-sm font-semibold text-gray-600">
              Under Category 
            </label>
            <input
              type="text"
              id="underCategory"
              name="underCategory"
              value={formData.underCategory}
              onChange={handleInputChange}
              onFocus={() => {setShowCategorySidebar(true); setShowStockSidebar(false)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter under category"
              autoComplete='off'

            />
          </div>

          {/* Entry Month Select */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="entryMonth" className="block text-sm font-semibold text-gray-600">
              Entry Month
            </label>
            <select onChange={handleMonthChange} id="entryMonth" name="entryMonth" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          </div>

          {/* Include other input fields similarly */}
          <div className='flex'>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="itemsEntryDate" className="block text-sm font-semibold text-gray-600">
              Product Entry Date
            </label>
            <input
              type="text"
              id="itemsEntryDate"
              name="entryDate"
              value={formData.itemsEntryDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter product entry date"
              autoComplete='off'
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}

            />
          </div>

          {/* Quantity of Item Input */}
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="numOfProducts" className="block text-sm font-semibold text-gray-600">
              Quantity Of Item
            </label>
            <input
              type="text"
              id="numOfProducts"
              name="numOfProducts"
              value={formData.numOfProducts}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter quantity of item"
              autoComplete='off'
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}

            />
          </div>
          </div>

          {/* Tax Applicable Checkbox */}
          <div className="w-full px-2 mb-4">
            <label htmlFor="isTaxApplicable" className="block text-sm font-semibold text-gray-600">
              Tax Applicable
            </label>
            <input
              type="checkbox"
              id="isTaxApplicable"
              name="isTaxApplicable"
              checked={formData.isTaxApplicable}
              onChange={handleInputChange}
              className="mt-1"
              autoComplete='off'
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}

            />
          </div>

          <div className='flex'>
            {/* Tax Input (conditional) */}
          {formData.isTaxApplicable && (
            <div className="w-full px-2 mb-4">
              <label htmlFor="tax" className="block text-sm font-semibold text-gray-600">
                Tax
              </label>
              <input
                type="text"
                id="tax"
                name="tax"
                value={formData.tax}
                onChange={handleInputChange}
                className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter tax"
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}

              />
            </div>
          )}

          {/* CGST Input (conditional) */}
          {formData.isTaxApplicable && (
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="cgst" className="block text-sm font-semibold text-gray-600">
                CGST
              </label>
              <input
                type="text"
                id="cgst"
                name="cgst"
                value={formData.cgst}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter CGST"
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}

              />
            </div>
          )}

          {/* SGST Input (conditional) */}
          {formData.isTaxApplicable && (
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="sgst" className="block text-sm font-semibold text-gray-600">
                SGST
              </label>
              <input
                type="text"
                id="sgst"
                name="sgst"
                value={formData.sgst}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter SGST"
              onFocus={()=>{setShowCategorySidebar(false);setShowStockSidebar(false)}}

              />
            </div>
          )}
          </div>
        </div>

        <div className="w-full px-2 mb-4">
            <label htmlFor="isShelfLife" className="block text-sm font-semibold text-gray-600">
               Is Shelf Life
            </label>
            <input
              type="checkbox"
              id="isShelfLife"
              name="isShelfLife"
              checked={formData.isShelfLife}
              onChange={handleInputChange}
              className="mt-1"
              autoComplete='off'
            />
          </div>

          {formData.isShelfLife && (
            <div className="w-full px-2 mb-4">
              <label htmlFor="tax" className="block text-sm font-semibold text-gray-600">
                Product Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                name="productExpiryDate"
                value={formData.expiry}
                onChange={handleInputChange}
                className="w-50 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Expiry Date"
              />
            </div>
          )}

        <button
          type="submit"
          className="p-3 border rounded"
          onClick={handlecreateitem}
        >
          Submit
        </button>
      </form>

      {/* Conditionally render the category sidebar */}

      {/* Conditionally render the stock sidebar */}
      {showStockSidebar && (
        <Rightbar
          items={stockItems}
          onItemClick={handleProductSidebarItemClick}
          selectedItemIndex={selectedItemIndex}
          dataCustom="List of Products"
        />
      )}
      {showCategorySidebar && (
        <Rightbar
          items={sidebarItems}
          onItemClick={handleSidebarItemClick}
          selectedItemIndex={selectedItemIndex}
          dataCustom="List of Categories"
        />
      )}

      
    </div>
  );
};

export default Stock_Item;