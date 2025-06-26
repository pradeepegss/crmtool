'use client';
import { useState } from 'react';
import ContactIcon from '../../../../public/assets/contact-icon.svg'
import ProductIcon from '../../../../public/assets/product-icon.svg'
import ForecastsIcon from '../../../../public/assets/forecasts-icon.svg'
import ProjectsIcon from '../../../../public/assets/projects-icon.svg'
import CalendarIcon from '../../../../public/assets/contact-icon.svg'
import AutomationIcon from '../../../../public/assets/automation-icon.svg'
import TeamspaceIcon from '../../../../public/assets/team-space-icon.svg'
import Image from 'next/image';

const menuItems = [
  { label: 'Contacts', path: ContactIcon},
  { label: 'Products', path: ProductIcon },
  { label: 'Forecasts', path: ForecastsIcon },
  { label: 'Projects', path: ProjectsIcon },
  { label: 'Calendar', path: CalendarIcon },
  { label: 'Automation', path: AutomationIcon },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-[91vh]  p-2 flex flex-col justify-between transition-all duration-300 ${
        collapsed ? 'w-30' : 'w-70'
      }`}
    >
      {/* Menu Items */}
      <ul className="space-y-2">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-[#3A55A6] font-[700] text-[17px] text-sm hover:bg-[#3a55a614] cursor-pointer transition"
          >
            <Image src={item.path} alt={item.label} />
            {!collapsed && <span className='font-ibm '  >{item.label}</span>}
          </li>
        ))}
      </ul>

      {/* Bottom Toggle + Team Space */}
      <div className="flex items-center justify-between px-2 py-3">
        <div className="flex items-center border  border-[#3954A5] px-2 py-2 gap-2 rounded-md hover:bg-[#3a55a614] cursor-pointer "  height={'30px'}>
          <Image src={TeamspaceIcon}  alt='team-card' height={'10px'} width={'10px'} />
          {!collapsed && <span className="text-sm text-[#3A55A6] font-[700] text-[17px] ">Team Space</span>}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-6 h-6 rounded-full bg-white border border-[#ccc] flex items-center justify-center hover:bg-gray-200 transition"
        >
          <i
            className={`fa-solid ${
              collapsed ? 'fa-chevron-right' : 'fa-chevron-left'
            } text-xs text-[#3A55A6] font-[700] text-[14px]`}
          ></i>
        </button>
      </div>
    </aside>
  );
}
