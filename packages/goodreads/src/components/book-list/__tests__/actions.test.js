import { FETCH_BOOKS_STARTED } from '../actions'
import { fetchBooks } from '../actions'

describe('book-list actions', () => {
  it('creates a fetch action', () => {
    const expected = { type: FETCH_BOOKS_STARTED }
    expect(fetchBooks()).toEqual(expected)
  })
})
