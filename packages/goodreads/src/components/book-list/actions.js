export const FETCH_META_STARTED = 'FETCH_META_STARTED'
export const FETCH_META_SUCCEEDED = 'FETCH_META_SUCCEEDED'
export const FETCH_META_FAILED = 'FETCH_META_FAILED'

export const FETCH_IMAGES_STARTED = 'FETCH_IMAGES_STARTED'
export const FETCH_IMAGES_SUCCEEDED = 'FETCH_IMAGES_SUCCEEDED'
export const FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED'

export const FETCH_RATINGS_STARTED = 'FETCH_RATINGS_STARTED'
export const FETCH_RATINGS_SUCCEEDED = 'FETCH_RATINGS_SUCCEEDED'
export const FETCH_RATINGS_FAILED = 'FETCH_RATINGS_FAILED'

export const FETCH_BOOKS_STARTED = 'FETCH_RATING_STARTED'
export const FETCH_BOOKS_SUCCEEDED = 'FETCH_RATING_SUCCEEDED'
export const FETCH_BOOKS_FAILED = 'FETCH_RATING_FAILED'

export const FETCH_BOOKS_IN_PROGRESS_STARTED = 'FETCH_BOOKS_IN_PROGRESS_STARTED'
export const FETCH_BOOKS_IN_PROGRESS_SUCCEEDED =
  'FETCH_BOOKS_IN_PROGRESS_SUCCEEDED'
export const FETCH_BOOKS_IN_PROGRESS_FAILED = 'FETCH_BOOKS_IN_PROGRESS_FAILED'

export const START_BOOK = 'START_BOOK'
export const STOP_BOOK = 'STOP_BOOK'

export const fetchMeta = () => ({
  type: FETCH_META_STARTED,
})

export const fetchImages = () => ({
  type: FETCH_IMAGES_STARTED,
})

export const fetchRatings = () => ({
  type: FETCH_RATINGS_STARTED,
})

export const fetchBooks = () => ({
  type: FETCH_BOOKS_STARTED,
})

export const fetchBooksInProgress = (username) => ({
  type: FETCH_BOOKS_IN_PROGRESS_STARTED,
  payload: {
    username,
  },
})

export const startBook = () => ({
  type: START_BOOK,
})

export const stopBook = () => ({
  type: STOP_BOOK,
})
