import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Inventory from './Inventory.jsx'
import Dashboard from './Dashboard.jsx'
import Orders from './Orders.jsx'
import Products from './Products.jsx'
import User from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/kirana/'>
      <div className='fullmain_container'>

        <div className='top_header_fixed'>
          <Header/>
        </div>

        <div className='side_bar_fixed'>
          <Sidebar/>
        </div>

        <div className='main_content'>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/User" element={<User />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  </StrictMode>
);