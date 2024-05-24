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

    const random = Math.random() * 932
    const randomIndex = Math.floor(random)

    const apiResponse = await request
      .get(`https://the-one-api.dev/v2/character?limit=1&offset=${randomIndex}`)
      .auth(LOTR_KEY, { type: 'bearer' })

    console.log(apiResponse.body.docs[0])

    const selectedDoc = apiResponse.body.docs[0]

    res.json(selectedDoc)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('My bad')
    }
  }
})

export default router
