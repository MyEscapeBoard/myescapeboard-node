export interface GetBookingsPathParams {
  id: number
}

export interface GetBookingsResponse {
  createdAt: string
  amount: number
  status: string
  slot: {
    startDate: string
    endDate: string
    room: {
      id: number
      name: string
      status: string
    }
  }
  paymentParts: {
    name: string
    amount: number
    status: string
  }[]
}
