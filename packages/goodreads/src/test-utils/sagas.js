import { runSaga } from 'redux-saga'

export async function executeSaga(saga, initialAction) {
  const dispatched = []

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    initialAction
  ).done

  return dispatched
}
