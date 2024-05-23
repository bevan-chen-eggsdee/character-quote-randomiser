export interface QuoteData {
  docs: Doc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface Doc {
  id: string
  dialog: string
  movie: Movie
  character: string
  docID: string
}

export type Movie = '5cd95395de30eff6ebccde5d' | '5cd95395de30eff6ebccde5b'
