import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import { ContactUs, Home,AboutUs,OtherServices } from "./components/index.js"

// const router = createHashRouter(
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Firm-CA' element={<Home />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/other-services' element={<OtherServices />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
