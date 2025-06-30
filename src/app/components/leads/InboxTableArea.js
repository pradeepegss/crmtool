
'use client'
import { useState } from 'react';

const leads = [
  {
    id: 1,
    activity: 'Call to discuss service',
    name: 'Amanda Blake',
    company: 'BluePeak Systems',
    email: 'mike@bluepeak.com',
    phone: '1 555-1010',
    forecast: 'Medium',
    source: 'Website Inquiry',
    created: '2025-06-01',
    owner: 'John D.'
  },
  {
    id: 2,
    activity: 'Schedule product demo',
    name: 'Mike Thompson',
    company: 'EcoDrive Motors',
    email: 'natalie@ecodrive.com',
    phone: '1 555-2022',
    forecast: 'High',
    source: 'Cold Call',
    created: '2025-06-02',
    owner: 'Emily R.'
  },
  {
    id: 3,
    activity: 'Follow-up after proposal',
    name: 'Natalie Rhodes',
    company: 'BrightPath Digital',
    email: 'justin@brightpath.io',
    phone: '1 555-3033',
    forecast: 'High',
    source: 'Referral',
    created: '2025-06-03',
    owner: 'Kevin T.'
  },
  {
    id: 4,
    activity: 'Email case studies',
    name: 'Justin Lee',
    company: 'BuildSphere Ltd.',
    email: 'erica@buildsphere.com',
    phone: '1 555-4044',
    forecast: 'Low',
    source: 'LinkedIn',
    created: '2025-06-04',
    owner: 'Sarah M.'
  },
  {
    id: 5,
    activity: 'Confirm decision meeting',
    name: 'Erica Watson',
    company: 'NovaOne Creative',
    email: 'david@novaone.io',
    phone: '1 555-5055',
    forecast: 'Low',
    source: 'Event Booth',
    created: '2025-06-05',
    owner: 'Amanda C.'
  },
  {
    id: 6,
    activity: 'Send onboarding checklist',
    name: 'David Scott',
    company: 'Finex Group',
    email: 'lily@finexgroup.com',
    phone: '1 555-6066',
    forecast: 'High',
    source: 'Email Campaign',
    created: '2025-06-05',
    owner: 'Jason B.'
  },
];

export default function InboxTableArea() {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleAll = () => {
    if (selectedIds.length === leads.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(leads.map((lead) => lead.id));
    }
  };

  const toggleSingle = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="overflow-x-auto mt-4 ">
      <table className="min-w-full table-auto border-collapse ">
        <thead className="bg-[#EBEEF6] text-[#3954A5] text-[14px] font-[600]">
          <tr>
            <th className="text-left px-4 py-3">
              <input
                type="checkbox"
                checked={selectedIds.length === leads.length}
                onChange={toggleAll}
                className='leads-table-checkbox'
              />
            </th>
            <th className="text-left px-4 py-3">Next Activity</th>
            <th className="text-left px-4 py-3">Lead Name</th>
            <th className="text-left px-4 py-3">Company</th>
            <th className="text-left px-4 py-3">Email</th>
            <th className="text-left px-4 py-3">Phone</th>
            <th className="text-left px-4 py-3">Forecast</th>
            <th className="text-left px-4 py-3">Lead Source</th>
            <th className="text-left px-4 py-3">Lead Created</th>
            <th className="text-left px-4 py-3">Lead Owner</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="bg-white text-[#4A4A4A] text-[14px] font-[400] font-abeezee border-b border-gray-200"
            >
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(lead.id)}
                  onChange={() => toggleSingle(lead.id)}
                  className='leads-table-checkbox'
                />
              </td>
              <td className="px-4 py-3">{lead.activity}</td>
              <td className="px-4 py-3">{lead.name}</td>
              <td className="px-4 py-3">{lead.company}</td>
              <td className="px-4 py-2 "><a className=' underline cursor-pointer' href="#" >{lead.email}</a></td>
              <td className="px-4 py-3">{lead.phone}</td>
              <td className="px-4 py-3">{lead.forecast}</td>
              <td className="px-4 py-3">{lead.source}</td>
              <td className="px-4 py-3">{lead.created}</td>
              <td className="px-4 py-3">{lead.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
