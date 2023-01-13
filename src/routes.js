import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
// import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Profile from './pages/Profile';
import AttendPage from './pages/AttendPage';
import GradePage from './pages/GradePage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // { element: <Navigate to="/dashboard/home" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'home', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'profile', element: <Profile /> }
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children:[
        { path: 'attendance', element: <AttendPage /> }
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children:[
        { path: 'grade', element: <GradePage /> }
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children:[
        { path: 'ranking', element: <Profile /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
