import React from 'react'
import { createStore } from 'redux'
import { createRenderer } from '../../../test-utils'
import App from '../../../components/app'
import reducer from '../../../components/app/reducer'

describe('test suite for app component', () => {
  let fakeState
  const render = createRenderer(reducer, fakeState)
  beforeEach(() => {
    fakeState = {
      authStatus: {
        username: 'anonymous',
      },
      books: {
        isLoading: false,
      },
    }
  })
  it('renders app component and matches snapshot', () => {
    const store = createStore(() => fakeState)
    const component = render(<App />, { store })
    expect(component).toMatchSnapshot()
  })
})
