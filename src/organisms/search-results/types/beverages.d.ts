declare interface Beverage {
  ClickUri: string
  Excerpt: string
  PrintableUri: string
  Title: string
  UniqueId: string
  Uri: string
  absentTerms: []
  childResults: []
  clickUri: string
  excerpt: string
  printableUri: string
  rating: number
  raw: any
  thumbnail: string
  price: string
  classification: string
  availability: string
  country: string
}

declare interface SearchResults {
  requestDuration: number
  results: Beverage[]
  termsToHighlight: string[]
  totalCount: number
  totalCountFiltered: number
  fetching: boolean
  error: boolean
}
