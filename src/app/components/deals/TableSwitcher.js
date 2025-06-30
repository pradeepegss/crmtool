'use client'

import { Tooltip } from 'react-tooltip'; // ✅ use named import
import archiveIcon from '../../../../public/assets/leads-archive.svg'
import mailIcon from '../../../../public/assets/leads-mail.svg'
import listIcon from '../../../../public/assets/deals-list.svg'
import Image from "next/image";

export default function TableSwitcher({ activeTab, setActiveTab }) {
    return (
        <div className="flex items-center text-sm rounded-md overflow-hidden border border-[#3A55A6]">
            
            <button
                data-tooltip-id="tooltip-inbox"
                data-tooltip-content="Inbox"
                type="button"
                onClick={() => setActiveTab("inbox")}
                className={`flex items-center transition-all px-2 py-2 cursor-pointer border-r border-[#3A55A6] ${activeTab === 'inbox' ? 'bg-[#3a55a633]' : 'bg-white'}`}
            >
                <Image src={mailIcon} alt="Inbox" className="mr-1" />
            </button>
            <Tooltip id="tooltip-inbox" place="bottom" style={{ backgroundColor: "#3A55A6",padding:'2px 15.317px',fontSize:"12px" }} className='py-1 font-urbanist text-[12px] font-[600] text-[#fff]' />

            <button
                data-tooltip-id="tooltip-pipeline"
                data-tooltip-content="Pipeline"
                type="button"
                onClick={() => setActiveTab("pipeline")}
                className={`flex items-center transition-all px-2 py-2 cursor-pointer border-r border-[#3A55A6] ${activeTab === 'pipeline' ? 'bg-[#3a55a633]' : 'bg-white'}`}
            >
                <Image src={listIcon} alt="Pipeline" className="mr-1" />
            </button>
            <Tooltip id="tooltip-pipeline" place="bottom" style={{ backgroundColor: "#3A55A6",padding:'2px 15.317px',fontSize:"12px" }} className='py-1 font-urbanist text-[12px] font-[600] text-[#fff]' />

            <button
                data-tooltip-id="tooltip-archive"
                data-tooltip-content="Archive"
                type="button"
                onClick={() => setActiveTab("archive")}
                className={`flex items-center transition-all px-2 py-2 cursor-pointer ${activeTab === 'archive' ? 'bg-[#3a55a633]' : 'bg-white'}`}
            >
                <Image src={archiveIcon} alt="Archive" className="mr-1" />
            </button>
            <Tooltip id="tooltip-archive" place="bottom" style={{ backgroundColor: "#3A55A6",padding:'2px 15.317px',fontSize:"12px" }} className='py-1 font-urbanist text-[12px] font-[600] text-[#fff]' />
        </div>
    );
}
