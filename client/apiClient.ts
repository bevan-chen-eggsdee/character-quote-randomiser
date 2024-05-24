import request from 'superagent'
import { QuoteDoc } from '../models/quotedata'
import { CharacterInfo } from '../models/characterData'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

export async function getQuote(): Promise<QuoteDoc> {
  const res = await request.get('/api/v1/quote')
  return res.body
}

export async function getCharacter(): Promise<CharacterInfo> {
  const res = await request.get('/api/v1/character')
  return res.body
}
