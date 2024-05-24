// import { useState } from 'react'
// import { useQuery } from '@tanstack/react-query'
import Character from './Character.tsx'
import Quote from './Quote.tsx'
import { useEffect, useState } from 'react'
import { getQuote } from '../apiClient.ts'
import { Doc } from '../../models/quotedata.ts'

const App = () => {
  const [randomQuote, setRandomQuote] = useState<Doc | null>(null)

  async function getRandomQuote() {
    setRandomQuote(null)
    const quote = await getQuote()
    setRandomQuote(quote)
  }

  useEffect(() => {
    getRandomQuote()
  }, []) //find more information about error!

  return (
    <>
      <Quote randomQuote={randomQuote} getRandomQuote={getRandomQuote} />
      <Character />
    </>
  )
}

export default App
