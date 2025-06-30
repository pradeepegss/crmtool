'use client'

import { useState } from "react";
import archiveIcon from '../../../../public/assets/leads-archive.svg'
import mailIcon from '../../../../public/assets/leads-mail.svg'
import Image from "next/image";

export default function TableSwitcher({ activeTab, setActiveTab }) {
    return (
        <div className="flex items-center text-sm rounded-md overflow-hidden border border-[#3A55A6]">
            {/* Inbox Tab */}
            <button
                onClick={() => setActiveTab("inbox")}
                className={`flex items-center transition-all px-2 py-1.5 cursor-pointer ${activeTab === "inbox"
                    ? "bg-white text-indigo-700 border-r border-[#3A55A6]"
                    : "bg-transparent text-indigo-500"
                    }`}
            >
                <Image src={mailIcon} alt="icon" className="mr-1" />
                {activeTab === "inbox" && (
                    <span className="ml-1 font-urbanist text-[14px] font-[500] text-[#3954A5]">Leads Inbox</span>
                )}
            </button>

            {/* Archive Tab */}
            <button
                onClick={() => setActiveTab("archive")}
                className={`flex items-center transition-all px-2 py-1.5 cursor-pointer ${activeTab === "archive"
                    ? "bg-white text-indigo-700 border-l border-[#3A55A6]"
                    : "bg-transparent text-indigo-500"
                    }`}
            >
                {activeTab === "archive" && (
                    <span className="mr-1 font-urbanist text-[14px] font-[500] text-[#3954A5]">Archive Leads</span>
                )}
                <Image src={archiveIcon} alt="icon" />
            </button>
        </div>
    );
}
