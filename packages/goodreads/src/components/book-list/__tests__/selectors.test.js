import { getBooks } from '../selectors'

describe('book-list selectors', () => {
  const state = {
    books: {
      meta: [
        {
          id: 9780439023480,
          isbn: '439023483',
          isbn13: '9780439023480',
          authors: 'Suzanne Collins',
          year: 2008,
          title: 'The Hunger Games',
          description:
            'Consequatur perferendis voluptatem sit aut accusantium. Aut accusantium sit consequatur voluptatem perferendis. Sit perferendis aut voluptatem accusantium consequatur.',
        },
      ],
      images: [
        {
          id: 9780439023480,
          image: 'https://images.gr-assets.com/books/1447303603m/2767052.jpg',
        },
      ],
      ratings: [
        {
          id: 9780439023480,
          rating: 4.34,
        },
      ],
    },
  }

  afterEach(() => {
    getBooks.resetRecomputations()
  })

  it('extracts books from state', () => {
    const expected = {
      ...state.books.meta[0],
      ...state.books.ratings[0],
      ...state.books.images[0],
    }
    expect(getBooks(state)).toEqual([expected])
  })
})
