import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Header from './Header.tsx'

import Footer from './Footer.tsx'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <body>
        <Header />
        <Outlet />
        <Footer />
      </body>
    </>
  )
}
export default App
