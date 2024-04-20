import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar =({options, onSelect})=>{
    
    const defaultStyle = "py-6 cursor-pointer text-center text-l font-bold"
    const activeStyle = "py-6 cursor-pointer text-center text-l font-bold bg-white text-blue-700"
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate =  useNavigate()
    const location = useLocation();
    const handleClick=(index)=>{
      if(location.pathname !="/admin/dashboard"){
        console.log(location.pathname)
        navigate("/admin/dashboard")
      }  
        onSelect(index)
        setActiveIndex(index)
        
    }
    return <div className="mt-6">
        {options.map((option, index) => (
        <div key={index} onClick={() => handleClick(index)} className={index === activeIndex ? activeStyle : defaultStyle}>
          {option}
        </div>
      ))}
    </div>
}

export default Sidebar