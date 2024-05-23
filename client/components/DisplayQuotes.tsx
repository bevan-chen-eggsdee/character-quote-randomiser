import { getCats } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import Options from './Options.tsx'

function DisplayQuotes() {
  return (
    <>
      <h1>This is the quotes</h1>
      <div>
        {' '}
        <h3>Who said this?</h3>
      </div>
      <div>
        <button>option1</button>
        <button>option2</button>
        <button>option3</button>
        <button>option4</button>
      </div>
    </>
  )
}

export default DisplayQuotes
