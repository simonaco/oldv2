export const REGISTRATION_STARTED = 'REGISTRATION_STARTED'
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED'
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED'

export const doRegister = (username, password) => ({
  type: REGISTRATION_STARTED,
  payload: {
    email: username,
    password,
  },
})
