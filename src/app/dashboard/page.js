import React from 'react';
import Header from '../components/layout/Header';
import OpenTasks from '../components/dashboard/OpenTasks';
import MyActivities from '../components/dashboard/MyActivities';
import MyClosedDeals from '../components/dashboard/MyClosedDeals';
import MyPipelineDeals from '../components/dashboard/MyPipelineDeals';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6">
      <Header />

      {/* Top Row: Open Tasks + My Meetings */}
      <div className="flex flex-col lg:flex-row gap-4 pt-6">
        <div className="w-full lg:w-1/2">
          <OpenTasks />
        </div>
        <div className="w-full lg:w-1/2">
          <OpenTasks />
        </div>
      </div>

      {/* Bottom Row: My Activities + Closed Deals */}
      <div className="flex flex-col lg:flex-row gap-4 pt-6">
        <div className="w-full lg:w-1/2">
         <OpenTasks />
        </div>
        <div className="w-full lg:w-1/2">
          <MyClosedDeals />
        </div>
      </div>
      <div className="flex  pt-6">
        <MyPipelineDeals />
      </div>
    </div>
  );
}
