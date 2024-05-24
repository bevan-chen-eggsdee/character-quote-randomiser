import { Options } from './Options.tsx'

function DisplayQuotes() {
  return (
    <>
      <h1>This is the quotes</h1>
      <div>
        {' '}
        <h3>Who said this?</h3>
        <Options />
      </div>
    </>
  )
}

export default DisplayQuotes
