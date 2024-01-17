import { ENDPOINTS } from '~/common/constants'
import { MyEscapeBoard } from '~/myescapeboard'
import { GetSlotsQueryParams, GetSlotsResponse } from '~/services/slots/interfaces/get-slots.interface'

export class Slots {
  constructor(private readonly myEscapeBoard: MyEscapeBoard) {}

  async retrieve(queryParams: GetSlotsQueryParams): Promise<GetSlotsResponse[]> {
    const response = await this.myEscapeBoard.get<GetSlotsResponse[]>(
      `${ENDPOINTS.slots}?startDate=${queryParams.startDate}&endDate=${queryParams.endDate}`,
    )

    return response
  }
}
