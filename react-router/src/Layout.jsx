import React from 'react'
import Header from './components/Headers/header'
import Footer from './components/Footers/footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default layout