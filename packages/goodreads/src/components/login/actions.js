export const LOGIN_STARTED = 'LOGIN_STARTED'
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const doLogin = (username, password) => {
  return {
    type: LOGIN_STARTED,
    payload: {
      email: username,
      password,
    },
  }
}
