import React, { useState } from 'react';
import axios from 'axios';

export const SalesDashboard: React.FC = () => {
  const [salesData, setSalesData] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleDetect = async () => {
    try {
      const parsed = JSON.parse(salesData);
      const res = await axios.post('http://localhost:8000/detect', parsed);
      setResults(res.data);
    } catch (err) {
      alert('Error: ' + err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Anomaly Detection</h2>
      <textarea
        className="w-full border p-2 mb-2"
        rows={6}
        placeholder='Paste weekly sales data as JSON array [{"week": "2025-W32", "sales": 1200}, ...]'
        value={salesData}
        onChange={e => setSalesData(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleDetect}>Detect Anomalies</button>
      <div className="mt-4">
        {results.length > 0 && (
          <table className="w-full border">
            <thead>
              <tr>
                <th>Week</th>
                <th>Sales</th>
                <th>Anomaly</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i} className={r.is_anomaly ? 'bg-red-100' : ''}>
                  <td>{r.week}</td>
                  <td>{r.sales}</td>
                  <td>{r.is_anomaly ? 'Yes' : 'No'}</td>
                  <td>{r.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
