import { useState } from 'react'

interface Answer {
  element: string
  answer: boolean
}

export default function AnswerButton(props: Answer) {
  const el = props.element
  // const answer = props.answer
  const [answer, setAnswer] = useState(false)

  function handleClick(el) {
    if (el === 'Frodo') {
      setAnswer(true)
      // setColor('#1CAC78')
      console.log('GREEN')
    }
  }

  return (
    <button
      style={{ background: answer ? '#1CAC78' : '#A9A9A9' }}
      onClick={() => handleClick(el)}
    >
      {el}
    </button>
  )
}
