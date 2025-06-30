'use client';
import { useState } from "react";
import DashboardIcon from '../../../../public/assets/dashboard-icon.svg'
import LeadsIcon from '../../../../public/assets/leads-icon.svg'
import DealsIcon from '../../../../public/assets/deals-icon.svg'
import TasksIcon from '../../../../public/assets/tasks-icon.svg'
import CommunicationIcon from '../../../../public/assets/communication-icon.svg'
import SalesIcon from '../../../../public/assets/sales-icon.svg'
import ZonelogogoIcon from '../../../../public/assets/zone-logo.gif'
import Image from "next/image";




const tabs = [
  { name: "Dashboard", loaction:"/dashboard",path: DashboardIcon ,},
  { name: "Leads", loaction:"/leads",path: LeadsIcon },
  { name: "Deals", loaction:"/deals",path: DealsIcon },
  { name: "Tasks", loaction:"#",path: TasksIcon },
  { name: "Communication", loaction:"#",path: CommunicationIcon },
  { name: "Sales", loaction:"#",path: SalesIcon },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Leads");
  const [showSearch, setShowSearch] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab((prev) => (prev === tabName ? "" : tabName));
  };

  return (
    <nav className=" shadow-sm py-2 px-6 flex justify-between items-center w-full">
      {/* Left Logo */}
      <div className="font-bold text-[#3a55a6] flex items-center gap-1" >
        <Image src={ZonelogogoIcon} alt="logo" width={'30px'} height={'30px'} style={{width:"40px"}} />
        <div>
        <p className="font-[700] text-[22px] p-0 m-0 text-center" >CRM</p>
        <p className="text-[20px] p-0 m-0 text-center">Tool</p>
        </div>
      </div>

      {/* Center Tabs */}
      <div className="flex nav-center-custom-gradient-box px-3 py-2 space-x-2 transition-all duration-300">
        {tabs.map((tab) => (
          <a
          href={tab.loaction}
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 cursor-pointer hover:bg-[#3A55A614] font-ibm ${
              activeTab === tab.name
                ? "bg-[#3A55A614] text-[#3A55A6] font-[700] text-[14px] scale-105"
                : "text-[#3a55a6] hover:text-[#3A55A6]"
            }`}
          >
             <Image src={tab.path} alt={tab.name} />
            <span className={`${activeTab === tab.name?'block':'hidden'}`}>{tab.name}</span>
          </a>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 relative ">
        {/* Search Input */}
        <div
          className={`absolute right-12 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out mr-7 ${
            showSearch
              ? "w-64 opacity-100 translate-x-0"
              : "w-0 opacity-0 translate-x-10"
          }`}
        >
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full h-10 px-4 pr-10 rounded-full border border-gray-300 outline-none transition-all duration-300"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={() => setShowSearch((prev) => !prev)}
          className="text-blue-600 z-10 mr-5 cursor-pointer"
        >
          <i className="fas fa-search"></i>
        </button>

        {/* Bell Icon */}
        <button className="text-blue-600 mr-5 cursor-pointer">
          <i className="fas fa-bell"></i>
        </button>

        {/* Profile */}
        <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-indigo-600 text-white rounded-full flex items-center justify-center font-semibold">
          S
        </div>
      </div>
    </nav>
  );
}
