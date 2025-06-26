'use client'

export default function MyActivities() {
  const activities = Array(50).fill("Download Salesmate mobile apps");

  return (
    <div className="bg-white rounded-xl max-h-[30rem] overflow-y-scroll shadow-sm p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">My Activities</h2>
        <div className="flex space-x-2">
          <button className="text-gray-500">
            <i className="fas fa-check-circle"></i>
          </button>
          <button className="text-blue-600">
            <i className="fas fa-calendar-alt"></i>
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        {activities.map((text, idx) => (
          <li key={idx} className="flex justify-between text-sm">
            <span className="flex items-center gap-2">
              <i className="fas fa-clipboard-list text-gray-500"></i>
              {text}
            </span>
            <span className="text-green-500 font-medium">Today</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
