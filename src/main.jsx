import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createHashRouter , RouterProvider,createRoutesFromElements, Route } from 'react-router'
import Layout from './Layout.jsx'
import {Home} from "./components/index.js"

const router = createHashRouter (
  //createBrowserRouter
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Firm-CA' element={<Home/>}/>
    </Route>
  )
  )


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
