import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { CharacterDataList } from '../../models/characterData'

function useCharacter() {
  return useQuery({
    queryKey: ['character'],
    queryFn: async () => {
      const res = await request.get(`api/v1/character`)
      return res.body as CharacterDataList
    },
  })
}

export default function Character() {
  const { data, isPending, isError, error } = useCharacter()

  const [randomCharacter, setRandomCharacter] = useState<{
    name: string
    _id: string
  } | null>(null)

  useEffect(() => {
    if (data?.docs) {
      getRandomCharacter()
    }
  }, [data]) //find more information about error!

  const getRandomCharacter = () => {
    if (data?.docs.length) {
      const randomIndex = Math.floor(Math.random() * data.docs.length)
      const selectedDoc = data.docs[randomIndex]
      setRandomCharacter({
        name: selectedDoc.name,
        _id: selectedDoc._id,
      })
    }
  }

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>There was a problem:{String(error)}</p>
  }

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
