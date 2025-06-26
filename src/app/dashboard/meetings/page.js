import React from 'react';
import MeetingsTasks from '@/app/components/dashboard/meetings/MeetingsTasks';

export default function Meetings() {
  return (
    <div className="p-4 md:p-6 ">
      <div className="flex  pt-6  ">
        <MeetingsTasks />
      </div>
    </div>
  );
}
