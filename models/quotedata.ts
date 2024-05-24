export interface QuoteData {
  docs: QuoteDoc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface QuoteDoc {
  _id: string
  dialog: string
  movie: Movie
  character: string
  id: string
}

export type Movie = '5cd95395de30eff6ebccde5d' | '5cd95395de30eff6ebccde5b'
