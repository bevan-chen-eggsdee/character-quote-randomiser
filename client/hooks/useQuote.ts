import { useQuery } from '@tanstack/react-query'
import { QuoteData } from '../../models/quotedata'
import request from 'superagent'

export default function useQuote() {
  return useQuery({
    queryKey: ['quote'],
    queryFn: async () => {
      const res = await request.get(`api/v1/quote`)
      return res.body as QuoteData
    },
  })
}
