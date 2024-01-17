export const DEFAULT_API_VERSION = 'v1'

// TODO: Change this to the production URL
export const BASE_API_URL = 'https://api.myescapeboard.dev'

export const ENDPOINTS = {
  bookings: '/bookings',
  rooms: '/rooms',
  slots: '/slots',
}

export const ERROR_MESSAGES = {
  missingApiKey: 'Missing API key. Pass it to the constructor `new MyEscapeBoardApi("YOUR_API_KEY")`',
}
