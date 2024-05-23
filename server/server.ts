import * as Path from 'node:path'
import express from 'express'
import * as URL from 'node:url'
import { join } from 'node:path'
import quote from './routes/quote.ts'

const server = express()
const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// server.get('/api/v1/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   const index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

// if (process.env.NODE_ENV === 'production') {
//   server.use(express.static(Path.resolve('public')))
//   server.use('/assets', express.static(Path.resolve('./dist/assets')))
//   server.get('*', (req, res) => {
//     res.sendFile(Path.resolve('./dist/index.html'))
//   })
// }

server.use('/api/v1/quote', quote)

export default server
