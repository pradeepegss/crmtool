import React from 'react';
import Header from '../components/layout/Header';
import OpenTasks from '../components/dashboard/OpenTasks';
import MyActivities from '../components/dashboard/MyActivities';
import MyClosedDeals from '../components/dashboard/MyClosedDeals';
import MyPipelineDeals from '../components/dashboard/MyPipelineDeals';
import LeadsTable from '../components/leads/LeadsTable';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6">
      <Header />

      <LeadsTable />

    </div>
  );
}
