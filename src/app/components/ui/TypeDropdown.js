'use client'
import { useState, useEffect, useRef } from 'react';
import importIcon from '../../../../public/assets/leads-import.svg'
import exportIcon from '../../../../public/assets/leads-export.svg'
import restoreIcon from '../../../../public/assets/leads-restore.svg'
import cleanupIcon from '../../../../public/assets/leads-cleanup.svg'
import Image from 'next/image';

const TypeDropdown = ({ type }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Lead Button */}
      <div className="flex">
        <button className="bg-teal-500  text-white px-4 font-urbanist text-[15px] font-[500]  py-2 rounded-l-md flex items-center gap-2 cursor-pointer border-r"  >
          <i className="fas fa-plus"></i>
          {type}
        </button>
        <button
          className="bg-teal-500  text-white px-3 py-2 rounded-r-md cursor-pointer flex items-center"
          onClick={toggleDropdown}
        >
          <i className="fa-solid fa-sort-down pb-1"></i>
        </button>
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute z-10 mt-2 w-48 left-22 bg-white rounded-md py-2 " style={{ boxShadow: ' 0px 4px 12.9px 0px rgba(0, 0, 0, 0.25)' }} >
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 font-urbanist text-[13px] font-[500] text-[#4A4A4A]">
            <Image src={importIcon} alt="icon" /> Import Data
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 font-urbanist text-[13px] font-[500] text-[#4A4A4A]">
            <Image src={exportIcon} alt="icon" /> Export Data
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 font-urbanist text-[13px] font-[500] text-[#4A4A4A]">
            <Image src={restoreIcon} alt="icon" /> Restore Data
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 font-urbanist text-[13px] font-[500] text-[#4A4A4A]">
            <Image src={cleanupIcon} alt="icon" />  Data Cleanup
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeDropdown;
