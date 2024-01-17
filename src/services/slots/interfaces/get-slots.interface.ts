export interface GetSlotsQueryParams {
  startDate: string
  endDate: string
}

export interface GetSlotsResponse {
  id: number
  room: {
    id: number
    name: string
  }
  startDate: string
  endDate: string
  price: number
  status: string
}
