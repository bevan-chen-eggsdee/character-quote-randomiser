import request from 'superagent'
import { Doc } from '../models/quotedata'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

export async function getQuote(): Promise<Doc> {
  const res = await request.get('/api/v1/quote')
  return res.body
}
