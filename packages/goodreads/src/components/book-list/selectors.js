import { createSelector } from 'reselect'

const getMeta = (state) => state.books.meta
const getImages = (state) => state.books.images
const getRatings = (state) => state.books.ratings
const getBooksInProgress = (state) => state.books.booksInProgress

export const getBooks = createSelector(
  [getMeta, getImages, getRatings],
  (meta, images, ratings) => {
    if (!(meta && images && ratings)) return []
    return meta.map((bookMeta, idx) => ({
      ...bookMeta,
      ...images[idx],
      ...ratings[idx],
    }))
  }
)

export const getBooksProgress = createSelector(
  [getBooks, getBooksInProgress],
  (books, booksInProgress) => {
    if (!booksInProgress) return []
    return books.filter((book) => booksInProgress.includes(book.id))
  }
)
