'use client'
import { useState, useEffect, useRef } from "react";

export default function ActionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Actions Button */}
      <button
        onClick={toggleDropdown}
        className={`
    border border-[#3A55A6] px-4 py-1.5 rounded-md flex items-center gap-2 font-urbanist text-[14px] font-[500]
    ${isOpen ? "bg-[#3A55A6] text-[#fff]" : "bg-#fff text-[#3A55A6] hover:bg-[#3A55A6] hover:text-[#fff]"}
  `}
      >
        Actions
        <i className="fas fa-chevron-down text-xs"></i>
      </button>


      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-40 bg-white rounded-md " style={{ boxShadow: ' 0px 4px 12.9px 0px rgba(0, 0, 0, 0.25)' }}>
          <div className="py-1 text-gray-800">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-urbanist text-[12px] font-[500] text-[#3D3D3D]">Mass Delete</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-urbanist text-[12px] font-[500] text-[#3D3D3D]">Mass Update</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-urbanist text-[12px] font-[500] text-[#3D3D3D]">Mass Email</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-urbanist text-[12px] font-[500] text-[#3D3D3D]">Print View</div>
          </div>
        </div>
      )}
    </div>
  );
}
