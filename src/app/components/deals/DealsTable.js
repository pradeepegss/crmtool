'use client'

import { useEffect, useRef, useState } from "react";
import TypeDropdown from "../ui/TypeDropdown";
import ActionsDropdown from "../leads/ActionsDropdown";
import InboxTableArea from "../leads/InboxTableArea";
import ArchiveTableArea from "../leads/ArchiveTableArea";
import FilterDropdown from "./FilterDropdown";
import TableSwitcher from "./TableSwitcher";
import { Tooltip } from "react-tooltip";


export default function DealsTable() {
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
                <div className="flex justify-start gap-5" >
                    <FilterDropdown />
                    <TableSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TypeDropdown type={'Deal'} />
                </div>

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
                <div className="flex align-middle gap-4">
                    <span className="font-urbanist text-[12px] font-[500] text-[#3A55A6]" >10 Deals</span>
                    <span
                        data-tooltip-id="tooltip-info"
                        data-tooltip-content="10 Deals"
                        className="border rounded-4xl border-[#3A55A6] hover:bg-[#3A55A6] text-[#3A55A6] hover:text-[#fff]  h-[15px] w-[15px] flex align-middle text-center justify-center m-auto"
                    ><i class="fa-solid fa-info block text-[10px] font-[900] "></i></span>
                    <Tooltip id="tooltip-info" place="top" style={{ backgroundColor: "#3A55A6",padding:'2px 15.317px',fontSize:"12px" }} className='font-urbanist  font-[600] text-[#3A55A6]' />
                </div>
            </div>

            {/* Filter Icon & Dropdown */}

            {
                activeTab === 'inbox' ?
                    <InboxTableArea />
                    : <ArchiveTableArea />
            }



        </div>
    );
}
