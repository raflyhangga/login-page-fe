import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './App'
import Register from './app/register/register'
import Home from './app/home/home'
import './index.css'
import { AuthProvider } from './context/AuthProvider'
import RequireAuth from './component/RequireAuth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: <RequireAuth element={<Home />} />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
