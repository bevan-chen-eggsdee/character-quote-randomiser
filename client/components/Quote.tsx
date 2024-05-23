import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { QuoteData } from '../../models/quotedata'
import { useEffect, useState } from 'react'

function useQuote() {
  return useQuery({
    queryKey: ['quote'],
    queryFn: async () => {
      const res = await request.get(`api/v1/quote`)
      return res.body as QuoteData
    },
  })
}

export default function Quote() {
  const { data, isPending, isError, error } = useQuote()
  const [randomQuote, setRandomQuote] = useState<{
    dialog: string
    character: string
  } | null>(null)

  useEffect(() => {
    if (data?.docs) {
      getRandomQuote()
    }
  }, [data]) //find more information about error!

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

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>There was a problem:{String(error)}</p>
  }

  return (
    <div>
      {randomQuote && (
        <div>
          <p>Quote: {randomQuote.dialog}</p>
          <p>
            <strong>Character ID: {randomQuote.character}</strong>
          </p>
        </div>
      )}
      <button onClick={getRandomQuote}>Get Random Quote</button>
    </div>
  )
}
