import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
// import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import GradeDataPage from './pages/GradeDataPage';
import Profile from './pages/Profile';
import AttendPage from './pages/AttendPage';
import GradePage from './pages/GradePage';

import RankingPage from './pages/RankingPage';
import AttendDataPage from './pages/AttendDataPage';
import HomePage from './pages/HomePage';


export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children:[
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: 'app', element: <HomePage /> },
        { path: 'home', element: <HomePage /> },
        { path: 'ranking', element: <RankingPage /> },
        { path: 'profile', element: <Profile /> },
        { path: 'grade', element: <GradePage /> },
        { path: 'attendance', element: <AttendPage /> }
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
