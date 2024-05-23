import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Header from './Header.tsx'

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('black')

  return (
    <>
      <div style={{ backgroundColor }}>
        <Header />
      </div>
    </>
  )
}

export default App
