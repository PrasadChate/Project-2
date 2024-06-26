
  import React from 'react'
  import { useState } from 'react'
  import Sidebar from '../../Sidebar'
  import { useNavigate } from 'react-router-dom'

  const AccountingMastersOptions = () =>{
      const [selectedOptions, setSelectedOptions] = useState(0)
      const handleOptionSelect = (index) => {
          setSelectedOptions(index);
          console.log(location)
      };

      const navigate = useNavigate();
      const handleClick = (selectedOption, option)=>{
        if(selectedOption== 0 && option=="Group"){
          navigate("/admin/dashboard/create/accountingmaster/creategroup")
        }
        if(selectedOption== 0 && option=="Ledger"){
          navigate("/admin/dashboard/create/accountingmaster/createledger")
        }
        if(selectedOption== 0 && option=="Voucher Type"){
          navigate("/admin/dashboard/create/accountingmaster/createvoucher")
        }
      };

    const cardStyle = "bg-white mt-6 py-4 w-[200px] text-center rounded-md font-bold cursor-pointer hover:shadow-lg transform hover:scale-105 text-blue-700 mx-6"
    const sideBaroptions = ["Master" ,"Transactions","Utilities","Reports"]
      return <div className='mt-[55px] -ml-4 flex'>
      <div className='bg-[#e3e5f5] mt-6 rounded-lg w-1/6 h-[80vh]'>
        <Sidebar options={sideBaroptions} onSelect={handleOptionSelect}/>
      </div>
      <div className='w-5/6 ml-4 mt-6 h-[80vh] bg-[#b6bfff] rounded-lg'>
          <div className='mx-4'>
              <div className="flex flex-wrap">
                  <div className={cardStyle} onClick={()=>{handleClick(selectedOptions,"Group")}}>Group</div>
                  <div className={cardStyle} onClick={()=>{handleClick(selectedOptions,"Ledger")}}>Ledger</div>
                  <div className={cardStyle} onClick={()=>{handleClick(selectedOptions,"Cost Center")}}>Cost Center</div>
                  <div className={cardStyle} onClick={()=>{handleClick(selectedOptions,"Currency")}}>Currency</div>
                  <div className={cardStyle} onClick={()=>{handleClick(selectedOptions,"Voucher Type")}}>Voucher Type</div>
              </div>
          </div>
        
      </div>
    </div>
  }

  export default AccountingMastersOptions
