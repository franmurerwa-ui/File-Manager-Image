import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-2">Overview of your files and activity.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-100 p-4">Total Images: <strong>15</strong></div>
        <div className="bg-white rounded-lg border border-gray-100 p-4">Recent Uploads: <strong>3</strong></div>
        <div className="bg-white rounded-lg border border-gray-100 p-4">Storage Used: <strong>1.2 GB</strong></div>
      </div>
    </div>
  );
};

export default Dashboard;
