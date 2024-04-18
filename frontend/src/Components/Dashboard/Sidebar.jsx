import React from "react";
import { useState } from "react";

const Sidebar =({options, onSelect})=>{
    
    const defaultStyle = "py-6 cursor-pointer text-center text-l font-bold"
    const activeStyle = "py-6 cursor-pointer text-center text-l font-bold bg-white text-blue-700"
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick=(index)=>{
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