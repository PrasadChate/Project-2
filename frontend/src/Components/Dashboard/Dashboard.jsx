//Minakshi COde
import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Dashboard = () => {
  const [selectedOptions, setSelectedOptions] = useState(0)

  const handleOptionSelect = (index) => {
    setSelectedOptions(index);
  };

  const sideBaroptions = ["Master" ,"Transactions","Utilities","Reports"]

  return (
    <div className='mt-[55px] -ml-4 flex'>
      <div className='bg-[#e3e5f5] mt-6 rounded-lg w-1/6 h-[80vh]'>
        <Sidebar options={sideBaroptions} onSelect={handleOptionSelect}/>
      </div>
      <div className='w-5/6 ml-4 mt-6 h-[80vh] bg-[#b6bfff] rounded-lg'>
        <Content selectedOption={selectedOptions}/>
      </div>
    </div>
  )
}

export default Dashboard
