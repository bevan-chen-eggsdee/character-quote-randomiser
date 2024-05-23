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
    const apiResponse = await request
      .get(`https://the-one-api.dev/v2/quote`)
      .auth(LOTR_KEY, { type: 'bearer' })

    res.json(apiResponse.body)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('My bad')
    }
  }
})

export default router
