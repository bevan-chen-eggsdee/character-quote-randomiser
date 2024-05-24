import { CharacterInfo } from '../../models/characterData'

interface Props {
  randomCharacter: CharacterInfo
  getRandomCharacter: () => Promise<void>
}

export default function Character({
  randomCharacter,
  getRandomCharacter,
}: Props) {
  return (
    <div>
      {randomCharacter && (
        <div>
          <p>Name: {randomCharacter.name}</p>
          <p>
            <strong>Character ID: {randomCharacter._id}</strong>
          </p>
        </div>
      )}
      <button onClick={getRandomCharacter}>Get Random Character</button>
    </div>
  )
}
