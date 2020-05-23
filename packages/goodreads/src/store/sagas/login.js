import { call, put } from 'redux-saga/effects'
import * as api from '../api'
import {
  CHECK_AUTH_SUCCEEDED,
  CHECK_AUTH_FAILED,
} from '../../containers/auth-checker/actions'
import { LOGIN_SUCCEEDED, LOGIN_FAILED } from '../../components/login/actions'
import {
  REGISTRATION_SUCCEEDED,
  REGISTRATION_FAILED,
} from '../../components/register/actions'

const stripStatus = (message) => {
  const status = new RegExp(/\d{3}/g)
  return +message.match(status)[0]
}
export const watchLogin = function* watchPerformLogin({ payload }) {
  try {
    const { data } = yield call(api.authenticateUser, payload)
    yield put({
      type: LOGIN_SUCCEEDED,
      payload: {
        msg: data,
      },
    })
  } catch (e) {
    const status = stripStatus(e.message)
    const errorMessageMap = {
      404: 'User does not exist',
      401: 'Password is incorrect',
    }
    yield put({
      type: LOGIN_FAILED,
      payload: {
        error: errorMessageMap[status],
      },
    })
  }
}

export const watchRegistration = function* watchPerformRegistration({
  payload,
}) {
  try {
    const { data } = yield call(api.createUser, payload)
    console.log(data)
    yield put({
      type: REGISTRATION_SUCCEEDED,
      payload: {
        msg: data,
      },
    })
  } catch (e) {
    const status = stripStatus(e.message)
    const errorMessageMap = {
      500: 'User already exists',
    }
    yield put({
      type: REGISTRATION_FAILED,
      payload: {
        error: errorMessageMap[status],
      },
    })
  }
}

export const watchAuthStatus = function* watchAuthCheck() {
  try {
    const { data } = yield call(api.checkToken)
    yield put({
      type: CHECK_AUTH_SUCCEEDED,
      payload: {
        username: data.username,
      },
    })
  } catch (e) {
    yield put({
      type: CHECK_AUTH_FAILED,
      payload: {
        error: 'Not authenticated',
      },
    })
  }
}
