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
        className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2 text-sm"
      >
        Actions
        <i className="fas fa-chevron-down text-xs"></i>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-40 bg-white rounded-md shadow-lg border text-sm">
          <div className="py-1 text-gray-800">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mass Delete</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mass Update</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mass Email</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Print View</div>
          </div>
        </div>
      )}
    </div>
  );
}
