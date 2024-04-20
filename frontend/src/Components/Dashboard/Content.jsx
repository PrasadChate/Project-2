import React from "react";
import { useNavigate } from "react-router-dom";


const Content =({selectedOption}) =>{
    const cardStyle = "bg-white mt-6 py-4 w-[200px] text-center rounded-md font-bold cursor-pointer hover:shadow-lg transform hover:scale-105 text-blue-700 mx-6"
    const handleClick = (selectedOption,option) =>{
        if(selectedOption==0 && option=="Create"){
            navigate("/admin/dashboard/create")
        }
        if(selectedOption==0 && option=="Alter"){
            navigate("/admin/dashboard/alter")
        }
    }
    const navigate = useNavigate()
    return <div className=" mx-4">
        {/* Masters */}
        {selectedOption === 0 && <div className="flex">
            <div className={cardStyle} onClick={()=>{handleClick(selectedOption,"Create")}}>Create</div>
            <div className={cardStyle} onClick={()=>{handleClick(selectedOption,"Alter")}}>Alter</div>
            <div className={cardStyle} onClick={()=>{handleClick(selectedOption,"Chart of Accounts")}}>Chart of Accounts</div>
            </div>}
        {/* Transactions */}
        {selectedOption === 1 && <div className="flex flex-wrap">
            <div className={cardStyle}>Vouchers</div>
            <div className={cardStyle}>Day Book</div>
            <div className={cardStyle}>TATA ASN Reports</div>
            <div className={cardStyle}>Inventory Module MIS Reports</div>
            <div className={cardStyle}>Material Intertransfer Reports</div>
            </div>}

        {/* Utilities */}
        {selectedOption === 2 && <div className="flex flex-wrap">
            <div className={cardStyle}>Banking</div>
            </div>}

        {/* Reports */}
        {selectedOption === 3 && <div className="flex flex-wrap">
            <div className={cardStyle}>Balance Sheet</div>
            <div className={cardStyle}>Profit & Loss A/c</div>
            <div className={cardStyle}>Stock Summary</div>
            <div className={cardStyle}>Ratio Analysis</div>
            <div className={cardStyle}>Display More Reports</div>
            <div className={cardStyle}>Production Process</div>
            <div className={cardStyle}>Quit</div>
            <div className={cardStyle}>Import Physical Stock</div>
            </div>}
        
    </div>
}

export default Content;