import { useEffect, useRef, useState } from "react";
import filterIcon from '../../../../public/assets/leads-filter.svg'
import calenderIcon from '../../../../public/assets/leads-calender-icon.svg'
import Image from "next/image";

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
        className="w-10 h-10 cursor-pointer border-[#3A55A6] border rounded-md flex items-center justify-center hover:bg-[#3a55a64f]"
      >
        <Image src={filterIcon} alt="icon" />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute left-0 mt-2 w-72 bg-white  rounded-md z-20 p-4" style={{ boxShadow: ' 0px 4px 12.9px 0px rgba(0, 0, 0, 0.25)' }} >
          <p className="font-urbanist text-[13px] font-[500] text-[#323232] mb-2">Filter Leads by</p>

          {/* Search Box */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1.5 focus:ring-indigo-400  border border-[#4A4A4A] rounded-full w-full focus:outline-none hover:bg-[#e8e8e8] cursor-pointer font-urbanist"
            />
            <i className="fa fa-search absolute left-2.5 top-2.5 text-gray-400 text-sm"></i>
          </div>

          {/* Date Icon */}
          <div className="flex items-center space-x-2 font-urbanist text-[13px] font-[500] text-[#323232] mb-3">
            <Image src={calenderIcon} alt="calender-icon" />
            <span>Date</span>
          </div>

          <p className="font-urbanist text-[13px] font-[500] text-[#323232] mb-2">System Defined Filters</p>

          {/* Checkbox List */}
          <div className="flex flex-col gap-2 text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="hidden peer" />
              <div className="h-4 w-4 rounded border border-gray-400 peer-checked:bg-[#19B68B] peer-checked:after:content-['✓'] peer-checked:after:block peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:font-bold peer-checked:after:leading-4 text-center"></div>
              <span className="font-urbanist text-[12px] font-[500] text-[#4A4A4A]">Touched Records</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="h-4 w-4 rounded border border-gray-400 peer-checked:bg-[#19B68B] peer-checked:after:content-['✓'] peer-checked:after:block peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:font-bold peer-checked:after:leading-4 text-center"></div>
              <span className="font-urbanist text-[12px] font-[500] text-[#4A4A4A]">Untouched Records</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="h-4 w-4 rounded border border-gray-400 peer-checked:bg-[#19B68B] peer-checked:after:content-['✓'] peer-checked:after:block peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:font-bold peer-checked:after:leading-4 text-center"></div>
              <span className="font-urbanist text-[12px] font-[500] text-[#4A4A4A]">Records Action</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="h-4 w-4 rounded border border-gray-400 peer-checked:bg-[#19B68B] peer-checked:after:content-['✓'] peer-checked:after:block peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:font-bold peer-checked:after:leading-4 text-center"></div>
              <span className="font-urbanist text-[12px] font-[500] text-[#4A4A4A]">Related Records Action</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="h-4 w-4 rounded border border-gray-400 peer-checked:bg-[#19B68B] peer-checked:after:content-['✓'] peer-checked:after:block peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:font-bold peer-checked:after:leading-4 text-center"></div>
              <span className="font-urbanist text-[12px] font-[500] text-[#4A4A4A]">Latest Email Status</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="h-4 w-4 rounded border border-gray-400 peer-checked:bg-[#19B68B] peer-checked:after:content-['✓'] peer-checked:after:block peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:font-bold peer-checked:after:leading-4 text-center"></div>
              <span className="font-urbanist text-[12px] font-[500] text-[#4A4A4A]">Activities</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="h-4 w-4 rounded border border-gray-400 peer-checked:bg-[#19B68B] peer-checked:after:content-['✓'] peer-checked:after:block peer-checked:after:text-white peer-checked:after:text-[12px] peer-checked:after:font-bold peer-checked:after:leading-4 text-center"></div>
              <span className="font-urbanist text-[12px] font-[500] text-[#4A4A4A]">Campaign</span>
            </label>

          </div>
        </div>
      )}
    </div>
  );
}
