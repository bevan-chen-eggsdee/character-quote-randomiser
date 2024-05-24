//Main Page

import { Link, useNavigate } from 'react-router-dom'

function GenerateQuoteButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/quote')
  }

  return (
    <>
      <div className="aligncenter">
        <h1>Random Quote Generator</h1>
        <h2>Click to show quote:</h2>
      </div>
      <div className="aligncenter">
        <button onClick={handleClick}>Show Quote</button>
      </div>
    </>
  )
}

export default GenerateQuoteButton
