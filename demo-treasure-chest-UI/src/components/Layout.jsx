import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'

function Layout() {
  return (
    <div className="wrapper">
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        <FooterComponent/>
    </div>
  )
}

export default Layout