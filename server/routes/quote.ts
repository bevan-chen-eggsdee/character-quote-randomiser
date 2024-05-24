import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

const LOTR_KEY = process.env.LOTR_KEY

router.get('/', async (req, res) => {
  try {
    if (LOTR_KEY == undefined) {
      throw new Error('Missing API_KEY')
    }
    // const apiResponse = await request
    //   .get(`https://the-one-api.dev/v2/quote`)
    //   .auth(LOTR_KEY, { type: 'bearer' })

    const apiResponse = {
      body: {
        docs: [
          {
            _id: '5cd96e05de30eff6ebcce7e9',
            dialog: 'Deagol!!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7e9',
          },
          {
            _id: '5cd96e05de30eff6ebcce7ea',
            dialog: 'Deagol 2!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7ea',
          },
          {
            _id: '5cd96e05de30eff6ebcce7eb',
            dialog: 'Deagol 3!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7eb',
          },
          {
            _id: '5cd96e05de30eff6ebcce7ec',
            dialog: 'Give us that! Deagol my love',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7ec',
          },
        ],
      },
    }

    const randomIndex = Math.floor(Math.random() * apiResponse.body.docs.length)
    const selectedDoc = apiResponse.body.docs[randomIndex]

    res.json(selectedDoc)
    console.log(res.json(selectedDoc))
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('My bad')
    }
  }
})

export default router
