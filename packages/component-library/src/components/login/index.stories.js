import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Login from '.'

storiesOf('Components|Pages.Login', module)
  .addDecorator(withKnobs)
  .add('Login prompt', () => {
    return <Login onLogin={action('user-login')} />
  })
