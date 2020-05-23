import { call, put, all } from 'redux-saga/effects'
import * as api from '../api'
import {
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILED,
  FETCH_RATINGS_SUCCEEDED,
  FETCH_RATINGS_FAILED,
} from '../../components/book-list/actions'

export const watchBookMeta = function* watchFetchMeta() {
  try {
    const { data } = yield call(api.fetchMeta)
    yield put({
      type: FETCH_META_SUCCEEDED,
      payload: { meta: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_META_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBookImages = function* watchFetchImages() {
  try {
    const { data } = yield call(api.fetchImages)
    yield put({
      type: FETCH_IMAGES_SUCCEEDED,
      payload: { images: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_IMAGES_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBookRatings = function* watchFetchRatings() {
  try {
    const { data } = yield call(api.fetchRating)
    yield put({
      type: FETCH_RATINGS_SUCCEEDED,
      payload: { ratings: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_RATINGS_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBooks = function* watchFetchBooks() {
  const orchestrated = [watchBookRatings, watchBookImages, watchBookMeta]
  yield all(orchestrated.map((fn) => call(fn)))
}
