export interface GetRoomsResponse {
  id: number
  enabled: boolean
  createdAt: string
  updatedAt: string
  name: string
  startTime: string
  slotDurationMinutes: number
  building: number
  genSlotOffsetDays: number
  status: string
}
