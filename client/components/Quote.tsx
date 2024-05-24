import { QuoteDoc } from '../../models/quotedata'

interface Props {
  randomQuote: QuoteDoc
  getRandomQuote: () => Promise<void>
}

export default function Quote({ randomQuote, getRandomQuote }: Props) {
  if (!randomQuote) {
    return <p>Loading...</p>
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
