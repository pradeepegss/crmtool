
'use client'
import { useState } from 'react';

const leads = [
  {
    id: 1,
    activity: 'Send proposal draft',
    name: 'Oliver White',
    company: 'NextCore Solutions',
    email: 'oliver@nextcore.io',
    phone: '1 555-7777',
    forecast: 'High',
    source: 'Google Ads',
    created: '2025-06-10',
    owner: 'Sophia K.'
  },
  {
    id: 2,
    activity: 'Arrange kickoff meeting',
    name: 'Sophia King',
    company: 'CloudReach Labs',
    email: 'sophia@cloudreachlabs.com',
    phone: '1 555-8888',
    forecast: 'Medium',
    source: 'Webinar',
    created: '2025-06-11',
    owner: 'Liam H.'
  },
  {
    id: 3,
    activity: 'Share pricing sheet',
    name: 'Liam Harris',
    company: 'Zenith Media',
    email: 'liam@zenithmedia.co',
    phone: '1 555-9999',
    forecast: 'Low',
    source: 'Networking Event',
    created: '2025-06-12',
    owner: 'Mia J.'
  },
  {
    id: 4,
    activity: 'Follow-up call',
    name: 'Mia Johnson',
    company: 'Vertex Analytics',
    email: 'mia@vertexanalytics.com',
    phone: '1 555-1111',
    forecast: 'Medium',
    source: 'Referral',
    created: '2025-06-13',
    owner: 'Noah B.'
  },
  {
    id: 5,
    activity: 'Review contract details',
    name: 'Noah Brown',
    company: 'AstroTech Inc.',
    email: 'noah@astrotechinc.com',
    phone: '1 555-2222',
    forecast: 'High',
    source: 'Website Inquiry',
    created: '2025-06-14',
    owner: 'Emma D.'
  },
  {
    id: 6,
    activity: 'Schedule technical demo',
    name: 'Emma Davis',
    company: 'BrightEdge Networks',
    email: 'emma@brightedgenet.com',
    phone: '1 555-3333',
    forecast: 'Low',
    source: 'Trade Show',
    created: '2025-06-15',
    owner: 'William C.'
  },
];


export default function ArchiveTableArea() {

  return (
    <div className="overflow-x-auto mt-4 ">
      <table className="min-w-full table-auto border-collapse ">
        <thead className="bg-[#EBEEF6] text-[#3954A5] text-[14px] font-[600]">
          <tr>

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
