import React from 'react'
import { useState } from 'react'
import Sidebar from '../../Sidebar'
import Escape from '../../Reusable code/Escape'

const Unit = () =>{
    const [formData, setFormData] = useState({
        name: '',
        symbol: '',
        type: '', // changed from Abbreviation to abbreviation
        unitquantitycode: '',
        decimal: '',
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
    const [selectedOptions, setSelectedOptions] = useState(0)
    const handleOptionSelect = (index) => {
        setSelectedOptions(index);
        console.log(location)
    };
  const cardStyle = "bg-white mt-6 py-4 w-[200px] text-center rounded-md font-bold cursor-pointer hover:shadow-lg transform hover:scale-105 text-blue-700 mx-6"
  const sideBaroptions = ["Master" ,"Transactions","Utilities","Reports"]
    return <div className='mt-[55px] -ml-4 flex'>
    <div className='bg-[#e3e5f5] mt-6 rounded-lg w-1/6 h-[80vh]'>
      <Sidebar options={sideBaroptions} onSelect={handleOptionSelect}/>
    </div>
    <div className='w-5/6 ml-4 mt-6 h-[80vh] bg-[#b6bfff] rounded-lg'>
        
    <div className="flex justify-center items-center rounded-lg" style={{ backgroundColor: '#b6bfff', width: '100%' }}>
      <form className="mt-5 pt-8 pb-2 px-14 rounded-lg shadow-lg" style={{ backgroundColor: 'white', width: '90%', maxWidth: '800px' }}>
        <h1 className='text-2xl pb-6 text-center'>Create Unit</h1>

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label htmlFor="vtype" className="block text-sm font-semibold text-gray-600">Enter Symbol of Unit</label>
            <input
              type="text"
              id="symbol"
              name="symbol"
              value={formData.vtype}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Symbol type"
              autoComplete='off'
            />
          </div>
          {/* Add other form fields here */}
          <div className="mb-4">
            <label htmlFor="abbreviation" className="block text-sm font-semibold text-gray-600">Enter Type of Unit</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter type"
              autoComplete='off'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="abbreviation" className="block text-sm font-semibold text-gray-600">Enter Unit Quantity Code</label>
            <input
              type="text"
              id="unitquantitycode"
              name="unitquantitycode"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter UQC"
              autoComplete='off'
            />
          </div>

          <div className="mb-4">
            <label htmlFor="abbreviation" className="block text-sm font-semibold text-gray-600">Enter Number of Decimal Places</label>
            <input
              type="text"
              id="decimal"
              name="decimal"
              value={formData.abbreviation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter decimals"
              autoComplete='off'
            />
          </div>

        </div>

        {/* Buttons */}
        <div className='flex justify-center '>
         <button className='items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded-md my  -2'>Create</button>
         </div>
      </form>
    </div>
    </div>
  </div>
}

export default Unit
