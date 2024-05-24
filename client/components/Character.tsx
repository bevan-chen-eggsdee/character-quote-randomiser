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
    <div className="aligncenter">
      {randomCharacter && (
        <div className="aligncenter">
          <h1>Name: {randomCharacter.name}</h1>
          <h4>
            <strong>Character ID: {randomCharacter._id}</strong>
          </h4>
        </div>
      )}
      <button onClick={getRandomCharacter}>Get Random Character</button>
    </div>
  )
}
