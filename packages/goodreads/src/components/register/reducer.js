import {
  REGISTRATION_STARTED,
  REGISTRATION_SUCCEEDED,
  REGISTRATION_FAILED,
} from './actions'

const initialState = {
  isLoading: false,
  success: null,
  error: null,
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case REGISTRATION_SUCCEEDED: {
      return {
        ...state,
        success: action.payload.msg,
        isLoading: false,
      }
    }
    case REGISTRATION_FAILED: {
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
