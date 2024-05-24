import { useState } from 'react'
import AnswerButton from './AnswerButton'

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export function Options() {
  // const [color, setColor] = useState('#E8E8E8')
  const [answer, setAnswer] = useState(false)
  const characters = ['Frodo', 'Gandalf', 'Pippin', 'Merry']

  const correctAnswer = characters[0]
  const shuffledArray = shuffleArray([...characters])

  return (
    <>
      <div>
        {shuffledArray.map((el, index) => {
          return <AnswerButton answer={answer} element={el} key={index} />
        })}
      </div>
    </>
  )
}
