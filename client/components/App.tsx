import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Header from './Header.tsx'

import { Outlet } from 'react-router-dom'


const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('black')

  return (
    <>

      <div style={{ backgroundColor }}>
        <Header />
      </div>
      {/* {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button> */}
      <Outlet />

    </>
  )
}

export default App
