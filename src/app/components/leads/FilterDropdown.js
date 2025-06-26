import { useEffect, useRef, useState } from "react";

export default function FilterDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Filter Icon Button */}
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100"
      >
        <i className="fa fa-filter text-indigo-600"></i>
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute left-0 mt-2 w-72 bg-white border shadow-xl rounded-md z-20 p-4">
          <p className="font-semibold text-sm text-gray-700 mb-2">Filter Leads by</p>

          {/* Search Box */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 pr-3 py-1.5 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <i className="fa fa-search absolute left-2.5 top-2.5 text-gray-400 text-sm"></i>
          </div>

          {/* Date Icon */}
          <div className="flex items-center space-x-2 text-gray-600 text-sm mb-3">
            <i className="fa fa-calendar text-base"></i>
            <span>Date</span>
          </div>

          <p className="text-xs font-semibold text-gray-500 mb-2">System Defined Filters</p>

          {/* Checkbox List */}
          <div className="flex flex-col gap-2 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-indigo-600" defaultChecked />
              <span>Touched Records</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Untouched Records</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Records Action</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Related Records Action</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Latest Email Status</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Activities</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Campaign</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
