import * as api from '../../api'
import { LOGIN_SUCCEEDED } from '../../../components/login/actions'
import { executeSaga } from '../../../test-utils/sagas'
import { watchLogin } from '../login'

describe('login saga functionality', () => {
  api.authenticateUser = jest.fn()
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('logs into the app', async () => {
    const loginSuccess = {
      type: LOGIN_SUCCEEDED,
      payload: {
        msg: 'OK',
      },
    }
    const initialAction = {
      payload: { email: 'test@email.com', password: 'testpass' },
    }
    const { payload } = initialAction
    api.authenticateUser.mockImplementation(() =>
      Promise.resolve({ data: 'OK' })
    )
    const dispatched = await executeSaga(watchLogin, initialAction)
    expect(api.authenticateUser).toHaveBeenCalledWith(payload)
    expect(dispatched).toContainEqual(loginSuccess)
  })
})
