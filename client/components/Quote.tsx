import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { QuoteData } from '../../models/quotedata'

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

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>There was a problem:{String(error)}</p>
  }

  return (
    <>
      <h1>QUOTE</h1>
      <div>
        {data.docs.map((quote) => (
          <div key={quote.id}>{quote.dialog}</div>
        ))}
      </div>
    </>
  )
}
