'use client';
import { Button } from 'primereact/button';
import Sidebar from './components/layout/sidebar';
import Navbar from './components/layout/Navbar';
import { useState } from 'react';
import Dashboard from './dashboard/page';

export default function Home() {


  return (
    <div className="w-[100%] h-screen overflow-hidden ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 h-[91vh] overflow-y-scroll"><Dashboard /></main>
      </div>

    </div>
  );
}



