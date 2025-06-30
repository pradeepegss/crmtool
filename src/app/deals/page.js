import React from 'react';
import Header from '../components/layout/Header';
import DealsTable from '../components/deals/DealsTable';

export default function Deals() {
  return (
    <div className="p-4 md:p-6">
      <Header />
      <DealsTable/>
    </div>
  );
}
