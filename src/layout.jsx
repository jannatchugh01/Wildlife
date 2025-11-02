import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div>
    <Outlet />
    </div>
  )
}

export default Layout