'use client'
import { useState, useEffect, useRef } from 'react';

const LeadDropdown = () => {
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
      <div className="flex gap-1">
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <i className="fas fa-plus"></i>
          Lead
        </button>
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md"
          onClick={toggleDropdown}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-sm border">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <i className="fas fa-file-import w-4"></i> Import Data
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <i className="fas fa-file-export w-4"></i> Export Data
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <i className="fas fa-undo w-4"></i> Restore Data
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <i className="fas fa-broom w-4"></i> Data Cleanup
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadDropdown;
