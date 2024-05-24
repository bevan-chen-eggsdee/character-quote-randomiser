export default function Quote({
  data,
  isPending,
  isError,
  error,
  randomQuote,
  getRandomQuote,
}) {
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
