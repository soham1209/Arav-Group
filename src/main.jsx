import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import { ContactUs, Home } from "./components/index.js"

// const router = createHashRouter(
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Firm-CA' element={<Home />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
