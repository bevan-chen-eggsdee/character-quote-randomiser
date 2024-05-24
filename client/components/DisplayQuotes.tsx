import { getCats } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import Options from './Options.tsx'
import { Link } from 'react-router-dom'

function DisplayQuotes() {
  return (
    <>
      <h2 className="aligncenter">
        <Link to="/">Home Page</Link>
      </h2>

      <div className="aligncenter">
        <h1>Random Quote Generator</h1>
        <h3 className="textbox">Who said this?</h3>
      </div>
      <div className="aligncenter">
        <button>Brad</button>
        <button>Felix</button>
        <button>Fatima</button>
        <button>Regie</button>
      </div>
    </>
  )
}
// The <h3> displays a quote taken from the API
// Each button displays the randomised character
export default DisplayQuotes
