import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import { ContactUs, Home, AboutUs, OtherServices,Service,CalendarPage,Cal } from "./pages/index.js"

// const router = createHashRouter(
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Firm-CA' element={<Home />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='know-bank/event-calender' element={<CalendarPage />} />
      <Route path='know-bank/calculator' element={<Cal />} />
      <Route path='/calendar' element={<CalendarPage />} />
      <Route path='/services'>
        <Route index element={<OtherServices />} />           
        <Route path='*' element={<Service />} />             
      </Route>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
