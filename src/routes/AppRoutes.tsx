import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

// Lazy-loaded pages
const Login = lazy(() => import('../features/auth/pages/Login'));
const Register = lazy(() => import('../features/auth/pages/Register'));
const Dashboard = lazy(() => import('../features/dashboard/pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Route>
      <Route element={<MainLayout />}>
        {/* Protected Route Example (You can later add auth logic here) */}
        <Route path={ROUTES.HOME} element={<Dashboard />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />

        {/* Redirect example */}
        <Route path={ROUTES.HOME} element={<Navigate to="/" replace />} />
      </Route>

      {/* Catch-all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
