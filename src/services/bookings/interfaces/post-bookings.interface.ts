export interface PostBookingsBody {
  slotId: number
  code: string
  nbPlayers: number
  players: {
    email?: string
    position: string
    name: string
    paymentPart: number
    phone?: string
  }[]
  amount?: number
  description: string
  status: string
}

export interface PostBookingsResponse {
  success: boolean
  id: number
}
