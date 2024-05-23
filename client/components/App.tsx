import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('black')

  return (
    <>
      {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
