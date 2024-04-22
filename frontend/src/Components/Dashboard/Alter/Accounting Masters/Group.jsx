import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rightbar from '../../Reusable code/Rightbar';
import Escape from '../../Reusable code/Escape';

const AlterGroup = () => {
  Escape();

  const [formData, setFormData] = useState({
    name:'',
    under:'',
    subledger:'',
    balanceForReporting:'',
    calculation:'',
    method:''
  });

  const [showCategorySidebar, setShowCategorySidebar] = useState(false);
  const [showStockSidebar, setShowStockSidebar] = useState(false);
  // const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [groupNames, setGroupNames] = useState([]);
  const [underCategory, setUnderCategory] = useState('');
  
//   const handleCreateGroup = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://[::1]:4000/rac/groups/new', formData);
//       if (response) {
//         console.log('Group created successfully:', response);
//         alert("Group Created Successfuly");
//         //reset the form
//         setFormData({
//           name:'',
//           under:'',
//           subledger:'',
//           balanceForReporting:'',
//           calculation:'',
//           method:''
//         })
//       } else {
//         console.log('Group creation failed:', response);
//       }
//     } catch (error) {
//       console.log('Error:', error.response);
//     }
//   };

  useEffect(()=>{
    //fetching group names from backend
    axios.get('http://[::1]:4000/rac//group/groupname')
    .then(response=>{
      setGroupNames(response.data);
    }).catch(err=>{
      console.log("Error fetching groups", err)
    });

    //FETCHING GROUP UNDER CATEGORIES
    axios.get('http://[::1]:4000/rac/group/groupunder')
    .then(response=>{
      setUnderCategory(response.data);
    }).catch(err=>{
      console.log("Error Fetching under data");
    });
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      [under]:type === 'checkbox' ? checked : value,
    }));
  };

  const handleUnderSidebarItemClick = (item) => {
    setFormData((prevData) => ({
      ...prevData,
      under: item,
    }));
    setShowCategorySidebar(false);
    setShowStockSidebar(false);
  };

  const handleNameSidebarItemClick = (item) => {
    setFormData((prevData) => ({
      ...prevData,
      name: item,
    }));
    setShowStockSidebar(false);
  };


  return (
    <div className="flex justify-center items-center" style={{ backgroundColor: '#ededed', width: '100%' }}>
      <form action='POST'  className="p-16 rounded-lg shadow-lg" style={{ margin: '5rem', paddingLeft: '3rem', paddingRight: '3rem', backgroundColor: 'white', width: '90%' }}>
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
              value={formData.name}
              onChange={handleNameSidebarItemClick}
              onFocus={() => {setShowStockSidebar(true); setShowCategorySidebar(false)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter item name"
              autoComplete='off'
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
              value={formData.under}
              onChange={handleUnderSidebarItemClick}
              onFocus={() => {setShowCategorySidebar(true); setShowStockSidebar(false)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter under category"
              autoComplete='off'
            />
          </div>
          </div>

          <div className='flex'>
         <div className="w-full px-2 mb-4">
            <label htmlFor="subledger" className="block text-sm font-semibold text-gray-600">
            Group behaves like a sub-ledger
            </label>
            <select id="subledger" name="subledger"
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="w-full px-2 mb-4">
            <label htmlFor="balanceForReporting" className="block text-sm font-semibold text-gray-600">
            Debit/Credit balance for reporting
            </label>
            <select id="balanceForReporting" 
            name="balanceForReporting" 
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>
          </div>
         </div>

         <div className='flex'>
         <div className="w-full px-2 mb-4">
            <label htmlFor="calculation" className="block text-sm font-semibold text-gray-600">
            Used for Calculation(for eg: taxes, discount)
            </label>
            <select  id="calculation" name="calculation" 
            value={formData.calculation}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select</option>
              <option value="01">YES</option>
              <option value="02">No</option>
            </select>
          </div>

          <div className="w-full px-2 mb-4">
            <label htmlFor="method" className="block text-sm font-semibold text-gray-600">
            Method to allocate when used in purchase invoice
            </label>
            <input
              type="text"
              id="method"
              name="method"
              value={formData.method}
              onChange={handleInputChange}
              onFocus={() => {setShowCategorySidebar(false); setShowStockSidebar(false)}}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder=""
              autoComplete='off'
            />
          </div>
          </div>

         <div className='flex justify-center '>
         <button 
         className='items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded-md mt-4'>Create</button>
         </div>

      </form>

      {/* Conditionally render the category sidebar */}
      {showCategorySidebar && (
        <Rightbar
          items={underCategory}
          onItemClick={handleUnderSidebarItemClick}
          // selectedItemIndex={selectedItemIndex}
          dataCustom="Group Under"
        />
      )}

      {/* Conditionally render the group name sidebar */}
      {showStockSidebar && (
        <Rightbar
          items={groupNames}
          onItemClick={handleNameSidebarItemClick}
          // selectedItemIndex={selectedItemIndex}
          dataCustom="Group Names"
        />
      )}
    </div>
  );
};

export default AlterGroup;

