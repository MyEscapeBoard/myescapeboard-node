import { BASE_API_URL, DEFAULT_API_VERSION, ERROR_MESSAGES } from '~/common/constants'
import { Bookings } from '~/services/bookings/bookings'
import { Rooms } from '~/services/rooms/rooms'
import { Slots } from '~/services/slots/slots'

export class MyEscapeBoard {
  private readonly _headers: Headers

  readonly bookings = new Bookings(this)
  readonly rooms = new Rooms(this)
  readonly slots = new Slots(this)

  constructor(readonly key?: string) {
    if (!key) {
      throw new Error(ERROR_MESSAGES.missingApiKey)
    }

    this._headers = new Headers({
      // TODO: use better auth method
      'Authorization': `Basic ${this.key}`,
      'Content-Type': 'application/json',
    })
  }

  private async _fetchRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${BASE_API_URL}/${DEFAULT_API_VERSION}${endpoint}`, options)

    // TODO: handle errors
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = await response.json()

    return data as T
  }

  async get<T>(path: string, options: RequestInit = {}) {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: this._headers,
      ...options,
    }

    return this._fetchRequest<T>(path, requestOptions)
  }

  async post<T>(path: string, entity?: unknown, options: RequestInit = {}) {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(entity),
      ...options,
    }

    return this._fetchRequest<T>(path, requestOptions)
  }
}
