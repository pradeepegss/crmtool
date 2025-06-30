'use client';

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/sidebar";

export default function DealsLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 max-h-[91vh] overflow-y-scroll">{children}</main>
      </div>
    </>
  );
}