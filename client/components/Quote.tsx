import { QuoteDoc } from '../../models/quotedata'
import { Link } from 'react-router-dom'

interface Props {
  randomQuote: QuoteDoc
  getRandomQuote: () => Promise<void>
}

export default function Quote({ randomQuote, getRandomQuote }: Props) {
  if (!randomQuote) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h2 className="aligncenter">
        <Link to="/">Home Page</Link>
      </h2>

      <div className="aligncenter">
        {randomQuote && (
          <div>
            <h1>Quote: {randomQuote.dialog}</h1>
            <p>
              <strong>Character ID: {randomQuote.character}</strong>
            </p>
          </div>
        )}
        <button onClick={getRandomQuote}>Get Random Quote</button>
      </div>
    </>
  )
}
