import {
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILED,
  FETCH_RATINGS_SUCCEEDED,
  FETCH_RATINGS_FAILED,
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_FAILED,
  FETCH_BOOKS_SUCCEEDED,
  FETCH_BOOKS_IN_PROGRESS_STARTED,
  FETCH_BOOKS_IN_PROGRESS_FAILED,
  FETCH_BOOKS_IN_PROGRESS_SUCCEEDED,
} from './actions'

const initialState = {
  meta: [],
  isLoading: false,
  error: null,
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case FETCH_META_SUCCEEDED: {
      return {
        ...state,
        meta: action.payload.meta,
      }
    }
    case FETCH_META_FAILED: {
      return {
        ...state,
        error: action.payload.error,
      }
    }
    case FETCH_IMAGES_SUCCEEDED: {
      return {
        ...state,
        images: action.payload.images,
      }
    }
    case FETCH_IMAGES_FAILED: {
      return {
        ...state,
        error: action.payload.error,
      }
    }
    case FETCH_RATINGS_SUCCEEDED: {
      return {
        ...state,
        ratings: action.payload.ratings,
      }
    }
    case FETCH_RATINGS_FAILED: {
      return {
        ...state,
        error: action.payload.error,
      }
    }
    case FETCH_BOOKS_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_BOOKS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case FETCH_BOOKS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    }
    case FETCH_BOOKS_IN_PROGRESS_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_BOOKS_IN_PROGRESS_SUCCEEDED: {
      return {
        ...state,
        booksInProgress: action.payload.booksInProgress,
        isLoading: false,
      }
    }
    case FETCH_BOOKS_IN_PROGRESS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    }
    default: {
      return state
    }
  }
}
