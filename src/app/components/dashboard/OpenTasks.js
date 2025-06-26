'use client'

export default function OpenTasks() {
  const tasks = [
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Commercial Press",
      priority: "Medium",
      relatedTo: "Commercial Press",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Zone Website",
      priority: "Low",
      relatedTo: "Zone Website",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Royals",
      priority: "High",
      relatedTo: "Royals",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Royals",
      priority: "High",
      relatedTo: "Royals",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
    {
      subject: "Deal Name",
      dueDate: "20-04-2025",
      status: "Benton",
      priority: "Medium",
      relatedTo: "Benton",
      contact: "Donnette Foller",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-h-[479px] overflow-y-scroll">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px] text-[#444] font-[500] font-ibm">My Open Tasks</h2>
        <a href="#" className="text-[12px] text-[#444] font-[500] font-ibm hover:text-[#4976F4] hover:underline hover:decoration-[#4976F4]">
          View All
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse ">
          <thead className="bg-[#EBEEF6] text-[#3954A5] text-[14px] font-[600]">
            <tr>
              <th className="text-left px-4 py-2">Subject</th>
              <th className="text-left px-4 py-2">Due Date</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Priority</th>
              <th className="text-left px-4 py-2">Related To</th>
              <th className="text-left px-4 py-2">Contact Name</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={idx} className="bg-white text-[#4A4A4A] text-[14px] font-[400] font-abeezee border-b border-gray-200">
                <td className="px-4 py-2" >{task.subject}</td>
                <td className="px-4 py-2">{task.dueDate}</td>
                <td className="px-4 py-2">{task.status}</td>
                <td className="px-4 py-2">{task.priority}</td>
                <td className="px-4 py-2">{task.relatedTo}</td>
                <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                  {task.contact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
