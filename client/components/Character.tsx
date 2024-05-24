import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { CharacterInfo } from '../../models/characterData'

// function useCharacter() {
//   return useQuery({
//     queryKey: ['character'],
//     queryFn: async () => {
//       const res = await request.get(`api/v1/character`)
//       return res.body as CharacterDataList
//     },
//   })
// }
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
