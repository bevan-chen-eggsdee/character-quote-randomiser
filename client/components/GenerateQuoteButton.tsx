import { Link, useNavigate } from 'react-router-dom'

function GenerateQuoteButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/quote')
  }

  return (
    <>
      <p>Click here to see a quote!</p>
      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Show Quote
      </button>
    </>
  )
}

export default GenerateQuoteButton
