export function Options() {
  return (
    <>
      <div>
        {shuffledArray.map((el, index) => {
          return <button key={index}>{el} </button>
        })}
      </div>
    </>
  )
}

const characters = ['man', 'someone', 'anotherOne', 'someone else']
const shuffledArray = shuffleArray(characters)

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

console.log(shuffleArray(characters))
