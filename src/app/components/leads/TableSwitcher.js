'use client'

import {  useState } from "react";

export default function TableSwitcher() {
 const [activeTab, setActiveTab] = useState("inbox");
    return (
        <div className="flex items-center text-sm rounded-md overflow-hidden border border-indigo-300">

                    {/* Inbox Tab */}
                    <button
                        onClick={() => setActiveTab("inbox")}
                        className={`flex items-center transition-all px-3 py-1.5 ${activeTab === "inbox"
                            ? "bg-white text-indigo-700 border-r border-indigo-300"
                            : "bg-transparent text-indigo-500"
                            }`}
                    >
                        <i className="fa fa-envelope mr-1"></i>
                        {activeTab === "inbox" && (
                            <>
                                <span className="mr-1">Leads Inbox</span>

                            </>
                        )}
                    </button>

                    {/* Archive Tab */}
                    <button
                        onClick={() => setActiveTab("archive")}
                        className={`flex items-center transition-all px-3 py-1.5 ${activeTab === "archive"
                            ? "bg-white text-indigo-700 border-l border-indigo-300"
                            : "bg-transparent text-indigo-500"
                            }`}
                    >
                        {activeTab === "archive" && (
                            <>
                                <span className="mr-1">Archive Leads</span>
                            </>
                        )}
                        <i className="fa fa-archive mr-1"></i>
                    </button>
                </div>
    );
}
