import { ENDPOINTS } from '~/common/constants'
import { MyEscapeBoard } from '~/myescapeboard'
import { GetRoomsResponse } from '~/services/rooms/interfaces/get-rooms.interface'

export class Rooms {
  constructor(private readonly myEscapeBoard: MyEscapeBoard) {}

  async retrieve(): Promise<GetRoomsResponse[]> {
    const response = await this.myEscapeBoard.get<GetRoomsResponse[]>(ENDPOINTS.rooms)

    return response
  }
}
