
'use client'
import { useState } from 'react';

const leads = [
  {
    id: 1,
    activity: 'Prepare demo presentation',
    name: 'Ava Mitchell',
    company: 'PixelWave Studios',
    email: 'ava@pixelwave.io',
    phone: '1 555-4444',
    forecast: 'Medium',
    source: 'LinkedIn Ads',
    created: '2025-06-20',
    owner: 'Ethan P.'
  },
  {
    id: 2,
    activity: 'Discuss partnership terms',
    name: 'Ethan Parker',
    company: 'QuantumSoft Labs',
    email: 'ethan@quantumsoftlabs.com',
    phone: '1 555-5555',
    forecast: 'High',
    source: 'Cold Outreach',
    created: '2025-06-21',
    owner: 'Olivia M.'
  },
  {
    id: 3,
    activity: 'Send product brochure',
    name: 'Olivia Martinez',
    company: 'NovaEdge Solutions',
    email: 'olivia@novaedge.io',
    phone: '1 555-6666',
    forecast: 'Low',
    source: 'Event Signup',
    created: '2025-06-22',
    owner: 'Lucas R.'
  },
  {
    id: 4,
    activity: 'Arrange follow-up meeting',
    name: 'Lucas Roberts',
    company: 'VertexWorks Inc.',
    email: 'lucas@vertexworks.com',
    phone: '1 555-7777',
    forecast: 'High',
    source: 'Referral',
    created: '2025-06-23',
    owner: 'Isabella N.'
  },
  {
    id: 5,
    activity: 'Provide service quote',
    name: 'Isabella Nelson',
    company: 'TechSphere Systems',
    email: 'isabella@techsphere.co',
    phone: '1 555-8888',
    forecast: 'Medium',
    source: 'Website Form',
    created: '2025-06-24',
    owner: 'Mason T.'
  },
  {
    id: 6,
    activity: 'Confirm onboarding steps',
    name: 'Mason Turner',
    company: 'Skyline Digital',
    email: 'mason@skylinedigital.com',
    phone: '1 555-9999',
    forecast: 'Low',
    source: 'Conference',
    created: '2025-06-25',
    owner: 'Charlotte L.'
  },
];


export default function PipelineTableArea() {

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
