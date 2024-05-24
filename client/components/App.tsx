// import { useState } from 'react'
// import { useQuery } from '@tanstack/react-query'
import Character from './Character.tsx'
import Quote from './Quote.tsx'
import useQuote from '../hooks/useQuote.ts'
import { useEffect, useState } from 'react'

const App = () => {
  const { data, isPending, isError, error } = useQuote()
  const [randomQuote, setRandomQuote] = useState<{
    dialog: string
    character: string
  } | null>(null)

  const getRandomQuote = () => {
    if (data?.docs.length) {
      const randomIndex = Math.floor(Math.random() * data.docs.length)
      const selectedDoc = data.docs[randomIndex]
      setRandomQuote({
        dialog: selectedDoc.dialog,
        character: selectedDoc.character,
      })
    }
  }

  useEffect(() => {
    if (data?.docs) {
      getRandomQuote()
    }
  }, [data]) //find more information about error!

  return (
    <>
      <Quote
        data={data}
        isPending={isPending}
        isError={isError}
        error={error}
        randomQuote={randomQuote}
        getRandomQuote={getRandomQuote}
      />
      <Character />
    </>
  )
}

export default App
