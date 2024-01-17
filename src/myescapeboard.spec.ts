import { ERROR_MESSAGES } from '~/common/constants'
import { MyEscapeBoard } from '~/myescapeboard'

describe('MyEscapeBoard', () => {
  it('should throw API key error', () => {
    const myEscapeBoard = () => new MyEscapeBoard()

    expect(myEscapeBoard).toThrow(ERROR_MESSAGES.missingApiKey)
  })

  it('should create instance of services', () => {
    const myEscapeBoard = new MyEscapeBoard('YOUR_API_KEY')

    expect(myEscapeBoard.bookings).toBeDefined()
    expect(myEscapeBoard.rooms).toBeDefined()
    expect(myEscapeBoard.slots).toBeDefined()
  })
})
