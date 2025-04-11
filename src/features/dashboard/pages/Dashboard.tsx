import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { getDashboardStats } from '../dashboardSlice';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stats, loading, error } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-3 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {loading && <p className="text-blue-600">Loading stats...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {stats.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
