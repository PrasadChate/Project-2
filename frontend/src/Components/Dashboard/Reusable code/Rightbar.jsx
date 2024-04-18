// Sidebar.js

import React from 'react';

const Rightbar = ({ items, onItemClick, selectedItemIndex, dataCustom }) => {
  return (
    <div className="bg-white top-0 rounded" style={{ width: '20rem',height:'100vh', marginTop: '0rem', padding:'3rem' }}>
        <input type="text" placeholder='Search Categories' className='border rounded p-2 mb-6' />
      <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{dataCustom}</h3>
      <div className='flex flex-col'>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => onItemClick(item)} className={`cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md ${selectedItemIndex === index ? 'border border-blue-500' : ''}`}>{item}</li>
          ))}
        </ul>
          <button className='justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded-md mt-4'>Create</button>
      </div>
    </div>
  );
};

export default Rightbar;