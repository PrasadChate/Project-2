import React, { useState, useEffect, useRef } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const dropdownRef = useRef(null);

    const staticData = [
        { id: 1, name: 'Profile' },
        { id: 2, name: 'Change Password' },
        { id: 3, name: 'Logout' },
    ];

    const tempData = [
        'hhhhhh',
        "ssss"
    ]

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleSearch = () => {
        const foundItem = tempData.find(item => item.name.toLowerCase() === searchQuery.toLowerCase());
        console.log("Item serched");
        setSearchResult(foundItem ? 'found' : 'not found');
    };

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <BookOpenIcon className='w-7 h-7 text-blue-600' />
                    <span>RAC</span>
                </div>
                {/* Menu icon */}
                <div onClick={handleToggle} className='md:hidden cursor-pointer'>
                    {open ? <XMarkIcon className="w-7 h-7 text-gray-700" /> : <Bars3BottomRightIcon className="w-7 h-7 text-gray-700" />}
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 ${open ? 'block' : 'hidden'} md:relative bg-white md:bg-transparent md:top-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Search'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='border border-gray-300 rounded-md p-2 pl-8 focus:outline-none focus:border-blue-400'
                            />
                            <button onClick={handleSearch} className='absolute top-2 left-2 w-6 h-5 text-gray-500'>
                                {/* Use SearchIcon here */}
                            </button>
                        </div>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <FaBell style={{fontSize:'1.5rem'}} />
                    </li>
                    <li ref={dropdownRef} className='md:ml-8 md:my-0 my-7 font-semibold relative'>
                        <div onClick={() => setOpen(!open)} className='btn text-black font-semibold px-3 py-1 rounded duration-500'>
                            <FaUser className='hover:cursor-pointer' style={{fontSize:"1.5rem"}} />
                        </div>
                        {/* Dropdown menu */}
                        <ul style={{width:'20rem'}} className={`absolute right-0 mt-2 w-60 bg-white rounded-md overflow-hidden shadow-lg z-10 ${open ? '' : 'hidden'}`}>
                        
                        <li>
    <a href='#' className='block px-4 py-3 text-gray-700 hover:bg-gray-100'>
        <div className='flex items-center'> {/* Added items-center class */}
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <h1 className='' style={{fontSize:'1.3rem', marginLeft: '1rem', marginTop:'1rem'}}> {/* Added marginLeft style */}
                Name
            </h1>
        </div>
    </a>
</li>
 
                            <li><a href='#' className='block px-4 py-3 text-gray-700 hover:bg-gray-100'><h1 className='' style={{fontSize:'1.3rem'}}>Profile</h1></a></li>
                            <li><a href='#' className='block px-4 py-3 text-gray-700 hover:bg-gray-100'><h1 className='' style={{fontSize:'1.3rem'}}>Change Password</h1></a></li>
                            <li><a href='#' className='block px-4 py-3 text-gray-700 hover:bg-gray-100'><h1 className='' style={{fontSize:'1.3rem'}}>Logout</h1></a></li>
                        </ul>
                    </li>
                </ul>

                {/* Dialog box for search result */}
                {searchResult && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-md">
                            <p>{searchResult === 'found' ? 'Item Found!' : 'Item Not Found'}</p>
                            {searchResult === 'found' ? (
                                <button onClick={() => setSearchResult(null)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                                    Add
                                </button>
                            ) : (
                                <button onClick={() => setSearchResult(null)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
                                    Create
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;