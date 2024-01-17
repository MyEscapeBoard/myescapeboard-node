import { ENDPOINTS } from '~/common/constants'
import { MyEscapeBoard } from '~/myescapeboard'
import { GetBookingsPathParams, GetBookingsResponse } from '~/services/bookings/interfaces/get-bookings.interface'
import { PostBookingsBody, PostBookingsResponse } from '~/services/bookings/interfaces/post-bookings.interface'

export class Bookings {
  constructor(private readonly myEscapeBoard: MyEscapeBoard) {}

  async retrieve(pathParams: GetBookingsPathParams): Promise<GetBookingsResponse[]> {
    const response = await this.myEscapeBoard.get<GetBookingsResponse[]>(`${ENDPOINTS.bookings}/${pathParams.id}`)

    return response
  }

  async create(payload: PostBookingsBody): Promise<PostBookingsResponse> {
    const response = await this.myEscapeBoard.post<PostBookingsResponse>(ENDPOINTS.bookings, payload)

    return response
  }
}
