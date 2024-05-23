export interface CharacterInfo {
  _id: string
  name: string
  wikiUrl: string
  race: string
  birth: string | null
  gender: string
  death: string | null
  hair: string | null
  height: string | null
  realm: string | null
  spouse: string | null
}

export interface CharacterDataList {
  docs: Character[]
}
