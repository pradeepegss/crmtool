'use client'

import { useEffect, useRef, useState } from "react";
import ActionsDropdown from "./ActionsDropdown";
import FilterDropdown from "./FilterDropdown";
import TableSwitcher from "./TableSwitcher";
import InboxTableArea from "./InboxTableArea";
import ArchiveTableArea from "./ArchiveTableArea";
import TypeDropdown from "../ui/TypeDropdown";

export default function LeadsTable() {
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [activeTab, setActiveTab] = useState("inbox");
    const searchRef = useRef(null);
    const filterRef = useRef(null);

    // Hide dropdowns on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchDropdown(false);
            }
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowFilterDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-white shadow rounded-t-xl" >
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200  relative">
                {/* Home / Leads Title */}
                <h1 className="text-[#7289CC] font-[600] text-[22px] font-urbanist">Home / Leads</h1>

                {/* Search + Plus */}
                <div className="flex items-center space-x-2" ref={searchRef}>
                    {/* Search Box */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Lead Record"
                            onClick={() => setShowSearchDropdown(true)}
                            className="pl-12 pr-4 py-3 border border-[#4A4A4A] rounded-full w-120 focus:outline-none hover:bg-[#e8e8e8] cursor-pointer font-urbanist"
                        />
                        <i className="fa fa-search absolute left-5 top-4.5 text-gray-500"></i>

                        {/* Search Dropdown */}
                        {showSearchDropdown && (
                            <div className="absolute top-full mt-0 w-full bg-[#fff] search-dropdown rounded-md z-10">
                                <div className="px-4 py-2 text-[14px] text-[#4A4A4A] font-urbanist">
                                    Recently viewed
                                </div>
                                <div className="px-4 py-2 text-[12px] text-[#2A2A2A] font-urbanist hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                                    <i className="fa fa-bullseye text-black"></i>
                                    <span>Foxton Lead</span>
                                </div>
                                <div className="px-4 py-2 text-[12px] text-[#2A2A2A] font-urbanist hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                                    <i className="fa fa-circle text-indigo-500 text-xs"></i>
                                    <span>Goodtext Lead</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Plus Button */}
                    <button className="w-12 h-12 border rounded-full flex items-center justify-center border-[#4A4A4A] cursor-pointer hover:bg-[#e8e8e8] font-urbanist">
                        <i className="fa fa-plus text-sm"></i>
                    </button>
                </div>
                <div></div>
            </div>

            {/* Filter Icon & Dropdown */}
            <div className="flex justify-between px-4 py-3 gap-5" ref={filterRef}>
                <div className="flex justify-start gap-5" >
                <FilterDropdown />
                <TableSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
                <TypeDropdown type={'Lead'} />
                </div>
                <div className="flex justify-start gap-5" >
                <ActionsDropdown />
                <ActionsDropdown />
                </div>
            </div>
            {
                activeTab==='inbox'?
              <InboxTableArea/>
              :<ArchiveTableArea/>
            }

           

        </div>
    );
}
