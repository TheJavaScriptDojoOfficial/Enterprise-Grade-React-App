import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { logout } from '../../features/auth/authSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-wide">
        The JavaScript Dojo
        </Link>

        <nav className="space-x-4">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="ml-4 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
