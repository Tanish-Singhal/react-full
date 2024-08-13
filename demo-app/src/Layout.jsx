import React from 'react'
import Headers from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from "./components/Footer.jsx"

function Layout() {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout