import React from 'react';
import { SalesDashboard } from './components/SalesDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-2xl font-bold">Sales Anomaly Dashboard</header>
      <main className="p-4">
        <SalesDashboard />
      </main>
    </div>
  );
}

export default App;
