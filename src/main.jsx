import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import JoinPage from './pages/JoinPage';
import Menu from './pages/Menu';
import Notfound from './pages/Notfound';
import SignUp from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/join',
        element: <JoinPage />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      { path: '*', element: <Notfound /> }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)