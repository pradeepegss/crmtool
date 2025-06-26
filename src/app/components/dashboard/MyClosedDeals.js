export default function MyClosedDeals() {
  const deals = [
    { name: "Deal Name", amount: "$512,000.00", stage: "Need Analysis", date: "20-04-2025", relatedTo: "Zone Website", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$512,000.00", stage: "Need Analysis", date: "20-04-2025", relatedTo: "Zone Website", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$777,000.00", stage: "Closed Lost", date: "20-04-2025", relatedTo: "Royals", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$777,000.00", stage: "Closed Lost", date: "20-04-2025", relatedTo: "Royals", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
    { name: "Deal Name", amount: "$76,000.00", stage: "Closed Won", date: "20-04-2025", relatedTo: "Benton", owner: "Marrier Kris", contact: "James Kole" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-h-[30rem] overflow-y-scroll">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px] text-[#444] font-[500] font-ibm">My Closed Deals</h2>
        <a href="#" className="text-[12px] text-[#444] font-[500] font-ibm hover:text-[#4976F4] hover:underline hover:decoration-[#4976F4]">
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse ">
          <thead className="bg-[#EBEEF6] text-[#3954A5] text-[14px] font-[600]">
            <tr>
              <th className="text-left  px-4 py-2">Deal</th>
              <th className="text-left  px-4 py-2">Amount</th>
              <th className="text-left  px-4 py-2">Stage</th>
              <th className="text-left  px-4 py-2">Date</th>
              <th className="text-left  px-4 py-2">Related To</th>
              <th className="text-left  px-4 py-2">Owner</th>
              <th className="text-left  px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, idx) => (
              <tr key={idx} className="bg-white text-[#4A4A4A] text-[14px] font-[400] font-abeezee border-b border-gray-200" >
                <td className=" px-4 py-2">{deal.name}</td>
                <td className=" px-4 py-2">{deal.amount}</td>
                <td className=" px-4 py-2">{deal.stage}</td>
                <td className=" px-4 py-2">{deal.date}</td>
                <td className=" px-4 py-2">{deal.relatedTo}</td>
                <td className=" px-4 py-2">{deal.owner}</td>
                <td className=" px-4 py-2">{deal.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
